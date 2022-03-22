function Fn(){
    this.prop = "propiedad";
    return "Hola mundo"
}

Fn.prototype.lala = function funcionPrototype(){}

const r = new Fn()
console.log(r.__proto__);

const fatFn = ()=>{
     const obj = {}
    obj.prop = "propiedad"
    return obj  
}

const r1 = fatFn();
console.log(r1);

const f2 = () => 2
console.log(f2());