"use strict";

let ish_soat = 40;
const meyor_ish_soat = 40;

(ish_soat < 0) ? console.log("Ish soati 0 dan kichiq bolmaydi!"): console.log(`Ish soat: ${ish_soat}`);

switch (ish_soat){
case 10:
	console.log("Meyordan oz!");
	break;
case 50:
	console.log("Meyordan kop!");
	break;
case 40:
	console.log("Meyorida!!!");
	break;
}
