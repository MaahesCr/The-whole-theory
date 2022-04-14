function sum (a, b){
    return a + b;
}

let res = sum(4,5);
console.log(res);

//допустим есть html док, подключенный уже и по клику
// необходим вызов этой ф-ии

document.querySelector('.div').addEventListener('click', function () {
    let res = sum(4,5);
    console.log(res);
})

// здесь используется функция обертка для тех же действий
// стрелочная функция - просто сокращенный вариант 
// true 
document.querySelector('.div').addEventListener('click', () => {
    let res = sum(4,5);
    console.log(res);
})

//запуск двух функций

document.querySelector('.div').addEventListener('click', function () {
    let res = sum(4,5);
    console.log(res);
    let res2 = sum(6, 20);
    console.log(res2);
})
// true
document.querySelector('.div').addEventListener('click', () => {
    let res = sum(4,5);
    console.log(res);
    let res2 = sum(6, 20);
    console.log(res2);
})

// callback
const arr1 = [4,5,6,7];

function pow2 (a) {
    return a**2;
}

const res2 = ar1.map(pow2); // map переберает все элементы массива и применяет к ним функцию в скобках 
console.log(res2);

// можно так 

const res3 = ar1.map((a) => {
    return a**2;
})

// сокращенный синтаксис стрелочной 
// если одна строка, то можно убрать {} и return

const res4 = ar1.map((a) => a**2)

//при одном аргументе можно убрать строки аргумента

const res5 = ar1.map(a => a**2)

// filter 

const res6 = arr1.filter((item, index) => { // filter работает только с прошедшими проверку
    if (index % 2 === 0) {
        return true;
    }
})

// причешем 


const res6 = arr1.filter((item, index) => (index % 2 === 0));
