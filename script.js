// i'll need js for all the tab things, the image galleries, and the accordian //


// her er JS til projekt tab - knapperne //

document.addEventListener("DOMContentLoaded", function() {
// Sætter den første fane som aktiv ved sidenbelastning
// Finder den første faneknap og tilføjer "active" klassen for at markere den som aktiv
  document.querySelector(".tablinks").classList.add("active"); 
  // Finder det tilsvarende faneelement og tilføjer "active" klassen for at vise dets indhold
  document.getElementById("tab1").classList.add("active"); 

  // Tilføjer en hændelseslytter til fane knapperne
  var tabButtons = document.querySelectorAll(".tablinks");
  tabButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Fjerner "active" klassen fra alle fane knapper og faneelementer
      tabButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      document.querySelectorAll(".tabcontent").forEach(function(tabContent) {
        tabContent.classList.remove("active");
      });

      /* Tilføjer "active" klassen til den klikkede fane knap og det tilsvarende faneelement
      Henter data-tab attributten for den klikkede knap for at finde det tilsvarende faneelement */
        var tabId = this.getAttribute("data-tab"); 
      /* Tilføjer "active" klassen til den klikkede knap for at markere den som aktiv. */
      this.classList.add("active"); 
      /* Finder det tilsvarende faneelement og tilføjer "active" klassen for at vise dets indhold */
      document.getElementById(tabId).classList.add("active");
    });
  });
});


/* til billedegallerierne på projekttabs
 ref: 2nd semester eksamensprojekt
men primært fra w3schools : https://www.w3schools.com/howto/howto_js_slideshow.asp */


/* Nippon Galleri */

// Initialiserer variablen til det første slide
let slideIndexNippon = 1;

// Funktion til at skifte slides med en bestemt mængde
function plusSlidesNippon(n) {
  showSlidesNippon(slideIndexNippon += n);
}

// Funktion til at skifte til et bestemt slide
function currentSlideNippon(n) {
  showSlidesNippon(slideIndexNippon = n);
}

// Funktion til at vise slides
function showSlidesNippon(n) {
  let i;
  // Henter alle elementer med klassenavnet 'mySlides-nippon' (dine slides)
  let slides = document.getElementsByClassName("mySlides-nippon");

  // Tjekker om det valgte slideindeks er uden for rækkevidden af slides
  if (n > slides.length) { slideIndexNippon = 1 }
  if (n < 1) { slideIndexNippon = slides.length }

  // Skjuler alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Viser det aktuelle slide
  slides[slideIndexNippon - 1].style.display = "block";
}

// Viser det første slide ved indlæsning af siden
showSlidesNippon(slideIndexNippon);

// Automatisk skift billede hvert 6. sekund
setInterval(function() {
  plusSlidesNippon(1); // Skifter til næste slide
}, 6000);



//rinse og repeat til billedgallarierne på frontsession og Ådalen
/* Frontsession Gallery  */
let slideIndexFrontsession = 1;

function plusSlidesFrontsession(n) {
  showSlidesFrontsession(slideIndexFrontsession += n);
}

function currentSlideFrontsession(n) {
  showSlidesFrontsession(slideIndexFrontsession = n);
}

function showSlidesFrontsession(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-frontsession");
  if (n > slides.length) { slideIndexFrontsession = 1 }
  if (n < 1) { slideIndexFrontsession = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexFrontsession - 1].style.display = "block";
}

showSlidesFrontsession(slideIndexFrontsession);

setInterval(function() {
  plusSlidesFrontsession(1); // Skifter til næste slide
}, 6000);

/* Aadalen Gallery */
let slideIndexAadalen = 1;

function plusSlidesAadalen(n) {
  showSlidesAadalen(slideIndexAadalen += n);
}

function currentSlideAadalen(n) {
  showSlidesAadalen(slideIndexAadalen = n);
}

function showSlidesAadalen(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-aadalen");
  if (n > slides.length) { slideIndexAadalen = 1 }
  if (n < 1) { slideIndexAadalen = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexAadalen - 1].style.display = "block";
}

showSlidesAadalen(slideIndexAadalen);

setInterval(function() {
  plusSlidesAadalen(1); // Skifter til næste slide
}, 6000);


// til accordian elementet i about me sektionen 
//ref w3schools: https://www.w3schools.com/howto/howto_js_accordion.asp 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}