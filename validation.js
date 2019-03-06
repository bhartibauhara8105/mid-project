function hello()
{
alert("hello")	;
}
function Form_Validation() {
// Make quick references to our fields.
	alert("hello");
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
if (firstname.value.length == 0) {
	document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
	firstname.focus();
	return false;
	}
if (inputAlphabet(firstname, "* For your name please use alphabets only *")){ 
	return true;
}
	}
else
	{
	return false;
	}

function inputAlphabet(inputtext, alertMsg) {
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
	return true;
	} else {
	document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
	//alert(alertMsg);
	inputtext.focus();
	return false;
	}
}
	/*function inputAlphabet(inputtext, alertMsg) {
		var alphaExp = /^[a-zA-Z]+$/;
		if (inputtext.value.match(alphaExp)) {
		return true;
		} else {
		document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
		//alert(alertMsg);
		inputtext.focus();
		return false;
		}
	}*/
	/**
 * 
 */