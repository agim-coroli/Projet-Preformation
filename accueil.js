let lastScrollTop = 0;

document.addEventListener('wheel', function(event) {
    const deltaY = event.deltaY;

    // Vérifie si l'utilisateur fait défiler vers le bas  
    if (deltaY > 0) {
        if (lastScrollTop < document.body.scrollHeight - window.innerHeight) {
            // Défile jusqu'à la prochaine section  
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth' // Défilement instantané  
            });
        }
    } else { // Si l'utilisateur fait défiler vers le haut  
        if (lastScrollTop > 0) {
            // Défile jusqu'à la section précédente  
            window.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth' // Défilement instantané  
            });
        }
    }
    
    lastScrollTop = window.scrollY; // Met à jour la position de défilement  
});