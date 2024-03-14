"use strict";
// padrão 1
class User1 {
    constructor(email, name) {
        this.city = "São José do Rio Preto"; //private não permite a utilização fora da class
        this.email = email;
        this.name = name;
    }
}
// padrão 2 - o mais aplicado por profissionais
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "São José do Rio Preto";
    }
}
const pedro = new User("p@p.com", "Pedro");
pedro.city;
// getter:
class Userr {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // existe private, public e protected - Diferente do private que permite a utilização apenas dentro da própria classe, protected permite a utilização dentro de outras classes que "extends" essa classe
        this.city = "São José do Rio Preto";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter - there is no return type - por isso não devemos colocar :number, :string, :void, etc
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends Userr {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // aqui só foi possível utilizarmos o _courseCount pq mudamos de private para protected
    }
}
