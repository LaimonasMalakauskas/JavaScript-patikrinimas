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

function skaiciutiDVMS(metai) {
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

console.log('---------------------5---------------------');
console.log();

function isFarenheitoICelcijus(farenheitas) {
  return ((farenheitas - 32) / 1.8).toFixed(1); //formule is farenheitu i celcijus
}

const farenheitas = 10;

const celcijai = isFarenheitoICelcijus(farenheitas);

console.log(`Tutint ${farenheitas} faranheitu, gausime ${celcijai} celcijus`);
console.log();

function isCelcijausIFarenheitus(celcijus) {
  return (celcijus * 1.8 + 32).toFixed(1); //formule is celciju i farenheitus
}

const celcijus = 10;

const farenheitai = isCelcijausIFarenheitus(celcijus);

console.log(`Tutint ${celcijus} celcijus, gausime ${farenheitai} farenheitus`);
console.log();

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

console.log('---------------------6---------------------');
console.log();

function spaustintiSkaicius() {
  let skaiciai = '';
  for (let i = 1; i <= 10; i++) {
    skaiciai += i;
    if (i < 10) {
      skaiciai = skaiciai + '-';
    }
  }
  console.log(skaiciai);
}
spaustintiSkaicius();
console.log();

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

console.log('---------------------7---------------------');
console.log();

function spaustintiZvaigzdute() {

  let simbolis = '';
  for (let i = 1; i < 6; i++){
    simbolis+='*'; 
    console.log(simbolis);
  }
}
spaustintiZvaigzdute();
console.log();

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

console.log('---------------------8---------------------');
console.log();

function kiekDienuIkiKaledu (){

const siandien = new Date();
const metaiDabar = siandien.getFullYear();
let kaledos = new Date (metaiDabar, 11, 26);

const vienaDiena = 24 * 60 * 60 * 1000; 

const likusiosDienos = Math.floor((kaledos - siandien) / vienaDiena);

console.log(`Iki Kaledu liko ${likusiosDienos} dienos(-u).`);
}
kiekDienuIkiKaledu ();
console.log();

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

console.log('---------------------9---------------------');
console.log();

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

// console.log(vardai.join(','));
// console.log(vardai.join('+'));

function spaustintiVardusKablelis() {
  let vardas = '';
  for (let i = 0; i <vardai.length; i++) {
    vardas += vardai[i];
    if (i <vardai.length-1) {
      vardas = vardas + ',';
    } 
  }
  console.log(vardas);
}
spaustintiVardusKablelis();
console.log();

function spaustintiVardusPliusas() {
  let vardas = '';
  for (let i = 0; i <vardai.length; i++) {
    vardas += vardai[i];
    if (i <vardai.length-1) {
      vardas = vardas + '+';
    } 
  }
  console.log(vardas);
}
spaustintiVardusPliusas();
console.log();

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

console.log('---------------------10---------------------');
console.log();

function generuotiSlaptazodi(ilgis) {
  let slaptazodis = '';
  const galimiSimboliai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  
  // Loop to generate characters for the specified length
  for (let i = 0; i < ilgis; i++) {
      const atsitiktinisSimbolis = Math.floor(Math.random() * galimiSimboliai.length);
      slaptazodis += galimiSimboliai.charAt(atsitiktinisSimbolis);
  }
  return slaptazodis;
}
console.log(generuotiSlaptazodi(12));
console.log();