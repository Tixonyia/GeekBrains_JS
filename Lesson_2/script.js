
/*
1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
*/
/*
Ответ
2 строка: сначала прибавляем 1 к a, затем в переменную с записывается значение.
3 строка: сначала в d записывается значение b, и лишь потом к переменной b прибавляется 1.
4 строка: прибавляем к a(2) 1, получаум (3). Затем прибавляем 2 и новое значение записывается в
переменную с.
5 строка: к переменной b сначала прибавляем 2 и записываем в переменную d, и
после этого в переменную b записывается ее старое значение +1.
*/

/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
Отвент: 5
*/
/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

let a = +prompt('Enter your first number: ');
let b = +prompt('Enter your second number: ');
function sum(a, b) {
    return a + b;
}
function diff(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
if (a >= 0 && b >= 0) alert(`the difference is ${diff(a, b)}`);
else if (a < 0 && b < 0) alert(`the multiplication is ${mult(a, b)}`);
else alert(`the summa is ${sum(a, b)}`);

/*4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/;
a = +prompt('Enter your number from 0 to 15: ');
function numbersRange(a) {
    switch (a) {
        case 0:
            alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
            break;
        case 1:
            alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
            break;
        case 2:
            alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
            break;
        case 3:
            alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
            break;
        case 4:
            alert('4 5 6 7 8 9 10 11 12 13 14 15');
            break;
        case 5:
            alert('5 6 7 8 9 10 11 12 13 14 15');
            break;
        case 6:
            alert('6 7 8 9 10 11 12 13 14 15');
            break;
        case 7:
            alert('7 8 9 10 11 12 13 14 15');
            break;
        case 8:
            alert('8 9 10 11 12 13 14 15');
            break;
        case 9:
            alert('9 10 11 12 13 14 15');
            break;
        case 10:
            alert('10 11 12 13 14 15');
            break;
        case 11:
            alert('11 12 13 14 15');
            break;
        case 12:
            alert('12 13 14 15');
            break;
        case 13:
            alert('13 14 15');
            break;
        case 14:
            alert('14 15');
            break;
        case 15:
            alert('15');
            break;
    }
}
numbersRange(a);

/*
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return
*/
/* 3 есть, деление осталось.*/

function div(a, b) {
    return a / b;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от 
переданного значения операции выполнить одну из арифметических операций (использовать функции из 
пункта 3) и вернуть полученное значение (использовать switch). 
*/

let arg1 = +prompt('Enter your first number: ');
let arg2 = +prompt('Enter your second number: ');
let operation = prompt('Enter your operation: ');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            alert(sum(arg1, arg2));
            break;
        case '-':
            alert(diff(arg1, arg2));
            break;
        case '*':
            alert(mult(arg1, arg2));
            break;
        case '/':
            alert(div(arg1, arg2));
            break;
    }
}
mathOperation(arg1, arg2, operation);
/*
7. *Сравнить null и 0. Попробуйте объяснить результат.
*/
/*
Ответ.
'null' отсутствие чкго либо или место под что-то. "0" - number.
null == 0 -> false
*/
/*
8. *С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/
let val = +prompt('Enter your number: ');
let pow = +prompt('Enter your power: ');
function recurs(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * recurs(val, pow - 1);
    }
}
function power(val, pow) {
    if (pow < 0) {
        pow = - pow
        return 1 / recurs(val, pow);
    }
    else if (pow == 0) {
        return 1;
    }
    else if (pow > 0) {
        return recurs(val, pow);
    }

}
alert(`Result: ${power(val, pow)}`);