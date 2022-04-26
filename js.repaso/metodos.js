const arr = [-5,-1,-2,-3,-4];
const arr1 = ["moon","sun"]
//const r = arr.filter(el => el<2)*/
//console.log(r)  
/*const r = arr.filter((el,i)=>{
    console.log(i);
    return el > 2;
    
})*/
//console.log(r);

const result = arr1.filter ((word,i) =>{
    console.log(i)
    return word.length == 3;   
})

//console.log(result)

//const mapped = arr.map((el)=> `<h1>${el}</h1>`)
//console.log(mapped);
const users =[
    {id:1,name:"Chanchito Feliz"},
    {id:2,name:"Chanchito Triste"},
    {id:3,name:"Chanchito Borracho"},
    {id:4,name:"Pablo"}
];
const mapped = users.map((user)=> `<h1>${user.name}</h1>`);
//console.log(mapped);
//const getMax = (a,b)=> Math.max(a,b)
//const r1 = arr.reduce(getMax,0);
//const r1 = arr.reduce((acc,element,)=>acc + element, 0);
const r1 = users.reduce((acc,el)=>
`${acc === "" ? "" : `${acc}, `} ${el.name}`, "");
//console.log(r1);


const r2 = users.reduce ((acc,element)=>{
    if(element.id < 2){
        return acc
    }
    return acc.concat(element)
},[]); 
console.log(r2)


