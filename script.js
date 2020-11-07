/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let number_start = +prompt("Enter start number >= 0");
let number_end = + +prompt("Enter end number >= 0");

function simpleNumbers(number_start, number_end) {
    let simples = [];
    let conclusion = true;
    if (number_start <= 2) simples.push(2);
    while (number_start <= number_end) {
        conclusion = true;
        if (number_start % 2 == 1) {
            for (let i = 2; i < number_start; i++) {
                if (number_start % i == 0) conclusion = false;
            }
            if (conclusion == true) simples.push(number_start);
        }
        number_start++;
    }
    return simples;
}
alert(simpleNumbers(number_start, number_end));

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность 
корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней
товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let product_Price = {
    'computer': 34000, 'mause': 100, 'monitor': 3200, 'keyboard': 1500
}
let basket = ['computer', 'keyboard'];
function countBasketPrice(basket, product_Price) {
    let total = 0;
    for (let prod of basket) {
        total += product_Price[prod];
    }
    return total;
}
alert(`Total price: ${countBasketPrice(basket, product_Price)}`);

/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
Выглядеть это должно так: for(…){// здесь пусто}
*/

for (let i = 0; i < 9; i++, alert(i)) { }

/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
let array = [];
let a = 0;
while (a < 20) {
    array.push('x');
    console.log(array);
    a++;
}
