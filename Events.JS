console.log("Events");
document.getElementById('heading').addEventListener
('click',function(e)
//('click','mouseover',function(e)

{
alert("Welcome")
// location.href='https://www.google.com/'
console.log(e);
let variable;
variable =e.target;
variable=e.target.className;
variable=e.target.offsetX;
variable=e.target.offsetY;
variable=e.clientX;
console.log(variable);


});
