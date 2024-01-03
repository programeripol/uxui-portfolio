// kad klikneš d da te odvede na homepage

document.querySelector('.dlogo').addEventListener('click', function() {
  // Redirect to "moj web portfolio.html"
  window.location.href = 'moj web portfolio.html';
});


// Boldaj "frontend" po defaultu
document.addEventListener("DOMContentLoaded", function () {
  var frontLink = document.querySelector(".Front-end");
  if (frontLink) {
    sveLink.classList.add("Front-end-bold");
  }


// click on portfolio link
var portfolioLink = document.getElementById("portfolio-link");

if (portfolioLink) {
  portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPortfolioSection();
  });
}

function scrollToPortfolioSection() {
  var portfolioSection = document.getElementById("portfolio-section");

  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  }
}


  // Handle click on kontakt link
  var kontaktLink = document.getElementById("kontakt-link");
  if (kontaktLink) {
    kontaktLink.addEventListener("click", function (event) {
      event.preventDefault();
      var kontaktElement = document.querySelector(".kontaktirajme");
      if (kontaktElement) {
        kontaktElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }




  // Bold all menu items when clicked
  var menuItems = document.querySelectorAll(".menu a");
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

  // Open PDF in a new tab when clicking on slika2
  var slika2Image = document.querySelector(".slika2");
  if (slika2Image) {
    slika2Image.addEventListener("click", function () {
      window.open('planer illustrator.pdf', '_blank');
    });
  }

  // Open PDF in a new tab when clicking on slika8
  var slika8Image = document.querySelector(".slika8");
  if (slika8Image) {
    slika8Image.addEventListener("click", function () {
      window.open('copy ljepota.pdf', '_blank');
    });
  }




  // Scroll to the "portfolio-section" on page load
  var hash = window.location.hash;
  if (hash === '#portfolio-section') {
    scrollToPortfolioSection();
  }
});

// Scroll to the specified section
function scrollToPortfolioSection() {
  var portfolioSection = document.getElementById("portfolio-section");

  if (portfolioSection) {
    portfolioSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}



  // strelica za vraćanje na vrh stranice

// Postavi prag skrolanja ispod kojeg će se prikazati gumb (20% visine prozora)
var scrollThreshold = window.innerHeight * 0.4;

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
  scrollToTopBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Spriječi uobičajeno ponašanje veze (navigaciju)
    scrollToTop(); // Pozovi funkciju za skrolanje na vrh
  });
}







document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.gumbmojiradovi');
  var portfolioSection = document.querySelector('#portfolio-section');

  button.addEventListener('click', function() {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  });
});




// klik na uxui da me odvede na uxui.html

document.addEventListener('DOMContentLoaded', function() {
  var linkToUXUI = document.getElementById('uxLink');
  if (linkToUXUI) {
    linkToUXUI.addEventListener('click', function(event) {
      // Spriječi uobičajeno ponašanje veze (navigaciju)
      event.preventDefault();
      
      // Preusmjeri na uxui.html s fragmentom '#portfolio-section'
      window.location.href = 'uxui.html#portfolio-section';
    });
  }
});



// klik da me odvede na videomontaža.html

document.addEventListener('DOMContentLoaded', function() {
  var linkToVIDEOMONTAŽA = document.getElementById('montažaLink');
  if (linkToVIDEOMONTAŽA) {
    linkToVIDEOMONTAŽA.addEventListener('click', function(event) {
      // Spriječi uobičajeno ponašanje veze (navigaciju)
      event.preventDefault();
      
      // Preusmjeri na frontend.html s fragmentom '#portfolio-section'
      window.location.href = 'videomontaža.html#portfolio-section';
    });
  }
});

// klik da me odvede na kreiranje sadržaja.html

document.addEventListener('DOMContentLoaded', function() {
  var linkToKREIRANJESADRŽAJA = document.getElementById('kreiranjeLink');
  if (linkToKREIRANJESADRŽAJA ) {
    linkToKREIRANJESADRŽAJA .addEventListener('click', function(event) {
      // Spriječi uobičajeno ponašanje veze (navigaciju)
      event.preventDefault();
      
      // Preusmjeri na frontend.html s fragmentom '#portfolio-section'
      window.location.href = 'kreiranjesadržaja.html#portfolio-section';
    });
  }
});

// klik da me odvede na kreiranje copy.html

document.addEventListener('DOMContentLoaded', function() {
  var linkToCOPY = document.getElementById('copyLink');
  if (linkToCOPY) {
    linkToCOPY .addEventListener('click', function(event) {
      // Spriječi uobičajeno ponašanje veze (navigaciju)
      event.preventDefault();
      
      // Preusmjeri na frontend.html s fragmentom '#portfolio-section'
      window.location.href = 'copy.html#portfolio-section';
    });
  }
});



// klik na sve da me odvede na početnu stranicu
document.addEventListener('DOMContentLoaded', function() {
  var sveLink = document.getElementById('sveLink');
  if (sveLink) {
    sveLink.addEventListener('click', function(event) {
      // Spriječi uobičajeno ponašanje veze (navigaciju)
      event.preventDefault();
      
      // Preusmjeri na mojwebportfolio.html s fragmentom '#portfolio-section'
      window.location.href = 'moj web portfolio.html#portfolio-section';
    });
  }
});



