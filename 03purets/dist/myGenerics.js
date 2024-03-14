"use strict";
// https://www.typescriptlang.org/docs/handbook/2/generics.html
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
} // aqui basicamente podemos pegar any type of value e return any type of value; take number as input return as string - não é uma ótima ideia
function identityThree(val) {
    return val;
} // aqui Type está pronto para aceitar qualquer type também. 
// A diferença é que à partir do momento pegamos um "number" (ou outro type) as input, our return must be a number to
//identityThree("3")
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({brand: "glass", type: 12})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some databse operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
