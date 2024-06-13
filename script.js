function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.header', 2);
});

link4.addEventListener('click', () => {
    scrollToElement('.header', 3);
});

function VertexIndustrie() {
    var url = "https://www.vertex-industrie.fr/";
    window.open(url, "_blank");
}

function McDonald() {
    var url = "https://www.mcdonalds.fr/restaurants/mcdonalds-fontaine-les-dijon/657";
    window.open(url, "_blank");
}

function sixquiprends() {
    var url = "https://github.com/rafikApp/6-qui-prend";
    window.open(url, "_blank");
}

function Démineur() {
    var url = "https://github.com/rafikApp/Jeu-de-Mines";
    window.open(url, "_blank");
}

function Memory() {
    var url = "https://github.com/rafikApp/Jeu-Memory";
    window.open(url, "_blank");
}

function Bowling() {
    var url = "https://www.google.com/";
    window.open(url, "_blank");
}

function Lapin() {
    var url = "https://github.com/rafikApp/Modelisation-Lapin";
    window.open(url, "_blank");
}

function Grid() {
    var url = "https://github.com/rafikApp/Grid-Path";
    window.open(url, "_blank");
}

function Contact() {
    var url = "https://github.com/rafikApp/Gestion-de-contact";
    window.open(url, "_blank");
}

function Processus() {
    var url = "https://github.com/rafikApp/Gestion-de-processus";
    window.open(url, "_blank");
}

function linkedin() {
    var url = "https://www.linkedin.com/in/rafik-rharmaoui-085299281/";
    window.open(url, "_blank");
}

function github() {
    var url = "https://github.com/rafikApp";
    window.open(url, "_blank");
}

function Graphes() {
    var url = "https://github.com/rafikApp/Graphe-k-quasi-cliques-";
    window.open(url, "_blank");
}

function Formation() {
    var url = "https://github.com/rafikApp/Site-de-Formation";
    window.open(url, "_blank");
}