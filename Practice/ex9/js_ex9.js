//JavScript Object
//Ex9: JavaScript Objects
//Ex9.1: javascript Object.property
//create an object:
const person1 = {
    firstName:"Javascript",
    lastName:"Man",
    age:"30",
    eyeColor:"Brown"
};

//Display some data from thr object:
document.getElementById("ex9-1").innerHTML= person1.firstName
+ " "+person1.lastName+ " is "+person1.age+ "years old and "
+person1.eyes+" eyes.";

//Ex9.2 JavaScript object [Property]
//crate an object
const person2 ={
    firstName:"Html",
    lastName: "Woman",
    age:26,
    eyeColor:"Blue"
};
//Display some data from the objects:
document.getElementById("ex9-2").innerHTML= person2["firstName"]
+ " "+person2["lastName"]+ " is "+person2["age"]+ "years old and "
+person2["eyeColor"]+" eyes.";

//Ex9.3: Javascript Objects Function as Method
//create object:
const person3 ={
    firstName:"CSS",
    lastName:"Boy",
    age:8,
    eyeColor:"Green",
    fullPerson: function(){
        return this.firstName
        +" "+this.lastName+ " is " +this.age+" years old " +this.eyeColor + "eyes.";
        
        
    }
}; 
//Display some data from the objects:
document.getElementById("ex9-3").innerHTML=  person3.fullPerson();