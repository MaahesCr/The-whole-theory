class User {
    #_username;
    #_password;
    #_age;

    constructor(username, password, age){
        this._username = username;
        this._password = password;
        this._age = age;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this.password = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value > 0){ this._age = value;}
        else {this._age = 0;}
    }

}

class Emploer extends User {
    #_INN
    #_Snils

    constructor (username, password, age, INN, Snils) {
        super(username, password, age);
        this._INN = INN;
        this._Snils = Snils;
    }

    
    get INN() {
        return this._INN;
    }

    set INN(value) {
        this._INN = value;
    }

    get SNILS() {
        return this._Snils;
    }

    set SNILS(value) {
        this._Snils = value;
    }

}

class Developer extends Emploer {
    #_Lang
    #_LVL

    constructor (username, password, age, INN, Snils, lang, lvl) {
        super (username, password, age, INN, Snils);
        this._lang = lang;
        this._lvl = lvl;
    }

    get lang() {
        return this._lang;
    }

    set lang(value) {
        this._lang = value;
    }

    get lvl() {
        return this._lvl;
    }

    set lvl(value) {
        this._lvl = value;
    }

}

const developer = new Developer ('Leo', 'qwerty', 22, 620260, 112233, 'js', 'middle');

console.log(developer);

console.log(developer.username);
developer.INN = 111111;
console.log(developer.INN);