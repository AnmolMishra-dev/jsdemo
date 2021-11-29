console.log("Element Selectors");
let element = document.getElementById("first");
element.style.color="red";
element.style.background="black"
element.innerText="Hello"
//SINGLE LINE  SELECTEES
let sel=document.querySelector("#first");
sel=document.querySelector(".child");
sel=document.querySelector("div");
sel.style.color="greEn"

console.log(sel);
//MULTILINE SELECTEES

let ele=document.getElementsByClassName("child");
ele=document.getElementsByClassName("container");
ele=document.getElementsByTagName('div');
console.log('ele');
