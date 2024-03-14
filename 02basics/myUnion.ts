let score: number | string = 33 // agora meu score pode ser number ou string
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let pedro: User | Admin = {name: "pedro", id: 333}

pedro = {username: "pa", id: 333}

function getDbId(id: number | string){
    //making some API calls
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

function getDbIds(id: number | string){
    if(typeof id === "string"){ // temos que usar o typeof e condicional pois .toLowerCase não se aplica ao type: number
        id.toLowerCase()
    }
    
 }

// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] = ["1", "2", "3"]  // não pode ter um mix. precisa ser toda de números ou toda de string
const data4: (string | number)[] = ["1", 2, "3"] // desta forma aceita o mix de string e number

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"







