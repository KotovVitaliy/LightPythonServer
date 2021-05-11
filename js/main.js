$(document).ready(function() {
    setTimeout(drawFullCatalog, 500);
    setTimeout(showFilter, 500);
});

$(document).on('input', '.js_age_filter', function () {
    clearCatalog();

    let from = $('.js_age_filter.from').val();
    if (from === "") from = 0;
    from = parseInt(from);

    let to = $('.js_age_filter.to').val();
    if (to === "") to = Infinity;
    else to = parseInt(to);

    if (isNaN(from)) {
        console.error("Cannot parse value of age from... " + from);
        clearCatalog();
    } if (isNaN(to) && to !== Infinity) {
        console.error("Cannot parse value of age to... " + to);
        clearCatalog();
    } else {
        drawByAge(from, to);
    }
});

$(document).on('input', '#filter_by_name_input', function() {
    clearCatalog();

    let subname = $(this).val();
    if (subname === "") {
        drawFullCatalog();
        $('.filter_by_name_output').html("Поиск по всем именам");
    } else if (subname.length <= 2) {
        $('.filter_by_name_output').html("Надо ввести больше 3 или больше символа");
        return false;
    } else {
        drawByName(subname);
        $('.filter_by_name_output').html("Поиск по имени: " + subname);
    }
});

$(document).on('click', '#filter_gender_all', function() {
    clearCatalog();
    drawFullCatalog();
});


$(document).on('click', '#filter_gender_f', function() {
    clearCatalog();
    drawByGender('F');
});


$(document).on('click', '#filter_gender_m', function() {
    clearCatalog();
    drawByGender('M');
});

$(document).on('click', '#filter_gender_k', function() {
    clearCatalog();
    drawByAge(0, 5);
});

$(document).on('mouseover', '.js_size_flipper', function() {
    let current_width = $(this).css('width');
    current_width = (parseInt(current_width) + 10) + "px";
    $(this).css({'width':current_width});
});

$(document).on('mouseout', '.js_size_flipper', function() {
    let current_width = $(this).css('width');
    current_width = (parseInt(current_width) - 10) + "px";
    $(this).css({'width':current_width});
});


function drawFullCatalog() {
    data.forEach(drawSingleElement);
}

function drawByAge(from, to) {
    if (from < 0 || to < 0) {
        drawFullCatalog();
        return true;
    }
    data.forEach((el, index) => {
        if (el.age >= from && el.age <= to) {
            drawSingleElement(el, index);
        }
    });
}

function drawByName(subname) {
    data.forEach((el, index) => {
        if (el.name.includes(subname)) {
            drawSingleElement(el, index);
        }
    });
}

function drawByGender(gender) {
    data.forEach((el, index) => {
        if (el.gender === gender) {
            drawSingleElement(el, index);
        }
    });
}

function drawSingleElement(el, index) {
    let description_line = "Возраст: " + el.age + " лет";
    let image = el.gender == 'F' ? 'f.png' : 'm.png'
    let title_line = el.name;

    let tpl = catalog_tpl
        .replace(/{ID}/g, index)
        .replace(/{SRC}/, "/imgs/" + image)
        .replace(/{DESCRIPTION}/, description_line)
        .replace(/{TITLE}/, title_line);
    $('#catalog > div').append(tpl);
}

function clearCatalog() {
    $('#catalog > div').html('');
}

function showFilter() {
    $('div#filter').show(1);
}