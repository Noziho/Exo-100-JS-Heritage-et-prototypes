class Vehicule {
    constructor(couleur, roues, marque) {
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }

    demarrer() {
        console.log("ma voiture démarre")
    }

    arreter () {
        console.log("ma voiture s'arrête")
    }


}


let monVehicule = new Vehicule("blanc", 4, 'Peugeot');

monVehicule.demarrer();
monVehicule.arreter();

