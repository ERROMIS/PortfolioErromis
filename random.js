document.addEventListener("DOMContentLoaded", function() {
    var projets = [
        "Projet1.html",
        "Projet2.html",
        "Projet3.html",
        "Projet4.html",
        "Projet5.html"
    ];

    function ouvrirDansNouvelOnglet(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    document.getElementById("voir-plus-projet").addEventListener("click", function(event) {
        event.preventDefault();
    
        var lienAleatoire = projets[Math.floor(Math.random() * projets.length)];
        ouvrirDansNouvelOnglet(lienAleatoire);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var projets = [
        "Projet1.html",
        "Projet2.html",
        "Projet3.html",
        "Projet4.html",
        "Projet5.html"
    ];

    function ouvrirDansNouvelOnglet(url) {
        window.location.href = url;
    }
    
        document.getElementById("voir-proj-alt").addEventListener("click", function(event) {
            event.preventDefault();
            
            var lienAleatoire = projets[Math.floor(Math.random() * projets.length)];
    
            ouvrirDansNouvelOnglet(lienAleatoire);
        });
});

document.addEventListener("DOMContentLoaded", function() {
    function getProjectNumber() {
        var currentPage = window.location.pathname;
        var match = currentPage.match(/Projet(\d+)\.html/);
        if (match) {
            return parseInt(match[1]);
        }
        return null; 
    }

    function generatePreviousLink() {
        var projectNumber = getProjectNumber(); 
        if (projectNumber && projectNumber > 1) {
            return "Projet" + (projectNumber - 1) + ".html";
        }
        return null;
    }

    
    function generateNextLink() {
        var projectNumber = getProjectNumber(); 
        if (projectNumber && projectNumber < 5) {
            return "Projet" + (projectNumber + 1) + ".html"; 
        }
        return null;
    }

   
    var previousLink = document.getElementById("voir-precedent");
    var nextLink = document.getElementById("voir-suivant");

    var previousPage = generatePreviousLink();
    var nextPage = generateNextLink();

    if (previousLink) {
        if (!previousPage) {
            previousLink.style.display = "none"; 
        } else {
            previousLink.href = previousPage;
        }
    }
    if (nextLink) {
        if (!nextPage) {
            nextLink.style.display = "none"; 
        } else {
            nextLink.href = nextPage;
        }
    }
});


