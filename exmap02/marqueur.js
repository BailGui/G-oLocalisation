/* ===================================== Marqueurs =========================================== */

function marqueurCF2m(){
    return ajouterMarqueur(CF2m);
}

function ajouterMarqueur(position){
    return L.marker(position).addTo(ma_carte);
}

