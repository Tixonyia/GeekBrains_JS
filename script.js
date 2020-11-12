/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны
получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
пустой объект.
*/

number = prompt('Enter number from 0 to 999.');
function converter(number) {
    let converter_number = {};
    if (number > 999) {
        console.log('Number more then 999.');
        return converter;
    }
    let units = 0;
    let dozens = 0;
    let hundreds = 0;
    if (number.length == 3) {
        hundreds += +number[0];
        dozens += +number[1];
        units += +number[2];
    }
    else if (number.length == 2) {
        dozens += +number[0];
        units += +number[1];
    }
    else if (number.length == 1) {
        units += +number[0];
    }
    converter_number['hundreds'] = hundreds;
    converter_number['dozens'] = dozens;
    converter_number['units'] = units;
    for (var key in converter_number) {
        alert(`${key} : ${converter_number[key]}`);
    }

    return converter_number;
};
converter(number)


/* 2. Для игры, реализованной на уроке, добавить ограничение движения за пределы карты.
*/

const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        if (this.y == 9 && direction == 2) {
            return;
        }
        else if (this.x == 0 && direction == 4) {
            return;
        }
        else if (this.x == 9 && direction == 6) {
            return;
        }
        else if (this.y == 0 && direction == 8) {
            return;
        }
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
        }
    }
};

const game = {
    settings,
    player,

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === -1) return alert('До свидания!');

            this.player.move(direction);
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += '0 ';
                } else {
                    map += 'X ';
                }
            }
            map += '\n';
        }
        console.clear();
        console.log(map);
    },

    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true) {
            const direction = parseInt(prompt('Введите число куда хотите переместиться или -1 для выхода.'));

            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            return direction;
        }
    }
}

game.run();

/* 3.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно
заменить их элементы?
3.2. Реализуйте такие объекты.
3.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

let product_Price = {
    computer: { Lenovo: 34000, Asus: 43000 }, mause: { Panteon: 1500, Jet: 2000 },
    monitor: { Asus: 3200, Glass: 6500 }, keyboard: { Razer: 560, Zebra: 800000 }
}
let basket = { computer: 'Lenovo', keyboard: 'Razer' };
function countBasketPrice(basket, product_Price) {
    let total = 0;
    for (key in basket) {
        total += product_Price[key][basket[key]]
    }
    return total;
}
alert(`Total price: ${countBasketPrice(basket, product_Price)}`);