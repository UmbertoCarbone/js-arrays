const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
/* const reversedTeachers = teachers.reverse()
console.log(reversedTeachers); */

const reversedTeachers = []
console.log(reversedTeachers)
for (let i = teachers.length - 1; i >= 0; i--) {
  const thisTeacher = teachers[i]
  reversedTeachers.push(thisTeacher)
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames)
// 3. Rimuovi 'Ed' dall'array teachers
// Non tanto chiaro // Da rivedere
const removeTeacher = teachers.indexOf("Ed");
if (removeTeacher > -1) {
  teachers.splice(removeTeacher, 1);
}
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = null;

for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];

  if (thisTeacher === "Fabio") {
    isFabioPresent = true
    break;
  }
}
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  let currentTeacher = teachers[i];
  teachersString = teachersString + ',' + currentTeacher;
}
console.log(teachersString)