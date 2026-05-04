/*
Student Name: Philomena Nesci
File Name: script.js
Date: 4/28/2026
Description: Function to toggle the mobile navigation menu
*/

function hamburger() {
    var menu = document.getElementById("nav-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to display a welcome message in the console
function welcomeMessage() {
	console.log("Welcome to the Official Website of the Augusta Curtis Concert Band!");
}
welcomeMessage();