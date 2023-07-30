//initilizing variables
let awesome=document.getElementById("c");
let label1=document.getElementById("sh");
function showpass(){
if(awesome.checked){
    document.getElementById("enterpass").type="text";
    document.getElementById("conpass").type="text";
} else {
    document.getElementById("enterpass").type="password";
    document.getElementById("conpass").type="password";
}
}

function showpass1(input){
if(input==true){
    document.getElementById("enterpass").type="text";
    document.getElementById("conpass").type="text";
} else {
    document.getElementById("enterpass").type="password";
    document.getElementById("conpass").type="password";
}

}

function checkemail(){
    
   let test=document.getElementById("checkmail");
   let str=document.getElementById("t1").value;
   

   if((str.indexOf("@"))==-1){
     test.textContent="Invalid Email";
     test.style.backgroundColor="red";  
   } else {
test.textContent="Good";
test.style.backgroundColor="lime";
   }


}

function checkpassword(){
let temp=document.getElementById("checkpass");
let temp1=document.getElementById("enterpass");

if(temp1.value.length<4){
    temp.textContent="very weak";
    temp.style.backgroundColor="red";
} else if(temp1.value.length>=4 && temp1.value.length<=7){
    temp.textContent="medium";
    temp.style.backgroundColor="yellow";
} else {
    temp.textContent="Strong";
    temp.style.backgroundColor="lime";
}




}

function senddatatoserver(){
//initilize all input fields
let input1=document.getElementById("t1");
let input2=document.getElementById("enterpass");
let input3=document.getElementById("conpass");

let lab1=document.getElementById("checkmail");
let lab2=document.getElementById("checkpass");

if(input1.value=="" || input2.value=="" || input3.value==""){
    alert("Plz fill all details");
} else if(checkmail.style.backgroundColor=="red") {
    alert("You have entered an invalid Email\n we will  not accept your values");
}else if(checkpass.style.backgroundColor=="red") {
    alert("Your password is too weak \try again with strong password");
}else if(checkpass.style.backgroundColor=="yellow") {
    alert("Your password contain medium security \n try again with Strong password");
} else if(input2.value!=input3.value){
alert("both Passwords are not matching");
} else {
var t=input1.value;
localStorage.setItem(t,input2.value);
alert("Successfully registered");
window.open("index.html");
}



}
