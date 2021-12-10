const Voiture = function (assurance, proprio, couleur, roues, marque) {
    this.assurance = assurance;
    this.proprietaire = proprio;
    Vehicule.call(this, couleur, roues, marque)

    Voiture.prototype.carWash = () => console.log("La voiture au car Wash");
}

let voiture = new Voiture("allianz", "jeCpa", "rouge", 4, "Fiat");
voiture.carWash();

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;



