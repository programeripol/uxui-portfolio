// kad klikneš d da te odvede na homepage

document.querySelector('.dlogo').addEventListener('click', function() {
    // Redirect to "moj web portfolio.html"
    window.location.href = 'moj web portfolio.html';
});


    // klik na portfolio

    document.addEventListener("DOMContentLoaded", function () {
        // Handle click on portfolio link in "O Meni" page
        var portfolioLink = document.getElementById("portfolio-link");
        if (portfolioLink) {
            portfolioLink.addEventListener("click", function (event) {
                event.preventDefault();
    
                // Navigate to "moj web portfolio.html" with hash for the section
                window.location.href = 'moj web portfolio.html#portfolio-section';
            
            });
        }
    });



// klik na kontakt
document.addEventListener("DOMContentLoaded", function () {
  // Handle click on kontakt link in "O Meni" page
  var kontaktLink = document.getElementById("kontakt-link");
  if (kontaktLink) {
      kontaktLink.addEventListener("click", function (event) {
          event.preventDefault();

          // Navigate to "moj web portfolio.html"
          window.location.href = 'moj web portfolio.html#kontakt';
      });
  }
});






  // Handle click on moje vještine button
var mojevještineButton = document.querySelector(".gumbmojevještine");
if (mojevještineButton) {
    mojevještineButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Scroll to the end of the "Dora" image
        var doraImage = document.querySelector(".dora");
        if (doraImage) {
            var doraImageBottom = doraImage.offsetTop + doraImage.offsetHeight;
            window.scrollTo({
                top: doraImageBottom,
                behavior: 'smooth' // Optional: smooth scrolling animation
            });
        }
    });
}


// Bold the clicked menu item
var menuItems = document.querySelectorAll(".menuomeni a[role='button']");
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove bold class from all menu items
    menuItems.forEach(function (item) {
      item.classList.remove("bold");
    });

    // Add bold class to the clicked menu item
    menuItem.classList.add("bold");
  });
});


    // Boldaj "Sve vještine" po defaultu
document.addEventListener("DOMContentLoaded", function () {
    var sveVjestineLink = document.querySelector(".Svevještine");
    if (sveVjestineLink) {
      sveVjestineLink.classList.add("Svevjestine-bold");
    }
  
    // Prikazi sve paragrafe i naslove čim se učita stranica
    sakrijPrikaziParagrafe(true);
  
    // Dodajte stilove i promenite klasu na klik
    var menuItems = document.querySelectorAll(".menuomeni a");
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Ukloni bold sa svih naslova
        menuItems.forEach(function (item) {
          item.classList.remove("Svevjestine-bold");
        });
  
        // Dodaj bold na kliknuti naslov
        menuItem.classList.add("Svevjestine-bold");
  
        // Prikazi ili sakrij paragrafe
        sakrijPrikaziParagrafe(true);
      });
    });
  });

  
  // Funkcija za sakrivanje ili prikazivanje paragrafa
  function sakrijPrikaziParagrafe(prikaziSve) {
    // Sakrij ili prikaži sve paragrafe
    document.querySelector('.paragraf2').style.display = prikaziSve ? 'block' : 'none';
    document.querySelector('.paragraf3').style.display = prikaziSve ? 'block' : 'none';
    document.querySelector('.paragraf4').style.display = prikaziSve ? 'block' : 'none';
    document.querySelector('.paragrafzadnji').style.display = prikaziSve ? 'block' : 'none';
    // Sakrij ili prikaži h2 tagove
    document.querySelector('.adobealati').style.display = prikaziSve ? 'block' : 'none';
    document.querySelector('.uxui').style.display = prikaziSve ? 'block' : 'none';
    document.querySelector('.mreze').style.display = prikaziSve ? 'block' : 'none';
  }














  // strelica za vraćanje na vrh stranice

// Postavi prag skrolanja ispod kojeg će se prikazati gumb (20% visine prozora)
var scrollThreshold = window.innerHeight * 0.9;

// Funkcija za prikazivanje ili skrivanje gumba ovisno o visini skrolanja
function handleScroll() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    // Proveri da li smo prošli 20% visine prozora
    if (window.scrollY > scrollThreshold) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
}

// Funkcija za povratak na vrh stranice
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Omogućava glatki prijelaz do vrha
  });
}

// Dodaj event listenere za skrolanje i klik na gumb
window.addEventListener("scroll", handleScroll);

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", scrollToTop);
}






// skroll dolje kad kliknem adobe alati

// Funkcija za pomicanje na određeni položaj iznad elementa "adobealati"
function scrollToAdobeToolsSection() {
  var adobeAlatiElement = document.querySelector(".adobealati");
  if (adobeAlatiElement) {
    var offset = adobeAlatiElement.offsetTop - 70; // Prilagodi ovisno o potrebama
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
}

// Dodaj event listener za klik na vezu "Adobe alati"
var adobeAlatiLink = document.querySelector(".Adobealati");
if (adobeAlatiLink) {
  adobeAlatiLink.addEventListener("click", scrollToAdobeToolsSection);
}



// Funkcija za pomicanje na određeni položaj iznad elementa s klasom "uxui"
function scrollToUXUISection() {
  var uxuiSectionElement = document.querySelector(".uxui");
  if (uxuiSectionElement) {
    var offset = uxuiSectionElement.offsetTop - 70; // Prilagodi ovisno o potrebama
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
}

// Dodaj event listener za klik na vezu "UX/UI, HTML, CSS"
var uxuiLink = document.getElementById("uxToolsSection");
if (uxuiLink) {
  uxuiLink.addEventListener("click", scrollToUXUISection);
}



// skroll dolje kad kliknem društvene mreže

// Funkcija za pomicanje na određeni položaj iznad elementa s klasom "drustvene mreze"
function scrollToMrezeSection() {
  var mrezeSectionElement = document.querySelector(".mreze");
  if (mrezeSectionElement) {
    mrezeSectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start" // Pomiče element prema vrhu prozora
    });
  }
}

// Dodaj event listener za klik na vezu "drustvene mreže"
var mrezeLink = document.getElementById("mrezeToolsSection");
if (mrezeLink) {
  mrezeLink.addEventListener("click", scrollToMrezeSection);
}





// Handle click on "Sve vještine" button
var sveVjestineButton = document.querySelector(".Svevještine");
if (sveVjestineButton) {
    sveVjestineButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Scroll to the end of the "Dora" image (prilagodi ovisno o potrebama)
        var targetElement = document.querySelector(".dora");
        if (targetElement) {
            var targetElementBottom = targetElement.offsetTop + targetElement.offsetHeight;
            window.scrollTo({
                top: targetElementBottom,
                behavior: 'smooth' // Optional: smooth scrolling animation
            });
        }
    });
}




// Dobavi element menija
var menu = document.querySelector('.menuomeni');

// Dobavi poziciju menija u odnosu na vrh stranice
var menuPosition = menu.offsetTop;

// Dobavi kraj slike .dora
var doraImage = document.querySelector(".dora");
var doraImageBottom = doraImage.offsetTop + doraImage.offsetHeight;

// Funkcija koja se poziva pri svakom skrolanju
function handleScroll() {
  // Dobavi trenutnu poziciju skrolanja
  var scrollPosition = window.scrollY;

  // Ako je skrolanje doseglo ili prošlo kraj slike .dora, prikaži meni
  if (scrollPosition >= doraImageBottom) {
    menu.style.visibility = 'visible';
  } else {
    menu.style.visibility = 'hidden';
  }
}

// Dodaj event listener za skrolanje
window.addEventListener('scroll', handleScroll);

// Inicijalno sakrij meni
menu.style.visibility = 'hidden';

