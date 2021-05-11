let data = [
    {
        'name': 'Олег',
        'gender': 'M',
        'age': 13
    },
    {
        'name': 'Ким',
        'gender': 'F',
        'age': 11
    },
    {
        'name': 'Паша',
        'gender': 'M',
        'age': 15
    },
    {
        'name': 'Дороти',
        'gender': 'F',
        'age': 13
    },
    {
        'name': 'Гудвин',
        'gender': 'M',
        'age': 14
    },
    {
        'name': 'Ватсон',
        'gender': 'M',
        'age': 13
    },
    {
        'name': 'Чарли',
        'age': 15
    },
    {
        'name': 'Тави',
        'gender': 'M',
        'age': 17
    },
    {
        'name': 'Света',
        'gender': 'F',
        'age': 13
    },
    {
        'name': 'Лешка',
        'age': 11
    },
    {
        'name': 'Ася',
        'gender': 'F',
        'age': 13
    },
    {
        'name': 'Ральф',
        'gender': 'M',
        'age': 12
    },
    {
        'name': 'Лила',
        'gender': 'F',
        'age': 14
    },
    {
        'name': 'Маруся',
        'gender': 'F',
        'age': 11
    },
    {
        'name': 'Эмми',
        'gender': 'F',
        'age': 20
    },
    {
        'name': 'Робин',
        'gender': 'M',
        'age': 14
    },
    {
        'name': 'Мира',
        'gender': 'F',
        'age': 15
    },
    {
        'name': 'Джун',
        'gender': 'M',
        'age': 20
    },
    {
        'name': 'Гуччи',
        'gender': 'M',
        'age': 12
    },
    {
        'name': 'Алита',
        'gender': 'F',
        'age': 18
    },
    {
        'name': 'Боря',
        'gender': 'M',
        'age': 19
    },
    {
        'name': 'Ральф',
        'gender': 'M',
        'age': 7
    },
    {
        'name': 'Клара',
        'gender': 'F',
        'age': 10
    },
    {
        'name': 'Маня',
        'age': 12
    },
    {
        'name': 'Салли',
        'gender': 'F',
        'age': 12
    },
    {
        'name': 'Байрон',
        'gender': 'M',
        'age': 22
    },
    {
        'name': 'Крис',
        'gender': 'F',
        'age': 16
    },
    {
        'name': 'Максимилиан',
        'gender': 'M',
        'age': 24
    },
    {
        'name': 'Шарлотта',
        'gender': 'F',
        'age': 12
    },
    {
        'name': 'Хельга',
        'gender': 'F',
        'age': 17
    },
    {
        'name': 'Окси',
        'gender': 'F',
        'age': 17
    },
    {
        'name': 'Веня',
        'gender': 'F',
        'age': 6
    },
    {
        'name': 'Сарра',
        'gender': 'F',
        'age': 14
    },
    {
        'name': 'Кири',
        'gender': 'F',
        'age': 7
    },
    {
        'name': 'Рэй',
        'gender': 'M',
        'age': 13
    },
    {
        'name': 'Пэт',
        'gender': 'F',
        'age': 7
    },
    {
        'name': 'Дэнни',
        'gender': 'F',
        'age': 12
    },
    {
        'name': 'Стэн',
        'gender': 'M',
        'age': 16
    },
    {
        'name': 'Сэмюэл',
        'gender': 'M',
        'age': 21
    },
    {
        'name': "Азар",
        'gender': 'M',
        'age': 19
    },
    {
        'name': "Абрам",
        'gender': 'M',
        'age': 12
    },
    {
        'name': "Олег",
        'gender': 'M',
        'age': 22
    },
];

let catalog_tpl = `
<div class="card custom js_size_flipper" style="width: 165px;" data-id="{ID}">
  <img class="card-img-top" src="{SRC}" style="height:150px" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{TITLE}</h5>
    <p class="card-text">{DESCRIPTION}</p>
    <span class="btn btn-success js_open_overlay" data-id="{ID}">Открыть</span>
  </div>
</div>
`;

let overlay_tpl = `
        <div>
            <div class="img_wrapper">
                <img src="{IMG}" alt="Cat">
            </div>
        </div>

        <div>
            <div>
                <h2 style="white-space: nowrap;">{TITLE}</h2>
                <p>{AGE}</p>
                <p class="js_price"></p>
            </div>
            <div class="row overlay_options">
                <div><span class="btn btn-success js_overlay_prev js_overlay_turn" data-id="{PREV_ID}">&larr;&nbsp;Туда</span></div>
                <div><span class="btn btn-success js_overlay_next js_overlay_turn" data-id="{NEXT_ID}">Сюда&nbsp;&rarr;</span></div>
            </div>
            <div class="row overlay_options">
                <div><span class="btn btn-primary js_get_price" data-id="{ID}">Контакты</span></div>
                <div><span class="btn btn-primary js_get_price" data-id="{ID}">Контакты</span></div>
                <div><span class="btn btn-danger js_close_overlay">Закрыть</span></div>
            </div>
        </div>
`;