// show a message with a type of the input
function showMessage(exampleInputPassword1, exampleInputEmail1, type) {
	
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(exampleInputPassword1, exampleInputEmail1) {
	return showMessage(exampleInputPassword1, exampleInputEmail1, false);
}

function showSuccess(input) {
	return showMessage(exampleInputPassword1, "", true);
}

function hasValue(exampleInputPassword1, exampleInputEmail1) {
	if (input.value.trim() === "") {
		return showError(exampleInputPassword1, exampleInputEmail1);
	}
	return showSuccess(input);
}

function validateEmail(inputexampleInputPassword1, requiredExampleInputEmail1, invalidExampleInputEmail1) {
	// check if the value is not empty
	if (!hasValue(exampleInputPassword1, requiredExampleInputEmail1)) {
		return false;
	}
	// validate email format
	const exampleInputEmail1Regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const exampleInputEmail1 = input.value.trim();
	if (!exampleInputEmail1Regex.test(exampleInputEmail1)) {
		return showError(exampleInputPassword1, invalidExampleInputEmail1);
	}
	return true;
}  ;

