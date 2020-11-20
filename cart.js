const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

let cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();
/* 1. Продолжаем реализовывать модуль корзины:
а.Добавить в обьект корзины выбранные товары по клику на кнопке <<Купить>> без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление её внешнего вида.
*/
const cartItemCatalog = {
    render(goodsCatalog) {
        return `<div class="goods">
                    <div><b>Наименование</b>: ${goodsCatalog.product_name}</div>
                    <div><b>Цена за шт.</b>: ${goodsCatalog.price}</div>
                    <button class=catalogBtn>Купить</button>
                </div>`;
    }
}
const cartCatalog = {
    cartListBlockCatalog: null,
    cartButtonCatalog: null,
    cartItemCatalog,
    goodsCatalog: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
        },
        {
            id_product: 398,
            product_name: 'Камера',
            price: 987,
        },
        {
            id_product: 129,
            product_name: 'Монитор',
            price: 7000,
        },
        {
            id_product: 321,
            product_name: 'Наушники',
            price: 4000,
        },
    ],
    init() {

        this.cartListBlockCatalog = document.querySelector('.catalog');
        this.renderCatalog();
        this.cartButtonCatalog = document.querySelectorAll('.catalogBtn');
        for (let i of this.cartButtonCatalog) {
            i.addEventListener('click', this.goodAppend);
        };

    },
    renderCatalog() {
        if (this.goodsCatalog.length) {
            this.goodsCatalog.forEach(goodsCatalog => {
                this.cartListBlockCatalog.insertAdjacentHTML('beforeend', this.cartItemCatalog.render(goodsCatalog));
            });
        } else {
            this.cartListBlock.textContent = 'Каталог пуст';
        };
    },
    goodAppend() {
        let butt = event.target;
        let parent = butt.parentElement.parentElement;
        let ind = -1;
        for (let i of parent.children) {
            if (butt.parentElement == i) break;
            ind++;
        };
        let keyItem = cartCatalog.goodsCatalog[+ind].id_product;
        let entry = false;
        for (let i of cart.goods) {
            if (i.id_product == keyItem) entry = true
        };
        if (entry == false) {
            let app = cartCatalog.goodsCatalog[+ind];
            app.quantity = 1;
            cart.goods.push(app);
            document.querySelector('.cart-list').innerHTML = '';
            cart.init();

        }
        else if (entry == true) {
            for (let i of cart.goods) {
                if (i.id_product == keyItem)
                    i.quantity++
            };
            document.querySelector('.cart-list').innerHTML = '';
            cart.init();
            ;
        }
        ;
    }
};
cartCatalog.init();
