console.log("functions");
let name = "Anmol"
function wishing(name,thank)
{
    console.log(`“${name} Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday! ${thank}”`)
return wishing;
}
wishing(name, "wishing");
let name2="jon"

const mywishes =function (name,thank)
{
  let msg=`“${name2} Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday! ${thank}”`
return msg;
}
let val=mywishes(name2, "wishes");
console.log(val);

arr=['fruit','food','vegetable'];

arr.forEach(function (element,index,array) {
console.log(element,index,array);

});
let title=[];
const showPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();


  
   console.log(posts);
  posts.forEach(title=>{
    title=title['title'];
    console.log(title)
  }).forEach
 }
 
 showPosts().element;
