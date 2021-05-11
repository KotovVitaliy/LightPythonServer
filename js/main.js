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

$(document).on('click', '.js_open_overlay', function() {
    let id = $(this).data('id');
    let cat_element = data[id];
    drawOverlay(cat_element, id);
});

$(document).on('click', '.js_overlay_turn', function () {
    let id = $(this).data('id');
    let cat_element = data[id];
    drawOverlay(cat_element, id);
});

$(document).on('click', '.js_close_overlay', hideOverlay);

$(document).on('click', '.js_get_price', function () {
    let id = $(this).data('id');
    $.get('/ajax/cat/get_price', {id:id}).done(function(data) {
        $('.js_price').text("Цена: " + data + " рублей");
    });
});

function drawOverlay(cat_element, id) {
    let title = cat_element.name;
    let image = cat_element.gender == 'F' ? 'f.png' : 'm.png'

    let tpl = overlay_tpl
        .replace('{TITLE}', title)
        .replace('{PREV_ID}', id - 1)
        .replace('{NEXT_ID}', id + 1)
        .replace('{ID}', id)
        .replace('{IMG}', "/imgs/" + image)
        .replace('{AGE}', "Возраст: " + cat_element.age + " лет");

    showOverlay(tpl);
}

function hideOverlay() {
    $('#overlay > .ovl_container > .ovl_wrapper').html('');
    $('#overlay').hide();
}

function showOverlay(tpl) {
    $('#overlay > .ovl_container > .ovl_wrapper').html(tpl);
    $('#overlay').show();
}

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