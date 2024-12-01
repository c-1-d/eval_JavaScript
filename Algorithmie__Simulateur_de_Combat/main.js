class Gladiateur { //création de la classe qui nos deux combattants vont avoir
    constructor (ATK, DEF, PV, Pre) { //fonction constructor à laquelle on met les paramêtres attaque, défense et Point de vie
        this.ATK = ATK;
        this.DEF = DEF;
        this.PV = PV;
        this.Pre = Pre;
    }

    peutATK () {
        return Math.random() < this.Pre
    }
}

let Goor = new Gladiateur(12, 6, 42, 0.8); //création du premier combattant en lui affectant la nouvelle classe et les paramêtres
let Rukt = new Gladiateur(10, 10, 43, 0.7); //pareil que le premier combattant

console.log("Goor à " + Goor.PV + " PV"); //pour montrer dans la console les PV de Goor
console.log("Rukt à " + Rukt.PV + " PV"); //pour montrer dans la console les PV de Rukt

function Fight(Fighter_Goor, Fighter_Rukt) {
    let tour = 1;
    while (Fighter_Goor.PV > 0 && Fighter_Rukt.PV > 0) {
        console.log("-- Tour " + tour + " --");

        if (Fighter_Goor.peutATK ()) {
            Fighter_Rukt.PV = Fighter_Rukt.PV - (Fighter_Goor.ATK - Fighter_Rukt.DEF / 2);
            console.log("Rukt perd des PV, il lui reste " + Fighter_Rukt.PV + " PV");
        } else {
            console.log("Goor rate son attaque !");
        }

        if (Fighter_Rukt.PV <= 0) {
            console.log("Goor gagne le combat !");
            if (Fighter_Goor.PV <= 5) {
                console.log("C'était serré !")
            }
            break;
        }

        if (Fighter_Rukt.peutATK ()) {
            Fighter_Goor.PV = Fighter_Goor.PV - (Fighter_Rukt.ATK - Fighter_Goor.DEF / 2);
            console.log("Goor perd des HP, il lui reste " + Fighter_Goor.PV + " PV");
        } else {
            console.log("Rukt rate son attaque !");
        }

        if (Fighter_Goor.PV <= 0) {
            console.log("Rukt gagne le combat !");
            if (Fighter_Rukt.PV <= 5) {
                console.log("C'était serré !")
            }
            break;
        }

        tour++;
    }
}

console.log(Fight(Goor, Rukt));
