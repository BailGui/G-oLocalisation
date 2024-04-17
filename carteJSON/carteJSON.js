/* Définition du centre et du zoom de la carte (valeur initiale)  */
const carte = L.map('map').setView([51.505, -0.09], 16);

/* Ajout d'un fond de carte (arrière-plan) */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* Récupération des dcnnées */
fetch("carteJSON.php")
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    })
    .catch(function(error){
        console.log(error.message);
    });

/* Création d'un tableau de marqueurs pour un affichage optimal avec FeatureGroup */
const markerTable = [];

function afficheMarqueurs(liste){
/* Boucle pour créer les marqueurs de la liste */
for (let item in liste){
    /* créer un marqueur pour chaque élément de la liste */
    let unMarqueur = L.marker([liste[item].lat, liste[item].long]).addTo(carte);
    /* mettre le nom de l'item dans un popup */
    unMarqueur.bindPopup(liste[item].name);

    /* ajouter ce marqueur au tableau */
    markerTable.push(unMarqueur);
}} 

/* placer le tableau de marqueuts dans le featureGroup */
const groupe = new L.featureGroup(markerTable);

/* adapter l'affichage de ma carte en fonction de la position des marqueurs */
carte.fitBounds(groupe.getBounds(),{padding:[10,10]});