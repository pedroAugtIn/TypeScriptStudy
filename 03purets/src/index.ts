// padrão 1
class User1 {
    public email: string // tudo que não é marcado como private é automaticamente "public"
    private name: string
    readonly city: string = "São José do Rio Preto" //private não permite a utilização fora da class

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;

    }
}

// padrão 2 - o mais aplicado por profissionais
class User {
    readonly city: string = "São José do Rio Preto" 
    constructor(
        public email: string, 
        private name: string,
        ){
    }
}


const pedro = new User("p@p.com", "Pedro")
pedro.city


// getter:
class Userr {

    protected _courseCount = 1   // existe private, public e protected - Diferente do private que permite a utilização apenas dentro da própria classe, protected permite a utilização dentro de outras classes que "extends" essa classe

    readonly city: string = "São José do Rio Preto" 
    constructor(
        public email: string, 
        private name: string,
        ){
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    //setter - there is no return type - por isso não devemos colocar :number, :string, :void, etc

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends Userr {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4 // aqui só foi possível utilizarmos o _courseCount pq mudamos de private para protected
    }
}







