function hello() {
    console.log('H', this)
}

const person = {
    name: 'Name123',
    age: 25,
    sayHello: hello,
    sayHelloWind: hello.bind(window), //Передает контекст window, document и т. д.
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd();
    }
}

const lena = {
    name: 'Lena',
    age: 23
}

const fnLena = person.logInfo.bind(lena, 'no job', '444');

person.logInfo.call(lena) // Call сразу вызывает функцию

person.logInfo.apply(lena, ['ksdfjdfs', '66007800']) // apply тоже вызывает функцию сразу, но параметры приходят в массиве

console.log('person: ', person)
console.log("-----")
console.log('person.sayHello: ', person.sayHello()) //
console.log("-----") 
console.log('person.sayHelloWind: ', person.sayHelloWind()) // 
console.log('person.sayHello: ', person.sayHello()) //
console.log("-----") 
console.log('person.logInfo: ', person.logInfo()) // 
console.log("-----") 
console.log('person.logInfoLena: ', person.logInfo.bind(lena, 'back', '7800')()) // 

fnLena('front', '8800')


// this по дефолту равно === window
//this - То что стоит слева от обращения  