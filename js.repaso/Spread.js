const fn = (a,b,c) => console.log(a+b+c)
const arr = [1,2,3];

fn(arr[0],arr[1],arr[2]);
fn(...arr)

const fn2 =  (a,b,c) => console.log(a+b+c);
const arr2 = [1,2,3,4];
fn2(arr2[0],arr2[1],arr2[2]);
fn2(...arr2)
const arr3 = [...arr,2,3];
arr3[0] = "chanchito feliz"
//onsole.log(arr3);
const arr4 = [...arr3,...arr2]
//console.log(arr4);

const obj1 ={a:1, b:2};
const obj2 = {b:5,c: 'CHANCHITO FELIZ'}
const obj3 = {...obj1}
obj1.a = 10;
console.log(obj1)
console.log(obj3);


const obj4 = {...obj1, ...obj2};
console.log(obj4);
