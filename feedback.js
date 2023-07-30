//first initilizing variables
var firstcheck=document.getElementById("bad");
var secondcheck=document.getElementById("average");
var thirdcheck=document.getElementById("good");
var comment=document.getElementById("com");
var nam=document.getElementById("na");
var email=document.getElementById("me");

//main work starts drom here
function submiting(){
if((firstcheck.checked || secondcheck.checked || thirdcheck.checked)&&(comment.value!="" && nam.value!=""&& email.value!="")){
  if(firstcheck.checked){
var str="Experience=BAD:Comment="+comment.value+":Name="+nam.value+":Email="+email.value+":End of Feedback";
var temp=(nam.value).toLowerCase();
var temp1=temp+"feedback";

localStorage.setItem(temp1,str);
alert("Your Feedback is saved in our database Successfully");

  } else if(secondcheck.checked){
    var str="Experience=Average:Comment="+comment.value+":Name="+nam.value+":Email="+email.value+":End of Feedback";
    var temp=(nam.value).toLowerCase();
var temp1=temp+"feedback";

localStorage.setItem(temp1,str);
alert("Your Feedback is saved in our database Successfully");

  } else if(thirdcheck.checked){
    var str="Experience=GOOD:Comment="+comment.value+":Name="+nam.value+":Email="+email.value+":End of Feedback";
    var temp=(nam.value).toLowerCase();
var temp1=temp+"feedback";

localStorage.setItem(temp1,str);
alert("Your Feedback is saved in our database Successfully");

  }


} else {
    alert("Plz fill out all values");
}


}



function Selection(check){
  var label1=document.getElementById("b");
  var label2=document.getElementById("a");
  var label3=document.getElementById("g");
if(check==label1){
  firstcheck.checked=true;
} else if(check==label2){
secondcheck.checked=true;
} else if(check==label3){
thirdcheck.checked=true;
}



}