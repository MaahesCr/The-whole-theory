class User {
    #_username;
    #_password;
    #_id;


    constructor(username, password){
        this._username = username;
        this._password = password;
        this._id = Math.random();
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

    get id() {
        return this._id;
    }

}

const user = new User ('leon', 'qwerty');

console.log(user);

console.log(user.username);
user.username = 'not leon';
console.log(user.username);
