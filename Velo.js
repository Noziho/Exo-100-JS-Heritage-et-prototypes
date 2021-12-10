
const Velo = function (RayonsRoues, typeDePeinture) {

    Vehicule.call(this, couleur, roues, marque);

    Velo.prototype.monter = () => console.log("Je monte sur mon vélo");
}
let velo = new Velo(1, "mat");
velo.monter();

Velo.prototype = Object.create(Vehicule.prototype);
Velo.prototype.constructor = Velo;

