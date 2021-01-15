const modalAlabama = document.getElementById('modalAlabama')
const modalArizona = document.getElementById('modalArizona')
const modalCalifornia = document.getElementById('modalCalifornia')
const modalColorado = document.getElementById('modalColorado')
const modalFlorida = document.getElementById('modalFlorida')
const modalGeorgia = document.getElementById('modalGeorgia')
const modalIllinois = document.getElementById('modalIllinois')
const modalIndiana = document.getElementById('modalIndiana')
const modalKansas = document.getElementById('modalKansas')
const modalLouisiana = document.getElementById('modalLouisiana')
const modalMassachusettes = document.getElementById('modalMassachusettes')
const modalMaryland = document.getElementById('modalMaryland')
const modalMaine = document.getElementById('modalMaine')
const modalMichigan = document.getElementById('modalMichigan')
const modalMinnesota = document.getElementById('modalMinnesota')
const modalMissouri = document.getElementById('modalMissouri')
const modalNorthCarolina = document.getElementById('modalNorthCarolina')
const modalNewJersey = document.getElementById('modalNewJersey')
const modalNewYork = document.getElementById('modalNewYork')
const modalOhio = document.getElementById("modalOhio");
const modalOregon = document.getElementById('modalOregon')
const modalPennsylvania = document.getElementById('modalPennsylvania')
const modalRhodeIsland = document.getElementById('modalRhodeIsland')
const modalSouthCarolina = document.getElementById('modalSouthCarolina')
const modalTennessee = document.getElementById('modalTennessee')
const modalTexas = document.getElementById('modalTexas')
const modalUtah = document.getElementById('modalUtah')
const modalVirginia = document.getElementById('modalVirginia')
const modalWashington = document.getElementById('modalWashington')
const modalDC = document.getElementById('modalDC')
const modalWestVirginia = document.getElementById('modalWestVirginia')

// window.addEventListener("click", getClickPosition, false);

// function getClickPosition(e) {
//   var xPosition = e.clientX;
//   var yPosition = e.clientY;
//   console.log(xPosition, yPosition)
// }

const pins = {
  alabama: document.getElementById('alabama'),
  arizona: document.getElementById('arizona'),
  california: document.getElementById('california'),
  colorado: document.getElementById('colorado'),
  dC: document.getElementById('dC'),
  florida: document.getElementById('florida'),
  georgia: document.getElementById('georgia'),
  illinois: document.getElementById('illinois'),
  indiana: document.getElementById('indiana'),
  kansas: document.getElementById('kansas'),
  louisiana: document.getElementById('louisiana'),
  maine: document.getElementById('maine'),
  maryland: document.getElementById('maryland'),
  massachusetts: document.getElementById('massachussettes'),
  michigan: document.getElementById('michigan'),
  minnesota: document.getElementById('minnesota'),
  missouri: document.getElementById('missouri'),
  newJersey: document.getElementById('newJersey'),
  newYork: document.getElementById('newYork'),
  northCarolina: document.getElementById('northCarolina'),
  ohio: document.getElementById("ohio"),
  oregon: document.getElementById('oregon'),
  pennsylvania: document.getElementById('pennsylvania'),
  rhodeIsland: document.getElementById('rhodeIsland'),
  southCarolina: document.getElementById('southCarolina'),
  tennessee: document.getElementById('tennessee'),
  texas: document.getElementById('texas'),
  utah: document.getElementById('utah'),
  virginia: document.getElementById('virginia'),
  washington: document.getElementById('washington'),
  westVirginia: document.getElementById('westVirginia'),
};

function showMatchModal(element) {
  element.style.display = "block";
}

function hideModal(element) {
  element.style.display = "none";
}

const observableElements = document.querySelectorAll(".observe-element");

const config = {
  threshold: 0.4
};

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-element");
      observer.unobserve(entry.target);
    }
  });
}, config);

observableElements.forEach(element => {
  observer.observe(element);
});

// modal functions
pins.alabama.addEventListener("mouseover", function() {
  showMatchModal(modalAlabama);
});

pins.alabama.addEventListener("mouseout", function() {
  hideModal(modalAlabama);
});

pins.arizona.addEventListener("mouseover", function() {
  showMatchModal(modalArizona);
});

pins.arizona.addEventListener("mouseout", function() {
  hideModal(modalArizona);
});

pins.california.addEventListener("mouseover", function() {
  showMatchModal(modalCalifornia);
});

pins.california.addEventListener("mouseout", function() {
  hideModal(modalCalifornia);
});

pins.colorado.addEventListener("mouseover", function() {
  showMatchModal(modalColorado);
});

pins.colorado.addEventListener("mouseout", function() {
  hideModal(modalColorado);
});


pins.florida.addEventListener("mouseover", function() {
  showMatchModal(modalFlorida);
});

pins.florida.addEventListener("mouseout", function() {
  hideModal(modalFlorida);
});

pins.georgia.addEventListener("mouseover", function() {
  showMatchModal(modalGeorgia);
});

pins.georgia.addEventListener("mouseout", function() {
  hideModal(modalGeorgia);
});

pins.illinois.addEventListener("mouseover", function() {
  showMatchModal(modalIllinois);
});

pins.illinois.addEventListener("mouseout", function() {
  hideModal(modalIllinois);
});

pins.indiana.addEventListener("mouseover", function() {
  showMatchModal(modalIndiana);
});

pins.indiana.addEventListener("mouseout", function() {
  hideModal(modalIndiana);
});

pins.kansas.addEventListener("mouseover", function() {
  showMatchModal(modalKansas);
});

pins.kansas.addEventListener("mouseout", function() {
  hideModal(modalKansas);
});

pins.louisiana.addEventListener("mouseover", function() {
  showMatchModal(modalLouisiana);
});

pins.louisiana.addEventListener("mouseout", function() {
  hideModal(modalLouisiana);
});

pins.massachusetts.addEventListener("mouseover", function() {
  showMatchModal(modalMassachusettes);
});

pins.massachusetts.addEventListener("mouseout", function() {
  hideModal(modalMassachusettes);
});

pins.maryland.addEventListener("mouseover", function() {
  showMatchModal(modalMaryland);
});

pins.maryland.addEventListener("mouseout", function() {
  hideModal(modalMaryland);
});

pins.maine.addEventListener("mouseover", function() {
  showMatchModal(modalMaine);
});

pins.maine.addEventListener("mouseout", function() {
  hideModal(modalMaine);
});

pins.michigan.addEventListener("mouseover", function() {
  showMatchModal(modalMichigan);
});

pins.michigan.addEventListener("mouseout", function() {
  hideModal(modalMichigan);
});

pins.minnesota.addEventListener("mouseover", function() {
  showMatchModal(modalMinnesota);
});

pins.minnesota.addEventListener("mouseout", function() {
  hideModal(modalMinnesota);
});

pins.missouri.addEventListener("mouseover", function() {
  showMatchModal(modalMissouri);
});

pins.missouri.addEventListener("mouseout", function() {
  hideModal(modalMissouri);
});

pins.northCarolina.addEventListener("mouseover", function() {
  showMatchModal(modalNorthCarolina);
});

pins.northCarolina.addEventListener("mouseout", function() {
  hideModal(modalNorthCarolina);
});

pins.newJersey.addEventListener("mouseover", function() {
  showMatchModal(modalNewJersey);
});

pins.newJersey.addEventListener("mouseout", function() {
  hideModal(modalNewJersey);
});

pins.newYork.addEventListener("mouseover", function() {
  showMatchModal(modalNewYork);
});

pins.newYork.addEventListener("mouseout", function() {
  hideModal(modalNewYork);
});

pins.ohio.addEventListener("mouseover", function() {
  showMatchModal(modalOhio);
});

pins.ohio.addEventListener("mouseout", function() {
  hideModal(modalOhio);
});

pins.oregon.addEventListener("mouseover", function() {
  showMatchModal(modalOregon);
});

pins.oregon.addEventListener("mouseout", function() {
  hideModal(modalOregon);
});

pins.pennsylvania.addEventListener("mouseover", function() {
  showMatchModal(modalPennsylvania);
});

pins.pennsylvania.addEventListener("mouseout", function() {
  hideModal(modalPennsylvania);
});


pins.rhodeIsland.addEventListener("mouseover", function() {
  showMatchModal(modalRhodeIsland);
});

pins.rhodeIsland.addEventListener("mouseout", function() {
  hideModal(modalRhodeIsland);
});


pins.southCarolina.addEventListener("mouseover", function() {
  showMatchModal(modalSouthCarolina);
});

pins.southCarolina.addEventListener("mouseout", function() {
  hideModal(modalSouthCarolina);
});

pins.tennessee.addEventListener("mouseover", function() {
  showMatchModal(modalTennessee);
});

pins.tennessee.addEventListener("mouseout", function() {
  hideModal(modalTennessee);
});

pins.texas.addEventListener("mouseover", function() {
  showMatchModal(modalTexas);
});

pins.texas.addEventListener("mouseout", function() {
  hideModal(modalTexas);
});


pins.utah.addEventListener("mouseover", function() {
  showMatchModal(modalUtah);
});

pins.utah.addEventListener("mouseout", function() {
  hideModal(modalUtah);
});

pins.virginia.addEventListener("mouseover", function() {
  showMatchModal(modalVirginia);
});

pins.virginia.addEventListener("mouseout", function() {
  hideModal(modalVirginia);
});


pins.washington.addEventListener("mouseover", function() {
  showMatchModal(modalWashington);
});

pins.washington.addEventListener("mouseout", function() {
  hideModal(modalWashington);
});


pins.dC.addEventListener("mouseover", function() {
  showMatchModal(modalDC);
});

pins.dC.addEventListener("mouseout", function() {
  hideModal(modalDC);
});

pins.westVirginia.addEventListener("mouseover", function() {
  showMatchModal(modalWestVirginia);
});

pins.westVirginia.addEventListener("mouseout", function() {
  hideModal(modalWestVirginia);
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 