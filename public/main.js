"use strict";

// Add a border color to any link clicked
let tab_links = document.querySelectorAll(".tab_link");

for(let i = 0; i < tab_links.length; i++) {
	if(tab_links[i].href === location.href) {
		tab_links[i].className += " active";
	}
}