import User from './user';

const user = new User('John', 'Winston', 'Lennon');
user.getFullName();

class Container{
    constructor(id, className){
        this.id = id;
        this.className = className;
    }

    render() {
        let div = document.createElement('div');
        div.id = this.id;
        div.classList.add(this.className);

        return div;
    }
}

class Menu extends Container{
    constructor(id, className, items){
        super(id, className);
        this.items = items;
    }
    render() {
        let ul = document.createElement('ul');
        ul.id = this.id;
        ul.classList.add(this.className);
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] instanceof MenuItem) {
                ul.appendChild(this.items[i].render());
            }
        }

        return ul;
    }
}

class MenuItem extends Container{
    constructor(id, className, href, label){
        super(id, className);
        this.href = href;
        this.label = label;
    }
    render() {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = this.href;
        a.textContent = this.label;
        li.appendChild(a);

        return li;
    }
}

let item1 = new MenuItem('home', 'li', '/', 'Главная');
let item2 = new MenuItem('catalog', 'li', '/catalog', 'Каталог');
let item3 = new MenuItem('about', 'li', '/about', 'О нас');

let menu = new Menu('menu', 'menu', [
    item1, item2, item3
]);

document.body.appendChild(menu.render());