"use strict";

let UIController = (function() {
	let DOMstrings = {
		header: "header",
		nav: "nav",
		main: "main",
		about: document.getElementById("about"),
		contact: document.getElementById("contact"),
		toContact: document.querySelector(".to_contact"),
		skills: document.getElementById("skills"),
		work: document.getElementById("work"),
		navigationList: document.querySelector("nav ul"),
		navigationListItem: document.querySelectorAll("nav ul li"),
		mainSection: document.getElementById("main_section"),
		aboutSection: document.getElementById("about_section"),
		contactSection: document.getElementById("contact_section"),
		skillSection: document.getElementById("skill_section"),
		workSection: document.getElementById("work_section"),
		greenColor: "rgb(143, 220, 53)"
	};

	return {
		getDOM: function() {
			return DOMstrings;
		},
		resetLiColor: function(event) {
			DOMstrings.navigationListItem.forEach(function(item){
				if(item.style.color === DOMstrings.greenColor) {
					item.style.color = null;
				}
			});
		},
		resetDisplay: function() {
			DOMstrings.workSection.style.display = "none";
			DOMstrings.skillSection.style.display = "none";
			DOMstrings.contactSection.style.display = "none";
			DOMstrings.aboutSection.style.display = "none";
		},
		showAboutSection: function() {
			if(DOMstrings.aboutSection.style.display === "block") {
				return true;
			} else {
				UIController.resetDisplay();
				UIController.resetLiColor();
				DOMstrings.aboutSection.style.display = "block";
				DOMstrings.about.style.color = DOMstrings.greenColor;	
			}
		},
		showContactSection: function() {
			if(DOMstrings.contactSection.style.display === "block") {
				return true;
			} else {
				UIController.resetDisplay();
				UIController.resetLiColor();
				DOMstrings.contactSection.style.display = "block";
				DOMstrings.about.style.color = null;
				DOMstrings.contact.style.color = DOMstrings.greenColor;
			}
		},
		showSkillSection: function() {
			if(DOMstrings.skillSection.style.display === "block") {
				return true;
			} else {
				UIController.resetDisplay();
				UIController.resetLiColor();
				DOMstrings.skillSection.style.display = "block";
				DOMstrings.skills.style.color = DOMstrings.greenColor;
			}
		},
		showWorkSection: function() {
			if(DOMstrings.workSection.style.display === "block") {
				return true;
			} else {
				UIController.resetDisplay();
				UIController.resetLiColor();
				DOMstrings.workSection.style.display = "block";
				DOMstrings.work.style.color = DOMstrings.greenColor;
			}
		}
	}	
})();

let globalController = (function(UI) {
	let DOM = UI.getDOM();

	function loadAboutSection() {
		DOM.about.style.color = DOM.greenColor;
		DOM.aboutSection.style.display = "block";
	};
	
	function eventListeners() { 				
		DOM.about.addEventListener("click", UI.showAboutSection);
		DOM.toContact.addEventListener("click", UI.showContactSection);
		DOM.contact.addEventListener("click", UI.showContactSection);
		DOM.skills.addEventListener("click", UI.showSkillSection);
		DOM.work.addEventListener("click", UI.showWorkSection);
	};

	return {
		init: function() {
			loadAboutSection();
			eventListeners();
		}
	}
})(UIController);

globalController.init();

