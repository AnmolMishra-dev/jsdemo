console.log("This is tutorial 48");
// Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols

// const regex = /^h/i;

// Character Sets - We use []
let regex = /a[a-z]nmol/; // can be any character from a to z
regex = /a[nty]mol/; // can be an a, t or y
regex = /a[^nty]mol/; // cannot be any of a, t or y
regex = /a[^nty]mo[lYu]/; // cannot be any of a, t or y + can be a u or y
regex = /a[a-zA-Z]nn[mu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /anmo{2}l/; // r can occur exactly 2 times
regex = /anmo{0,2}l/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
 regex = /(anmm){0,2}([0-9]ol){0,1}/

// const str = "hirry9 bhai";
str = "anmol bhai"
 str = "anm1ol bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
