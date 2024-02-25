// i'll need js for all the tab things, the image galleries, and the accordian //


// her er JS til projekt tab - knapperne //




document.addEventListener("DOMContentLoaded", function() {
// Sætter den første fane som aktiv ved sidenbelastning
// Finder den første faneknap og tilføjer "active" klassen for at markere den som aktiv
  document.querySelector(".tab button").classList.add("active"); 
  // Finder det tilsvarende faneelement og tilføjer "active" klassen for at vise dets indhold
  document.getElementById("tab1").classList.add("active"); 

  // Tilføjer en hændelseslytter til fane knapperne
  var tabButtons = document.querySelectorAll(".tab button");
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