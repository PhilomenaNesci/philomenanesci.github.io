/*
Student Name: Philomena Nesci
File Name: script.js
Date: 4/25/2026
*/

//Hamburger Menu Function//

function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}