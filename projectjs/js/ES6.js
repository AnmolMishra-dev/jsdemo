console.log("ES6 Class");
class Employee {
  constructor(giveName, givenExp, givenAge) {
    this.Name = giveName;
    this.exp = givenExp;
    this.age = givenAge;
  }
  joinyear() {
    return 2020 - this.exp;
  }
}
console.log((data = new Employee("anmol", 10, 30)));
console.log(data.joinyear());
class programer extends Employee {
  constructor(giveName, givenExp, givenAge, givenLanguage, github) {
    super(giveName, givenExp, givenAge);
    this.language = givenLanguage;
    this.github = github;
  }
 favoritelan(){
if(this.language=="python"){
return "pythom";


}else{
return "java";

}

}
 static multiple(a,b){

    return a*b;
 }



}
anmol =new programer('anmol',5,30,"hindi","done");
console.log(anmol.favoritelan());
console.log(programer.multiple(10,20));