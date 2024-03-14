function addTwo(num: number): number{ // ao estabelecermos um novo number após (num: number) estamos dizendo ao typescript que mina função deve me retornar um número, evitando que o return "helo" seja aceito, passando a indicar um erro durante o desenvolvimento de nosso código
    return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("pedro")

signUpUser("Pedro", "pdro996@gmail.com", true)
loginUser("p", "p@p.com")

// function getValue(myVal: number){      obs: esta é uma exceção ao nosso primeiro caso, onde não podemos definir o que queremos que seja retornado em nossa função pois existem types diferentes.
//     if (myVal > 5) {
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1,2,3]

heros.map(hero => {     // o typescript define automaticamente o type de nosso "hero", conforme aquilo que é aplicado ao parâmetro .map, basta alterar o comentário acima que é possível ver essa troca do type "hero"
    return `hero is ${hero}`
})

// heros.map((hero):string => {     também pode ser utilizado desta forma
//     return `hero is ${hero}`
// })


// https://www.typescriptlang.org/docs/handbook/2/functions.html
function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}


export {}