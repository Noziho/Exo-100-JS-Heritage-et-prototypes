const Vehicule = function (couleur, roues, marque) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    Vehicule.prototype.demarrer = () => console.log("Le véhicule démarre");
    Vehicule.prototype.arreter = () => console.log("Le véhicule s'arrête");
}


let monVehicule = new Vehicule("blanc", 4, 'Peugeot');

monVehicule.demarrer();
monVehicule.arreter();

