//Ex11: JavaScript Strings
//Ex11.1: Strings Double Quotes and Single Quotes
var herName1 = "Ironman";
var herName2 = "Captain America";
document.getElementById("ex11-1").innerHTML = "I like "+ herName1 + ' and ' +herName2+'.';

//Ex11.2 Strings using Backslash
var question = 'What\'s your name? ';
var answer = "You can call me \"Guidehamsome\", and you?";
let response = "JavaScript \
Manpower";
document.getElementById("ex11-2").innerHTML = question+"<br>" +answer+"<br>"+response;

//Ex11.3 Strings Methods
let lorem ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam\
reiciendis cum quisquam expedita, deleniti assumenda libero excepturi\
 enim placeat ea! Quas dolorum aperiam tempore eaque, impedit quidem ipsum,\
 delectus ipsum, soluta blanditiisipsum,";

let eng_alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let thai_alphabet ="กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภ\
 มยรฤฤลฦฦวศษสหฬอฮ";
 
 //(1) Length
 document.getElementById("ex11-3-1").innerHTML = "lorem = "+ lorem.length+ "<br>" 
 +"english_alphabet = "+ eng_alphabet.length+"<br>" + "Thai_alphabet = " + thai_alphabet.length;

 //(2) Position IndexOf() start 0,1,2,3...n
 document.getElementById("ex11-3-2").innerHTML ="\"ipusm\" position = "+ lorem.indexOf("ipsum")
 +"<br>" + "\"N Position = "+ eng_alphabet.indexOf("N") +"<br>" +"\"ช position ="+ thai_alphabet.indexOf("ช");

 //(3) match(/txt/g) g is global
document.getElementById("ex11-3-3").innerHTML ="\"ispum\" match = "+lorem.match(/ipsum/g);

//(4) replace("old text,"new text") or /old text/g แทนที่ทั้งหมด
document.getElementById("ex11-3-4").innerHTML = lorem.replace("ipsum","Guide");
document.getElementById("ex11-3-5").innerHTML = lorem.replace(/ipsum/g,"Guide");

//(5) toUpperCase()
document.getElementById("ex11-3-6").innerHTML = lorem.toUpperCase();

//(6) toLowerCase()
document.getElementById("ex11-3-7").innerHTML = lorem.toLowerCase();
