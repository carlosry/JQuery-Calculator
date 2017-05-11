$(document).ready(function(){
 var number = "";
 var newNumber = "";
 var operator = "";
 var display = $("#display");
 display.text("0");
 
 var testNumLength = function(number) {
  if (number.length > 8) {
   display.text(number.substr(number.length-8,8));
   if (number.length > 9) {
    number = "";
    display.text("Error");
   }
  } 
 };
 
 $(".number").click(function(){
  number += $(this).text();
  display.text(number);
  testNumLength(number);
  console.log(number);
 });
 
 $(".operator").click(function(){
		operator = $(this).text();
		newNumber = number;
		number = "";
		display.text("0");
 });
 
 $("#allClear").click(function(){
		number = "";
		display.text("0");
  newNumber = "";
 });
 
 $("#total").click(function(){
  
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newNumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newNumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newNumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newNumber, 10) * parseInt(number,10)).toString(10);
		}
 
		display.text(number);
		testNumLength(number);
  
  if($('#allClear').data('clicked')) {
   number = "";
		 newNumber = "";
  } else {
   number = number;
   newNumber = newNumber;
  }
  
 });
 
});