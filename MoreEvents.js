console.log("More Events");
let btn= document.getElementById('btn');

btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);

function func1(e) {
console.log("Thanks", e);
e.preventDefault();

} 
function func2(e) {
    console.log("Thanks dblclick" , e);
    e.preventDefault();
    
    } 

    document.querySelector('.container').addEventListener('mousemove',function(e){
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},150)`;
console.log("you triggered mouse move event")
    });
