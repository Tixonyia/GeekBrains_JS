/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по 
своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и 
белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами 
A, B, C, D, E, F, G, H.
2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, 
Ф – ферзь и т.п.,
*/

function board() {
    let table = document.createElement('table');
    let flag = true;
    let trr = document.createElement('tr');

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        let tdd = document.createElement('td');
        tdd.style.width = '25px';
        tdd.style.height = '25px';
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (let j = 0; j < 8; j++) {

            if (j == 0)
                flag = !flag;

            let td = document.createElement('td');

            td.style.width = '25px';
            td.style.height = '25px';
            if (flag) {
                td.style.background = 'brown';
            } else
                td.style.background = 'white';
            if (i == 6) td.innerHTML = '♙';
            else if (i == 1) td.innerHTML = '♟';
            else if (i == 0) {
                if (j == 0 || j == 7) td.innerHTML = '♜';
                else if (j == 1 || j == 6) td.innerHTML = '♞';
                else if (j == 2 || j == 5) td.innerHTML = '♝';
                else if (j == 3) td.innerHTML = '♛';
                else td.innerHTML = '♚';
            }
            else if (i == 7) {
                if (j == 0 || j == 7) td.innerHTML = '♖';
                else if (j == 1 || j == 6) td.innerHTML = '♘';
                else if (j == 2 || j == 5) td.innerHTML = '♗';
                else if (j == 3) td.innerHTML = '♕';
                else td.innerHTML = '♔';
            };

            tr.appendChild(td);
            flag = !flag;
        };
        table.appendChild(tr);
    };
    let arr = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let k = 0; k < 9; k++) {

        let td = document.createElement('td');
        td.style.width = '25px';
        td.style.height = '25px';
        td.style.background = 'white';
        td.innerHTML = arr[k];
        trr.appendChild(td);

    };
    table.appendChild(trr);
    document.body.appendChild(table);


};
board();

/* 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

function basket(basket = []) {
    let div_basket = document.createElement('div');
    let cotalog = [
        ['computer', ['Lenovo', 34000], ['Asus', 43000]],
        ['mause,'['Panteon', 1500], ['Jet', 2000]],
        ['monitor', ['Asus', 3200], ['Glass', 6500]],
        ['keyboard', ['Razer', 560], ['Zebra', 800000]]
    ];
    if (basket.length == 0) {
        div_basket.innerHTML = 'Корзина пуста';
    }
    else {
        let total = 0;
        let count_product = 0;
        for (let p = 0; p < basket.length; p++) {
            count_product += basket[p][2];
        };
        for (let j = 0; j < cotalog.length; j++) {
            for (let k = 0; k < basket.length; k++) {
                if (cotalog[j][0] == basket[k][0]) {
                    for (let r = 0; r < cotalog[j].length; r++) {
                        if (cotalog[j][r][0] == basket[k][1]) {
                            total += cotalog[j][r][1] * basket[k][2];
                        };
                    };
                };
            };
        };
        div_basket.innerHTML = `В корзине ${count_product} товаров на сумму ${total} рублей.`;
    };
    document.body.append(div_basket);
};
basket([['computer', 'Lenovo', 2], ['keyboard', 'Razer', 3]]);

/* 4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
4.1. Создать массив товаров (сущность Product);
4.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен 
содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

function output_catalog() {
    let cotalog = [
        ['computer', ['Lenovo', 34000], ['Asus', 43000]],
        ['mause', ['Panteon', 1500], ['Jet', 2000]],
        ['monitor', ['Asus', 3200], ['Glass', 6500]],
        ['keyboard', ['Razer', 560], ['Zebra', 800000]]
    ];
    for (let i = 0; i < cotalog.length; i++) {
        for (let k = 1; k < cotalog[i].length; k++) {
            let div_basket = document.createElement('div');
            div_basket.innerHTML = `В разделе ${catalog[i][0]} находится ${catalog[i][k][0]} 
                                        стоимостью ${catalog[i][k][1]}`;
            document.body.append(div_basket);
        };
    };
};
output_catalog();