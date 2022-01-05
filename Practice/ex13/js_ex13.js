//Ex13: JavaScript Conditions
//Ex13.1: if statements
function checkNumber(){
    var num;
    num = document.getElementById("number").value;
    if(num > 30){
        document.getElementById("ex13-1-1").innerHTML = num + " is greater than 30.";
    }
    document.getElementById("ex13-1-2").innerHTML = "Value of number is "+ num;
}

//Ex13.2: if-else Statements
function convert(degree){
    var x;
    if(degree == 'C'){
        x = document.getElementById("celsius").value * 9/5 +32;
        document.getElementById("fahrenheit").value = Math.round(x);
    }
    else{
        x = (document.getElementById("fahrenheit").value -32 )*5/9
        document.getElementById("celsius").value = Math.round(x);
    }
  
}

//Ex13.3: if-elseif-else Statements
function grade(){
    var score = document.getElementById("data").value;
    if(score >= 80 && score <= 100){
        document.getElementById("ex13-3").innerHTML ="Grade A";
    }
    else if(score >= 75 && score <= 79){
        document.getElementById("ex13-3").innerHTML ="Grade B+";
    }
    else if(score >= 70 &&  score <= 74){
        document.getElementById("ex13-3").innerHTML = "Grade B";
    }
    else if (score >= 65 && score <= 69){
        document.getElementById("ex13-3").innerHTML = "Grade C+";
    }
    else if (score >= 60 && score <= 64){
        document.getElementById("ex13-3").innerHTML = "Grade C";
    }
    else if (score >= 55 && score <= 59){
        document.getElementById("ex13-3").innerHTML = "Grade D+";
    }
    else if (score >= 50 && score <= 54){
        document.getElementById("ex13-3").innerHTML = "Grade D";
    }
    else if (score >= 0 && score <= 49){
        document.getElementById("ex13-3").innerHTML = "Grade F";
    }
    else{
        document.getElementById("ex13-3").innerHTML = "Please Enter 0-100";
    }
}

//Ex13.4 Nested if Statements
function scoreRange(){
    let score = document.getElementById("score").value;
    if(score < 60){       
        if(score < 30){
            document.getElementById("result").value = "Less than 30";
        }
        else{
            document.getElementById("result").value = "Between 30 and 59";
        }
    }
    else{
        if(score > 80){
            document.getElementById("result").value = "More than 80";
        }
        else{
            document.getElementById("result").value = "Between 60 and 80";
        }
    }
}

//Ex13.5: Switch Statements
function gradeStatus(){
    let grade = document.getElementById("grade").value;
    switch(grade){
        case 'A':
            document.getElementById("ex13-5").innerHTML = "Good job";
            break;
        case 'B':
            document.getElementById("ex13-5").innerHTML = "Pretty Good";
            break;
        case 'C':
            document.getElementById("ex13-5").innerHTML = "Passed";
            break;
        case 'D':
            document.getElementById("ex13-5").innerHTML = "Fighting";
            break;
        case 'A':
            document.getElementById("ex13-5").innerHTML = "Failed";
            break;
        default:
            document.getElementById("ex13-5").innerHTML ="Please Enter A B C D F";
    }

}
