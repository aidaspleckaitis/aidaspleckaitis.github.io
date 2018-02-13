"use strict";

var UIController = (function() {
	var data = {
		// Selectors
		nameEl: document.getElementById("firstname"),
 		lastEl: document.getElementById("lastname"),
 		messageEl: document.getElementById("message"),
 		nameError: document.querySelector(".nameMessage"),
		surnameError: document.querySelector(".lastNameMessage"),
		messageError: document.querySelector(".textMessage"),
		// Properties
		regEx: /^[\w\-\s]+$/, //Allows spaces and doesn't allow symbols
		redishColor: "#9a0000",
 		greenishColor: "#3d9c49",
 		backColorFalse: "#ff9999",
 		backColorTrue: "#bfffc9",
 		notEmpty: "Field is required",
 		badLetters: "Invalid letters or numerics used",
 		badLength: "Input is too short or too long",
 		correct: "Correct Input!"
 	};

 	return {
 		validateFirstName: function() {
 			var nameValue = data.nameEl.value;
 			var falseColor = data.backColorFalse;

 			if(validator.isAlpha(nameValue)) {
	 			data.nameError.textContent = data.correct;
	 			data.nameEl.style.backgroundColor = data.backColorTrue;
			} else if(validator.isEmpty(nameValue)) {
				data.nameError.textContent = data.notEmpty;
				data.nameEl.style.backgroundColor = falseColor;
				return false;
			} else {
				data.nameError.textContent = data.badLetters;
				data.nameEl.style.backgroundColor = falseColor;
				return false;
			}
			// Checks input length
			if(validator.isLength(nameValue, {min:2, max: 15})) {
				return true;
			} else {
				data.nameError.textContent = data.badLength;
				data.nameEl.style.backgroundColor = falseColor;
				return false;
			};
 		},
 		validateLastName: function() {
 			var surnameValue = data.lastEl.value;
 			var falseColor = data.backColorFalse;

 			if(validator.isAlpha(surnameValue)) {
	 			data.surnameError.textContent = data.correct;
	 			data.lastEl.style.backgroundColor = data.backColorTrue;
			} else if(validator.isEmpty(surnameValue)){
				data.surnameError.textContent = data.notEmpty;
				data.lastEl.style.backgroundColor = falseColor;
				return false;
			} else {
				data.surnameError.textContent = data.badLetters;
				data.lastEl.style.backgroundColor = falseColor;
				return false;
 			};
 			// Checks input length
 			if(validator.isLength(surnameValue, {min:2, max: 15})) {
				return true;
			} else {
				data.surnameError.textContent = data.badLength;
				data.lastEl.style.backgroundColor = falseColor;
				return false;
			};
 		},
 		validateMessage: function() {
 			var messageValue = data.messageEl.value;
 			var falseColor = data.backColorFalse;

 			if(messageValue.match(data.regEx)) {
		  		data.messageError.textContent = data.correct;
		  		data.messageEl.style.backgroundColor = data.backColorTrue;
			} else if(validator.isEmpty(messageValue)){
			 	data.messageError.textContent = data.notEmpty;
			 	data.messageEl.style.backgroundColor = falseColor;
			 	return false;
			} else {
			 	data.messageError.textContent = data.badLetters;
			 	data.messageEl.style.backgroundColor = falseColor;
			 	return false;
			};
			// Checks input length
			if(validator.isLength(messageValue, {min:0, max:200})) {
				return true;
			} else {
				data.messageError.textContent = data.badLength;
				data.messageEl.style.backgroundColor = falseColor;
				return false;
			};
 		}
 	}
})();

var formValidation = (function(UI) {
	
	document.getElementById("submit").addEventListener("click", function(event){
 		event.preventDefault();
 		UI.validateFirstName();
 		UI.validateLastName();
 		UI.validateMessage();
 	});
})(UIController);