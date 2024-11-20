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

