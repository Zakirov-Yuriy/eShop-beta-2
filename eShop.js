class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
        console.log(this.calcSum());
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, category: "Shirts", title: 'Shirt', price: 150, img: '' },
            { id: 2, category: "Socks", title: 'Socks', price: 50, img: ' ' },
            { id: 3, category: "Jackets", title: 'Jacket', price: 350, img: '' },
            { id: 4, category: "Shoes", title: 'Shoes', price: 250, img: '' }

        ];
    }
    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    calcSum() {
        return this.allProducts.reduce((sum, item) => sum += item.price, 0);
    }
}

class ProductItem {
    constructor(product, img = '') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item" data-id="item-${this.id}">
              <h3>${this.title}</h3>
              <p>${this.price} руб.</p>
              <img src="${this.img}" alt="product-img">
              <button class="buy-btn">Купить</button>
            </div>`
    }
}

new ProductsList();

class Cart {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
    }
}

class CartItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }
}