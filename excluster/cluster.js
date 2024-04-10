/* Définition du centre de la carte et du zoom (valeur initiale) */
const carte = L.map('map').setView([51.505, -0.09], 13);

/* ajout d'un background */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* Ajout d'un liste de point à placer sur la carte */
const liste = {
    "Studios Abbey Road": {"lat":54.531988,"lng":-0.178226},
    "Palais de Buckingham": {"lat":51.500835, "lng":-0.143004},
    "Trafalgar Square": {"lat":51.508037,"lng":-0.128049},
    "British Museum":{"lat":51.519294,"lng":-0.128018}
};

/* Création d'un ClusterGroup */
const markers= L.markerClusterGroup();

/*Boucle pour créer les marqueurs de la liste */
for (let item in liste){
    let unMarqueur = L.marker([liste[item].lat, liste[item].lng])
}