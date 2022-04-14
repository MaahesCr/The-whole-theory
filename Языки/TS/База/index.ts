// глобальная установка npm i -g typescript

// ТИПЫ
/*
const str: string = 'Hello'; 
console.log(str);
*/

//Bool 
const isFetching: boolean = true;
const isLoading: boolean = false;

//Числа
const int: number = 42; 
const float: number = 2.5;
const num: number = 3e10;

//String
const str: string = 'Hello';

//Arr
const numberArray: number[] = [1,1,2,3,5,8,13];
const numberArray2: Array<number> = [1,1,2,3,5,8,13];

const words: string[] = ['',''];

// Tuple - разнотиповый массив
const contact: [string, number] = ['qwe',7902];

// Any
let variable: any = 42;
// ...
variable = 'qwe';
variable = [];

function sayMyName(name: string): void {    // : void - потому что ничего не вернет 
    console.log(name);
}

sayMyName('Arbuz');

// Never

function throwError(message: string): never{
            throw new Error(message);      
}

// Type
type login = string;

const Login: login = 'admin';
//const Login2: login = 2; //err

type ID = string | number;
const id1: ID = 123;
const id2: ID = 'fds';

//NULL, Undef

type someType = null | undefined;

