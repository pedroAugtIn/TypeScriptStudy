const User = {
    name: "Pedro",
    email: "pdro996@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}
let newUser = {name: "pedro", isPaid: false, email: "p@p.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "rango", price: 20}
}


// creating a type
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUserr (user: User) : User{
    return{name: "", email: "", isActive: true}
}{
createUserr({name: "", email: "", isActive: true})
}


type Userr = {
    readonly _id: string; // adicionando o readonly antes de _id impedimos sua alteração futura
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number // o ? transforma em um item opcional
}

let myUserr: Userr = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUserr.email = "h@gmail.com"
// myUserr._id = "asa"   -> apenas para visualizar o erro que o readonly impedi a alteração de _id



export {}