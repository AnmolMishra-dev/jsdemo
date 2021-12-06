console.log("Creating");
let element=document.createElement("li");
let text=document.createTextNode("Hello,Developer");

element.appendChild(text);
element.className='childul';
element.id='createdLi';
element.setAttribute('title','Mytitle');
element.innerHTML='<b> Hello,anmol</b>';
let ul=document.querySelector('ul.this');

ul.appendChild(element);

console.log(ul); 
console.log(element);    

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('this is node ');
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
