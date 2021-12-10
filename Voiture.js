const Voiture = function (assurance, proprio) {
    this.assurance = assurance;
    this.proprietaire = proprio;
    Vehicule.call(this, couleur, roues, marque)

    Voiture.prototype.carWash = () => console.log("La voiture au car Wash");
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;