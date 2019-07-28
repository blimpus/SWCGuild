//js file for contact
/*
Created by: Austin Holly
Creation Date: 7/26/2019
Last Edited: 7/27/2019
*/

function clearErrors(){
	var formElements = document.forms["contact-form"].elements;
	for (var loopCounter=0; loopCounter < formElements.length; loopCounter++){
		if(formElements[loopCounter].parentElement.className.indexOf("has-") != -1){
			formElements[loopCounter].parentElement.className = "form-group";
		}
	}
	
}

function validate(){
	clearErrors();
	
	//need to check all text inputs that they contain information
	var firstName = document.forms["contact-form"]["firstName"].value;
	var lastName = document.forms["contact-form"]["lastName"].value;
	var phone = document.forms["contact-form"]["phone"].value;
	
	//check to make sure fields are not empty and follow rules of fulfillment
	if(firstName == "" || !isNaN(firstName)){
		alert("First Name must not be blank and also not a number");
		document.forms["contact-form"]["firstName"].parentElement.className = "form-group has-error";
		document.forms["contact-form"]["firstName"].focus();
		return false;
	}
	
	if(lastName == "" || !isNaN(lastName)){
		alert("Last Name must not be blank and also not a number");
		document.forms["contact-form"]["lastName"].parentElement.className = "form-group has-error";
		document.forms["contact-form"]["lastName"].focus();
		return false;
	}
	
	if(phone == "" || phone.length < 9){
		alert("Phone number must not be blank and must be at least 9 numbers");
		document.forms["contact-form"]["phone"].parentElement.className = "form-group has-error";
		document.forms["contact-form"]["phone"].focus();
		return false;
	}
	
	//check the check boxes to make sure at least one is checked, all other fields are not required
	//radio boxes are checked by default so we do not need to check those
	var checkedCounter = 0;
	var isChecked = false;
	var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
	
	for (var i = 0; i<5; i++){
		if(document.getElementById(daysOfWeek[i]).checked){
			isChecked++;
		}
		
	}
	if (isChecked == 0){
		alert("Day of Week to best contact must be selected");
		return false;
	}
	
	
}