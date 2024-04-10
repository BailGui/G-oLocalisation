/* Coordonnées de Big Ben */
let latitude = 51.5007042;
let longitude= -0.1245721;
let zoomcarte= 15; /* zoom de la carte de 1 à 20 */

/* On utilise un objet de type L.map de la bibliothèque Leaflet qui permet de définir une carte, on passe en paramètre le conteneur, ici id=carte */
let bigben = L.map('carte').setView([latitude, longitude], zoomcarte);

/* Choix d'un fond de carte */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(bigben);