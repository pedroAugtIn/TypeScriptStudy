// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string, // ? torna opcional
    // startTrail: () => string              // método opcional ao abaixo
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {  // ao fazer isso, o que poderiamos achar que é errado, "reabre" nosso interface "User" e adiciona a ele uma nova propriedade
    githurbToken: string
}

interface Admin extends User{  // enteds é uma "keyword" que basicamente atribui todas as propriedades de User para Admin também
    role: "admin" | "ta" | "learner"
}


const pedro: Admin = {dbId: 22, email: "p@p.com", userId: 2211, role: "admin",  githurbToken:",", startTrail: () => {
    return "trail started"
}, 
getCoupon: (name: "pedro10", off: 10) => {
    return 10
}
} // se alterar para "const pedro: User", teriamos que excluir o "role: "admin"", pois Admin, além das propriedades de "User" que extends para "Admin", ainda tem a propriedade adicional de "role" 


pedro.email = "p@a.com"
// pedro.dbId = 11    -> apenas para exibir que é inalteravel devido o readonly

