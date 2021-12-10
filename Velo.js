
class Velo extends Vehicule {

    constructor(rayonsRoues, typeDePeinture, couleur, roues , marque) {
        super(couleur, roues, marque);
        this.rayonsRoues = rayonsRoues;
        this.typeDePeinture = typeDePeinture;
    }

    monter() {
        console.log("Je monte à vélo");
    }

}
let velo = new Velo(1, "mat");
velo.monter();


