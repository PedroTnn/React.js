const rectangulo = class {

}
class rectangule{

}
//clases declaradas con class no tienen hoisting
function cuadrado (){}
console.log(cuadrado,rectangule);


const r = new rectangulo();

class Chancho {
    propiedad = 'mi propiedad'
    //Las propiedades privadas solo pueden ser accedidas por
    //instancias de las mismas clases
    #hambre = false;
    constructor(estado = "Feliz",hambre = false){
        this.estado = estado;
        this.#hambre = hambre;

    }

    hablar(){
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`);
    }

    static comer(){
        console.log(this.propiedad,'estoy comiendo!')
    }
}
Chancho.comer()
const feliz =  new Chancho("feliz")
feliz.hablar();
const felipe =  new Chancho("triste")
felipe.hablar();
const felipew =  new Chancho()
felipew.hablar()