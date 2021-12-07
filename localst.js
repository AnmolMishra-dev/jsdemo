console.log("Local Storage");
let array=['fruit','food','nuts'];
localStorage.setItem("Name1","Anmol");
localStorage.setItem("Name2","Mishra");

 localStorage.setItem("Veg",JSON.stringify(array));
let Name=localStorage.getItem("Name2");


console.log(Name);
localStorage.setItem("Name2",JSON.stringify("Hello"))
let NameUpdate=localStorage.getItem("Name2");

console.log(NameUpdate);

let veg=JSON.parse(localStorage.getItem("Veg"));
let join=array.join("anmol");
console.log(veg);

// let RemoveName=LocalStorage.removeItem("Name1");
// console.log(RemoveName);

sessionStorage.setItem("Name3","Anmol");
sessionStorage.setItem("Name4","Kaushik");
let sel=sessionStorage.getItem("Name4");
// console.log(sel);
if(sel==="Kaushik"){
    console.log("login")
}
else {

    console.log("not Login");
}

let kittens=[{"id":1,"first_name":"Edna"},
{"id":2,"first_name":"Bentlee"},
{"id":3,"first_name":"Elisa"},
{"id":4,"first_name":"Phyllida"},
{"id":5,"first_name":"Dale"},
{"id":6,"first_name":"Myles"},
{"id":7,"first_name":"Belita"},
{"id":8,"first_name":"Vikky"},
{"id":9,"first_name":"Hamlin"},
{"id":10,"first_name":"Gilbertina"},
{"id":11,"first_name":"Corabelle"},
{"id":12,"first_name":"Jeniffer"},
{"id":13,"first_name":"Herbert"},
{"id":14,"first_name":"Sayer"},
{"id":15,"first_name":"Dulcinea"},
{"id":16,"first_name":"Fields"},
{"id":17,"first_name":"Paule"},
{"id":18,"first_name":"Trefor"},
{"id":19,"first_name":"Dorita"},
{"id":20,"first_name":"Malissia"},
{"id":21,"first_name":"Eduino"},
{"id":22,"first_name":"Seymour"},
{"id":23,"first_name":"Ulrikaumeko"},
{"id":24,"first_name":"Corney"},
{"id":25,"first_name":"Sandro"},
{"id":26,"first_name":"Verne"},
{"id":27,"first_name":"Lelah"},
{"id":28,"first_name":"Dewie"},
{"id":29,"first_name":"Natasha"},
{"id":30,"first_name":"Marinna"},
{"id":31,"first_name":"Belita"},
{"id":32,"first_name":"Audrey"},
{"id":33,"first_name":"Saba"},
{"id":34,"first_name":"Gasper"},
{"id":35,"first_name":"Malina"},
{"id":36,"first_name":"Valentine"},
{"id":37,"first_name":"Giulia"},
{"id":38,"first_name":"Benita"},
{"id":39,"first_name":"Augustin"},
{"id":40,"first_name":"Sharia"},
{"id":41,"first_name":"Pandora"},
{"id":42,"first_name":"Toby"},
{"id":43,"first_name":"Obie"},
{"id":44,"first_name":"Astra"},
{"id":45,"first_name":"Carola"},
{"id":46,"first_name":"Erna"},
{"id":47,"first_name":"Bearnard"},
{"id":48,"first_name":"Phil"},
{"id":49,"first_name":"Isadore"},
{"id":50,"first_name":"Missy"},
{"id":51,"first_name":"Jemmy"},
{"id":52,"first_name":"Nona"},
{"id":53,"first_name":"Del"},
{"id":54,"first_name":"Estele"},
{"id":55,"first_name":"Lonni"},
{"id":56,"first_name":"Gabriele"},
{"id":57,"first_name":"Rosabelle"},
{"id":58,"first_name":"Stephen"},
{"id":59,"first_name":"Kass"},
{"id":60,"first_name":"Gerianna"},
{"id":61,"first_name":"Wynn"},
{"id":62,"first_name":"Waiter"},
{"id":63,"first_name":"Ibby"},
{"id":64,"first_name":"Izzy"},
{"id":65,"first_name":"Trumaine"},
{"id":66,"first_name":"Christopher"},
{"id":67,"first_name":"Rosco"},
{"id":68,"first_name":"Noah"},
{"id":69,"first_name":"Barris"},
{"id":70,"first_name":"Idell"},
{"id":71,"first_name":"Rory"},
{"id":72,"first_name":"Lura"}];

// console.log(kittens);
// for (var kittens of kittens) {
//     if (kittens.name === "ram") {

//         kittens.name="mohan"
      
      
//      console.log(kittens);
      
//     }
//     else{
//         console.log("false");
//     }
 
//  }
localStorage.setItem("kittens",JSON.stringify(kittens));
let kitte=JSON.parse(localStorage.getItem("kittens"));
console.log(kitte);
 for (var kitten of kitte) {
    if (kitten.first_name === "Christopher") {


        kitten.first_name="jonny"
        console.log(kitten)
         console.log(kitte);
         localStorage.setItem("kittens",JSON.stringify(kitte));
      
      
    //  console.log(kitten);
    var indices = [];
    var element = "Christopher";
    var idx = kittens.findIndex(valuechange);
    function valuechange(kittens) 
    {
      return kittens.first_name === "Christopher"

    }

    console.log(idx);
   
   
      
    }
    else{
        console.log("false1");
    }
 
 }