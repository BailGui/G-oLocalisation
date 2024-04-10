function afficherPosition(){
    trouverPosition(ma_carte, true, 16);
}

/* ==================== Géolocalisation ======================================================*/

function trouverPosition(carteName, afficher, zoom) {
    /* Pour centrer la carte en fonction de la position détectée */
    carteName.locate({setView: afficher, maxZoom: zoom, enableHighaccuracy: true});

    carteName.on('locationerror', onLocationError);
    carteName.on('locationfound', onLocationFound);
}

function onLocationFound(e) {
    const radius = Math.round(e.accuracy);
    const longitude = e.longitude;
    const latitude = e.latitude;

    L.marker(e.latlng).addTo(ma_carte)
        .bindPopup(`<h3>Votre position estimée</h3>
        <p>longitude: ${longitude}° - latitude: ${latitude}°</p>
        <p>Vous êtes situé dans un rayon de ${radius} mètres autour de ce point</p>`)
        .openPopup();

    L.circle(e.latlng, radius).addTo(ma_carte);
}

function onLocationError(e) {
    alert(e.message);
}

