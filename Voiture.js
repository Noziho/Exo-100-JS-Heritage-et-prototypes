class Voiture extends Vehicule {

    constructor(assurance, proprio, couleur, roues, marque ) {
        super(couleur, roues, marque);
        this.assurance = assurance;
        this.proprietaire = proprio;
    }

    carWash () {
        console.log("Ma voiture au car Wash !")
    }
}



let voiture = new Voiture("allianz", "jeCpa", "rouge", 4, "Fiat");
voiture.carWash();



