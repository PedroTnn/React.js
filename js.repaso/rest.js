const rest = (a,b,...argumentos) =>{
    console.log(a, b);
    console.log(argumentos);
    
}

//rest(1,2,3,4,5);

const obj ={
    a:1, b:2, c:1, d:1
}

//const {a,b, ...restobj} = obj
//console.log(a,b,restobj);
//Restructurin this array but have other solution
const arr = [1,2,3,4,5]
const[a,b]= arr
console.log(a,b)

const[z,x,...r]= arr;
console.log(a,b,r);

const useState = ()=>["valor",()=>{}]
const [valor,setValor] = useState()
console.log(valor,setValor);

