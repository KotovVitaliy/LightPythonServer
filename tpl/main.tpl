<br>
<div id="content" class="greeting">
    <h3 style="display: inline-block">Школьный фотоальбом</h3>&nbsp;<span class="badge badge-primary">Найди друга</span>
    <br><hr>
    <div id="filter" style="display: none;">
        <div class="row">

            <div class="filter" id="filter_by_gender">
                <p>Пол</p>

                <div class="form-check">
                    <input class="form-check-input" name="filter_gender" type="radio" value="" id="filter_gender_all" tabindex="1" checked>
                    <label class="form-check-label" for="filter_gender_all">Все</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="filter_gender" type="radio" value="" id="filter_gender_m" tabindex="2">
                    <label class="form-check-label" for="filter_gender_m">Мужской</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="filter_gender" type="radio" value="" id="filter_gender_f" tabindex="3">
                    <label class="form-check-label" for="filter_gender_f">Женский</label>
                </div>
            </div>

            <div class="filter" id="filter_by_age">
                <p>Возраст</p>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">От</span>
                    </div>
                    <input placeholder="0" type="text" class="form-control js_age_filter from" aria-label="Small" aria-describedby="inputGroup-sizing-sm" tabindex="4">
                </div>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">До</span>
                    </div>
                    <input placeholder="&#8734;" type="text" class="form-control js_age_filter to" aria-label="Small" aria-describedby="inputGroup-sizing-sm" tabindex="6">
                </div>
            </div>

            <div class="filter" id="filter_by_name">
                <p>Имя</p>

                <div class="form-group">
                    <input type="email" class="form-control" id="filter_by_name_input" aria-describedby="filter_by_name" placeholder="Имя" tabindex="5">
                    <small class="form-text text-muted filter_by_name_output">Поиск по всем именам</small>
                </div>

            </div>

        </div>
    </div>

    <hr><br>

    <div id="catalog">
        <div class="row"></div>
        <p><b><i>Loading...</i></b></p>
    </div>
</div>

<div id="overlay">
    <div class="ovl_container row">
        <div class="row ovl_wrapper">

        </div>
    </div>
</div>