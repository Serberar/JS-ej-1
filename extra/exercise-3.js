const movies = [  { name: "Your Name", durationInMinutes: 130 },  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },  { name: "Origen", durationInMinutes: 165 },  { name: "El señor de los anillos", durationInMinutes: 967 },  { name: "Solo en casa", durationInMinutes: 214 },  { name: "El jardin de las palabras", durationInMinutes: 40 }];

let peliculaPequeña = []
let peliculaMediana = []
let peliculaGrande = []

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  if (element.durationInMinutes < 100) {
    peliculaPequeña.push(element);
  } else if (element.durationInMinutes < 200) {
    peliculaMediana.push(element);
  } else {
    peliculaGrande.push(element);
  }
}

console.log("pequeñas");
console.log(peliculaPequeña);
console.log("medianas");
console.log(peliculaMediana);
console.log("grandes");
console.log(peliculaGrande);

