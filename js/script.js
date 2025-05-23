{
let a,b,sum;
a = 5;
b = 3;
sum = a*b;
console.log(sum);
}

{
//let photofolder,photopage,numberpage;
//photofolder = parseInt(prompt("Vvedtie kol-vo photo v papke", 10))
//photopage = parseInt(prompt("Vvedtie kol-vo photo v papke", 10))
//numberpage = Math.ceil(photofolder / photopage)
//alert("kolvo stranits = " + numberpage);
} 

{
let a = 14 % 5;
let b = Math.floor(14 % 5);
console.log(a,b);



let number,d1,d2,d3,d4;
number = parseInt(prompt("vvod"))
d1 = Math.floor(number/1) % 10;  
d2 = Math.floor(number/10) % 10;
d3 = Math.floor(number/100) % 10;
d4 = Math.floor(number/1000) % 10
console.log(d1,d2,d3,d4)
}

{
 let x, y, max;
 x = parseFloat(prompt("1"))
 y = parseFloat(prompt("2"))
 if (x > y ) {
    max = x
 }
 else {
    max = y
 }
 alert("max = " + max)
}