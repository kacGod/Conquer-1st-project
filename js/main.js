/*
==================================================

Scroll Control on Nav Bar Click

==================================================
*/
document.addEventListener("DOMContentLoaded", () => {
	// Detect if user uses IE11
	const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	// Get all the links with href that start with "sectionLink"
	const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
	// Loop over all the links
	listOfLinks.forEach(function(link) {
		// Listen for a click
		link.addEventListener("click", () => {
			listOfLinks.forEach((link) => {
				if (link.classList.contains("current")) {
					link.classList.remove("current");
				}
			});
			link.classList.add("current");
			// Get the element where to scroll
			let ref = link.href.split("#sectionLink");
			ref = "#section" + ref[1];
			// No smooth scroll on IE, jump to the element instead
			if (isIE11) {
				window.scrollTo(0, document.querySelector(ref).offsetTop - 40);
			} else {
				window.scroll({
					behavior: "smooth",
					left: 0,
					// Top gets the distance from the top of the page of our target element
					top: document.querySelector(ref).offsetTop - 80
				});
			}
			console.log(document.querySelector(ref))
		})
/*
=====================================================

Change Navigation Button on Scroll

=====================================================
*/
		window.addEventListener("scroll", function() {
			var ref = link.href.split("#sectionLink");
			ref = "#section" + ref[1];
			var fromTop = window.scrollY;
			var section = document.querySelector(ref);
			var section3 = document.getElementById("section3");
			var sectionLink3 = document.querySelector("a[href^='#sectionLink3");
			var section3Sub = document.getElementById("section3Sub");

			if (section.offsetTop - 290 <= fromTop && section.offsetTop + section.offsetHeight - 290 > fromTop) {
				link.classList.add("current");
			} else {
				link.classList.remove("current");
			}

			if (section3.offsetTop - 340 <= fromTop && section3.offsetTop + section3.offsetHeight + section3Sub.offsetHeight -170 > fromTop) {
				sectionLink3.classList.add("current");
			} else {
				sectionLink3.classList.remove("current");
			}
		});

		
	})
	
});

/*
========================================================

Stop Arrow at Footer

========================================================
*/
var arr = document.querySelector("#arr-up img");
var footer = document.getElementsByTagName("footer")[0];

function checkOffset() {
	function getRectTop(el){
	  var rect = el.getBoundingClientRect();
	  return rect.top;
	}
	if(document.documentElement.scrollTop + window.innerHeight < (getRectTop(footer) + document.documentElement.scrollTop)) {
		arr.style.position = "fixed";
	} else {
		arr.style.position = "absolute";
	}

var secOne = document.querySelector(".hero-text");
var topOne = secOne.offsetTop;
var arrowUp = document.querySelector("#arr-up img");
	if (window.scrollY > topOne) {
		arrowUp.style.opacity = "1";
	} else {
		arrowUp.style.opacity = "0";
	}

}

window.onscroll = function() {
	checkOffset();
};

/*
========================================================

Navigation Button (Appears at 803px width)

========================================================
*/

var navBtn = document.querySelector("#myTopnav button");
var x = document.getElementById("menu");
navBtn.addEventListener("click", function() {
	x.classList.toggle("show");
});

var sect = document.getElementById("section2");
