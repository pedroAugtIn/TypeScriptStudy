// https://www.typescriptlang.org/docs/handbook/2/generics.html

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
} // aqui basicamente podemos pegar any type of value e return any type of value; take number as input return as string - não é uma ótima ideia

function identityThree<Type>(val: Type): Type {
    return val
} // aqui Type está pronto para aceitar qualquer type também. 
  // A diferença é que à partir do momento pegamos um "number" (ou outro type) as input, our return must be a number to

//identityThree("3")

function identityFour<T>(val: T): T { // em relação ao identityThree, aqui apenas utilizamos "shortcuts"
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({brand: "glass", type: 12})

function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some databse operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
























