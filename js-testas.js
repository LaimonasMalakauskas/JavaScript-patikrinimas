'use strict';
/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

console.log('---------------------1---------------------');
console.log();

function euraiIDolerius(eurai, kursas) {
  return (eurai * kursas).toFixed(4);
}

const kursas = 1.0492;
const eurai = Math.floor(Math.random() * 1000) + 1;
const konvertuotiIDolerius = euraiIDolerius(eurai, kursas);

console.log(`Atsitiktinai sugeneruota euru suma: ${eurai} EUR`);
console.log();
console.log(`${eurai} eurus kovertuojant i dolerius gausime: ${konvertuotiIDolerius} USD`);

console.log();

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

console.log('---------------------2---------------------');
console.log();

function doleriaiIEurus(doleriai, kursasDol) {
  return (doleriai / kursasDol).toFixed(4);
}

const kursasDol = 1.0492;
const doleriai = Math.floor(Math.random() * 1000) + 1;
const konvertuotiEurusIDolerius = doleriaiIEurus(doleriai, kursasDol);

console.log(`Atsitiktinai sugeneruota doleriu suma: ${doleriai} USD`);
console.log();
console.log(`${doleriai} dolerius kovertuojant i eurus gausime: ${konvertuotiEurusIDolerius} EUR`);

console.log();

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

console.log('---------------------3---------------------');
console.log();

function rastiBMI(ugis, svoris) {
  return (svoris / ugis ** 2).toFixed(1);
}

const ugis = 1.78;
const svoris = 80;
const BMI = rastiBMI(ugis, svoris);

console.log(`Jusu BMI rodiklis: ${BMI}`);
console.log();

if (BMI > 25) {
  console.log('Jusu turite virsvori');
} else if (BMI >= 18.5 && BMI < 25) {
  console.log('Jusu BMI rodikliai normalus');
} else {
  console.log('Jusu svoris per mazas');
}

console.log();

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

console.log('---------------------4---------------------');
console.log();

function skaiciutiDVMS (metai){
  return metai;
}

const metai = 36;
const dienos = skaiciutiDVMS(metai * 365);
const valandos = skaiciutiDVMS(dienos * 24);
const minutes = skaiciutiDVMS(valandos * 60);
const sekundes = skaiciutiDVMS(minutes * 60);

console.log(`Jei zmogaus amzius ${metai} metai`);
console.log(`Amzius dienomis : ${dienos} dienos`);
console.log(`Amzius valandomis : ${valandos} valandos`);
console.log(`Amzius minutemis : ${minutes} minutes`);
console.log(`Amzius sekundemis : ${sekundes} sekundes`);

console.log();



/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
