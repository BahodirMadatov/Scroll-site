// //ООП - Обьекто-ориентированное программирование
// class Human {
//     // constructor(name, age, gender){
//     // constructor(params){
//     //деструктуризация
//     constructor({name, gender, age}){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.something = 'something';
//         this.think();//вызов обычного метода
//         // this.run(); 
//         // Human.run()//вызов статичного метода
//         // this.constructor.run();
//     }
//     think(){
//         console.log('they can think ', this.name);
//     }
//     // static run(){//статичные методы можно использовать без создания экземпляра класса
//     //     console.log('run, but it is static method');
//     // }
// };
// // const human1 = new Human('botir', 15, 'man');
// const human1 = new Human({
//     name: 'botir',
//     gender: 'man',
//     age: 15,
// });

// // const human2 = new Human('other', 189, 'man');
// // human1.run()
// // Human.run();
// // human1.think();
// // human2.think();
// // console.log(human1);

// class Man extends Human{
//     constructor({name, gender, age, color}){
//         super({name, gender, age, color});
//         this.color = color;
//     }
//     say(){
//         console.log('I am man');
//     }
// }
// const obj = new Man({
//     name: 'asd',
//     age: 18,
//     gender: 'man',
//     color: 'white'
// });
// // obj.say()
// obj.think()
// console.log(obj);

// class Div{
//     constructor({title, descr, color, bg}){
//         this.title = title;
//         this.descr = descr;
//         this.color = color;
//         this.bg = bg;
//         this.createDiv();
//     }
//     createDiv(){
//         const div = document.createElement('div');
//         div.setAttribute('style', `background: ${this.bg}; color: ${this.color};padding: 20px`);
//         div.innerHTML = `
//             <h3>${this.title}</h3>
//             <p>${this.descr}</p>
//         `;
//         document.body.append(div);
//     }
// }
// const myDiv = new Div({
//     title: 'Первый див',
//     descr: 'В некотором царстве, в некотором государстве жил ...',
//     color: '#fff',
//     bg: '#000'
// });
// const myDiv2 = new Div({
//     title: 'Второй див',
//     descr: 'В некотором царстве, в некотором государстве жил ...',
//     color: '#fff',
//     bg: 'crimson'
// });
// window.innerWidth - ширина просматриваемой области экрана
// window.innerHeight - высота просматриваемой области экрана
// let a = document.querySelector('.header__nav');
// a.clientWidth; //ширина самого элемента
// a.clientHeight; //высота самого элемента
// window.addEventListener('mouseover', function(){//наведение на элемент

// })
// window.addEventListener('mouseout', function(){//уведение мышки с элемента

// })
// window.addEventListener('mousemove', function(e){//движение мышки 
//     console.log(e.clientX, e.clientY); //координаты мыши
// })
class Scroll {
    constructor({el, unit = '%', top}) {
        this.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.unit = unit;
        this.top = top;
        this.el.style.position = 'fixed';
        this.scrolling();
        window.addEventListener('scroll', () => this.scrolling());
        window.addEventListener('resize', () => this.scrolling());
    }
    calcPx(height, per) {
        return height / 100 * per;
    }
    checkUnits(){
        let h = window.innerHeight - this.el.clientHeight;
        if(this.unit == '%'){
            return this.top >= 0 && this.top <= 100 ? this.calcPx(h, this.top) : 0;
        }
        else return this.top >= 0 && this.top <= h ? this.top : 0
    }
    scrolling(){
        let s = this.checkUnits();
        if(s > window.scrollY){
            this.el.style.top = s - window.scrollY +'px';
        }
        else this.el.style.top = 0;
    }
}
const myScroll = new Scroll({
    el: '.header__nav',
    unit: '%',
    top: 60
});


// прилипание текста
const header = document.querySelector('.header'),
      headerContent = document.querySelector('.header__content');
header.addEventListener('mousemove', function (e) {
    headerContent.style.position = 'absolute';
    headerContent.style.left = e.clientX + 'px';
    headerContent.style.top = e.clientY + 'px';
})