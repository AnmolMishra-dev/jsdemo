console.log("OBJ");
let obj ={

    name:"Anmol",
    address:"125482"
}
console.log(obj);
function Obj(givenname){
this.name=givenname;

}
Obj.prototype.getname=function(){

    return this.name
}
let obj2= new Obj ("jon");
console.log(obj2);