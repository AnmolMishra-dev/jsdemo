console.log("Loops");
let i = 100;
for (i = 0; i <= 100; i++) {
//   console.log(i);
}
// let j=0;
// while (j<10);
// {
//     console.log(j+1);
//     j++;
// }

let  arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(function(element) {

    console.log(element);
})
let object ={
    name: 'modi',
    age: 36,
    type: 'Dangerous Programmer',
    os:".Net"
        
    }
    for(let key in object)
    {
        const value = object[key];
        console.log(key, value)
    }
    