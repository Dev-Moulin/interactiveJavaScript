//Fonctionnalité 1 La plus dur :)

let footer = document.querySelector("footer");

footer.addEventListener("click", function() {
  console.log("clique");
});


// Fonctionnalité 1-bis conteur

let footerClickCount = 0;

footer.addEventListener("click", function() {
  footerClickCount++;
  console.log(`clic numéro ${footerClickCount}`);
});

//Le Burger 

let navbarToggler = document.querySelector(".navbar-toggler");
let navbarHeader = document.getElementById("navbarHeader");

navbarToggler.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});
//toggle (basculement) est une action qui alterne entre deux états ou valeurs.
//quand ont clic sur le btn navbar-toggler ont déclanche l'évenement
//et donc la class <div class="collapse bg-dark" est montré et 
//présente id="navbarHeader">


//La Fonction 3 modif color

let cardOne = document.querySelector(".card");
let cardOneEdit = cardOne.querySelector(".btn-outline-secondary");

cardOneEdit.addEventListener("click", function() {
  cardOne.style.color = "red";
});


//La F4 modif text

let secondCard = document.querySelectorAll(".card")[1];
let secondCardEdit = secondCard.querySelector(".btn-outline-secondary");

secondCardEdit.addEventListener("click", function() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
});

// si secondCard est egal a green alors secondCard devient "" (part défault)
//sinon secondCard est <<déja>> green


// Fonction disabled 

let navbar = document.querySelector(".navbar");
let bootstrapLink = document.querySelector("link");

navbar.addEventListener("dblclick", function() {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false;
  } else {
    bootstrapLink.disabled = true;
  }
});
// la propriété disabled ne supprime pas la feuille de styles, le lien bootstrap est toujours la. 
//disabled dit au navigateur ignorer le lien au double clic (false et true).


//Fonctionnalité 6

let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  let viewBtn = card.querySelector(".btn-success");
  let cardImg = card.querySelector(".card-img-top");
  let cardText = card.querySelector(".card-text");

  viewBtn.addEventListener("mouseover", function() {
    if (cardImg.style.width === "20%") {
      cardImg.style.width = "";
      cardText.style.display = "block";
    } else {
      cardImg.style.width = "20%";
      cardText.style.display = "none";
    }
  });
});
//reprend les instructions de F4

// F7 faite tourner les cards !

let moveRightBtn = document.querySelector(".btn-secondary");
let parentNode = document.querySelector(".album .row");

moveRightBtn.addEventListener("click", function() {
  let lastCard = parentNode.lastElementChild;
  parentNode.insertBefore(lastCard, parentNode.firstElementChild);
});

// comme ont travaille avec des selecteurs relatifs "querySelector"
//ici le code ne depend pas de l'ordre des cards
// .album .row permet de cibler précisément que l'on cherche une row 
//contenue dans un élément album.

// F8 nextSibling
let moveLeftBtn = document.querySelector(".btn-primary");
let parentOfNode = document.querySelector(".album .row");

moveLeftBtn.addEventListener("click", function(event) {
  event.preventDefault(); 
  let lastCard = parentOfNode.lastElementChild; 
  let nextOfLastCard = lastCard.nextSibling; 
  parentOfNode.insertBefore(parentOfNode.firstElementChild, nextOfLastCard); 
});

//lastElementChild renvoie la dernier cards donc null si lastCard est le dernier noeud.
//comme lastCard est null javascript place automatiquement l'élément à la fin du conteneur.


//F9 fonction des touches 
let logo = document.querySelector(".navbar-brand");
let body = document.body;

logo.addEventListener("keypress", function(event) {
  body.className = ""; 
  // Réinitialise les classes par default si ont tape une touche qui n'est pas "a,z,e"
  if (event.key === "a") {
    body.classList.add("col-4");
  } else if (event.key === "z") {
    body.classList.add("col-4", "offset-md-4");
  } else if (event.key === "e") {
    body.classList.add("col-4", "offset-md-8");
  }
});

// Classes Bootstrap utilisées

// col-4 : Définit la largeur de l'élément sur 4 colonnes 
// (dans un système de grille de 12 colonnes).

// offset-md-4 : Ajoute un décalage de 4 colonnes sur les écrans de taille moyenne 
// (et plus).

// offset-md-8 : Ajoute un décalage de 8 colonnes.
