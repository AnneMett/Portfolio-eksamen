// i'll need js for all the tab things, the image galleries, and the accordian //


// her er JS til projekt tab - knapperne //

/* hvad vil jeg have den skal gøre? tre priojekter = tre faner. Når en klikkes på så ændres den til synlig 
og de andre to til ikke-synlig. Vil også sikre at en fane altid er åben, 
for ellers så ser layout lidt dumt ud. */

  /* Funktion til at vise fanens indhold med det givne fane-ID.
   Denne funktion sikrer, at mindst én fane altid er åben. */
function showTab(tabId) {
    // Få fat i fanens indholdselement ved ID
    var tabToShow = document.getElementById(tabId);
  
    // Tjek om den klikkede fane allerede er aktiv (synlig)
    if (tabToShow.style.display === "block") {
      return; // Gør intet, hvis fanen allerede er aktiv
    }
  
    // Skjul alt faneindhold
    var tabContents = document.getElementsByClassName("tab-content");
  
    // Iterér gennem hvert faneindholdselement for at skjule dem
    for (var i = 0; i < tabContents.length; i++) {
      // Skjul hvert faneindhold ved at sætte dens display-egenskab til "none"
      tabContents[i].style.display = "none"; 
    }
  
    // Vis det klikkede faneindhold
    tabToShow.style.display = "block"; // Vis det valgte faneindhold
  }