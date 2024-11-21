const title = document.getElementById('navbar');

function handleScroll() {
    if (window.scrollY = 0) {  // Si on a défilé de plus de 100px
      title.style.opacity = '0'; // Cacher le titre en réduisant l'opacité

 // Ajouter la classe pour cacher  
    } else {
      title.style.opacity = '1'; // Réafficher le titre
 // Retirer la classe pour réafficher  
    }
  }
  

window.addEventListener('scroll', handleScroll);

  // Fonction pour afficher la navbar avec animation 
  window.onload = function() {
    var navbar = document.getElementById('navbar');
    // Attendre un court instant avant d'ajouter la classe 'visible'
    setTimeout(function() {
        navbar.classList.add('visible');
    }, 100); // Attendre 100 ms avant d'afficher la navbar 
};


// Sélectionnez toutes les cartes
const cards = document.querySelectorAll('.cartes');

function handleScroll() {
  // Parcourez toutes les cartes
  cards.forEach(cartes => {
    // Vérifiez si la carte est dans la fenêtre de visualisation
    const rect = cartes.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      // Ajoutez la classe "visible" lorsque la carte est visible
      cartes.classList.add('visible2');
    }
  });
}

// Ajoutez un écouteur d'événement pour le scroll
window.addEventListener('scroll', handleScroll);

// Exécutez la fonction immédiatement pour détecter les cartes visibles dès le chargement
handleScroll();