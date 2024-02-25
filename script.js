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



/* det her er til billedegallery på nippon projekt 
ref: w3schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow */
let slideIndex = 1; // Initialiserer variablen 'slideIndex' og sætter den til 1, hvilket repræsenterer det første slide.
showSlides(slideIndex); // Kalder funktionen 'showSlides' for at vise det første slide.

// Funktion til at ændre slides med en bestemt mængde
function plusSlides(n) {
  showSlides(slideIndex += n); // Kalder funktionen 'showSlides' med det nye slideindeks efter tilføjelse af 'n'.
}

// Funktion til at ændre slide til en bestemt position
function currentSlide(n) {
  showSlides(slideIndex = n); // Kalder funktionen 'showSlides' med det valgte slideindeks 'n'.
}

// Funktion til at vise slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Henter alle elementer med klassenavnet 'mySlides' (dine slides).
  let dots = document.getElementsByClassName("dot"); // Henter alle elementer med klassenavnet 'dot' (dine punkter).
  if (n > slides.length) {slideIndex = 1}    // Hvis 'n' er større end antallet af slides, skal 'slideIndex' sættes til 1 for at gå til det første slide.
  if (n < 1) {slideIndex = slides.length} // Hvis 'n' er mindre end 1, skal 'slideIndex' sættes til det sidste slide.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Skjuler alle slides.
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Fjerner klassen 'active' fra alle punkter.
  }
  slides[slideIndex-1].style.display = "block";  // Viser det aktuelle slide ved at ændre dets stilattribut til 'display: block'.
  dots[slideIndex-1].className += " active"; // Tilføjer klassen 'active' til det aktuelle punkt for at markere det som aktivt.
}

// Automatisk ændring af slides hvert 3. sekund (3000 millisekunder)
setInterval(function() {
  plusSlides(1); // Ændrer slide med 1
}, 6000); // Intervallet er 6000 millisekunder (6 sekunder), kan ændres efter behov.


// her er til nippon tabs //

document.addEventListener("DOMContentLoaded", function() {
  // Set the first tab as active on page load
  document.querySelector(".nipponlinks").classList.add("active");
  document.getElementById("Nippontab1").classList.add("active");

  // Add event listener to tab buttons
  var tabButtons = document.querySelectorAll(".nipponlinks");
  tabButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Remove "active" class from all tab buttons and tab contents
      tabButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      document.querySelectorAll(".nipponcontent").forEach(function(tabContent) {
        tabContent.classList.remove("active");
      });

      // Add "active" class to the clicked tab button and corresponding tab content
      var tabId = this.getAttribute("data-nippon");
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});