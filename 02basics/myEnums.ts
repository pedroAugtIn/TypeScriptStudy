enum SeatChoice { // isto geraria um grande código em javascript. Podemos abreviar e evitar um arquivo .js muito longo apenas adicionando const antes de nosso enums
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE // ao colocar o ponto ele automaticamente me dá as 4 opções;


const enum SeatChoices { // isto geraria um grande código em javascript. Podemos abreviar e evitar um arquivo .js muito longo apenas adicionando const antes de nosso enums
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeats = SeatChoices.AISLE // ao colocar o ponto ele automaticamente me dá as 4 opções;


// https://www.typescriptlang.org/play?#code/KYOwrgtgBAysCGAXAwgCwPYEsDGwoG8AoKEqAQQEkYAZAUSgF4oAieTAZwBthmAaY0gFkKAERF1GUAMz9SUAOoUAciIDy82aQBiqgKoAlACoAJQgF9ChbOhDtEUVNjhJJzlBhzAAdJRr0A9P5Q8OhQ1pzo2PAATlChAA42iKHA3MFgyRBIOPAQoIh4eVAAJgCHwexQACxx8QDnAK-A7ADclu1AA

// No "playground" do typescript podemos ver a diferença de ambos os códigos quando "compilados" de .ts para .js












