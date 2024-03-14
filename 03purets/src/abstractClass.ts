abstract class TakePhoto { // nenhum objeto pode ser criado à partir de uma "abstract class"
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    
    abstract getSepia(): void
    getReelTime(): number{
        // some complex calculation
        return 8
    }
}

// abstract é usada geralmente como uma "blue print", ela serve como um modelo ou esquema para outras classes que estendem ou implementam essa classe abstrata

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}

const pedros = new Instagram("test", "Test", 3)

pedros.getReelTime()