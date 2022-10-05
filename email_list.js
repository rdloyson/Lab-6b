"use strict";

var $ = function(id) {
    return document.getElementById(id);
};
 

const joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";

    if (emailAddress1 == "") {
    	errorMessage = "First email address entry required";
        $("email_address1").focus();
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    	$("email_address2").focus();
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    	$("email_address2").focus();
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    	$("first_name").focus();
    }

    console.log('erroMessage' + errorMessage); 
    if (errorMessage == "") {
        $("email_form").submit(); 
    } else {
    	    alert(errorMessage);
    }
};

const clearForm = () => {
    
    $("email_address1").value = "";
    $("email_address2").value = "";
    $("first_name").value = "";
    $("email_address1").focus();

};

document.addEventListener("DOMContentLoaded", () => {
    $("join_list").addEventListener("click", joinList);
    $("clear_form").addEventListener("click", clearForm);
    $("email_address1").focus();
});
window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};