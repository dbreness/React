const maxFeet = 2;

var nuevoArreglo = [];

var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
    favoriteFoods: ['Manzana','Piña','Pizza']
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
    favoriteFoods: ['Sandia','Mango','Hamburguesa']
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
    favoriteFoods: ['Papaya','Melon','Lombriz']
  };

//   Ejercicios:
  //   Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden asignar valores de variables y no quemar valores dentro del arreglo.
  var pinguinos = [gunter,ramon,fred]
  // console.log(pinguinos)
  


//   Escriba un ciclo for para iterar a través de cada pingüino en la matriz e imprima el valor de la propiedad del nombre de cada pingüino en la consola.

for (let i = 0; i < pinguinos.length; i++) {
  const element = pinguinos[i];
  console.log(element.name)
}

//   Imprima la longitud de la matriz de pingüinos en la consola.
console.log(`La longitud de la matriz de pingüinos es: ${pinguinos.length}`)

// Escriba un ciclo for para iterar a través de cada pingüino en la matriz 
// y agregue una nueva propiedad a cada pingüino llamada numberOfFeet con un valor aleatorio del 1 al 5.
for (let i = 0; i < pinguinos.length; i++) {
  const element = pinguinos[i];
  var aleatorio = Math.round(Math.random()*5);
  element.numberOfFeet = aleatorio;
  console.log(`numberOfFeet: ${element.numberOfFeet}`);
}

//   Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y para cada pingüino que pueda volar, 
// imprima en la consola un mensaje que contenga el nombre del pingüino y "¡puede volar!" 
// - por ejemplo, "¡Gunter puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos que no pueden volar).
for (let i = 0; i < pinguinos.length; i++) {
  const element = pinguinos[i];
  if (element.canFly) {
    console.log(`${element.name} puede volar`); 
  }
}

//   Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies.
for (let i = 0; i < pinguinos.length; i++) { 
  const element = pinguinos[i];
  if (element.numberOfFeet > maxFeet) {
    nuevoArreglo.push(element)
  }
}
console.log(nuevoArreglo)

//   Agregue una nueva propiedad a su pingüino llamada favoriteFoods y configúrela igual a una matriz que contiene una lista de tres cadenas.

//   Accede a la segunda comida favorita de sus pingüinos e imprímela en la consola usando console.log ()
for (let i = 0; i < pinguinos.length; i++) { 
  const element = pinguinos[i];
  console.log(element.favoriteFoods[1])
}
//   Sin modificar nada de su código anterior, escriba una nueva línea de código que cambie el valor del último elemento de la lista a "piñas"
//  (sobrescribiendo el valor anterior).
for (let i = 0; i < pinguinos.length; i++) { 
  const element = pinguinos[i].favoriteFoods;
  element[element.length - 1] = 'piñas' 
}
console.log(pinguinos)

//   Escriba un cilo for para recorrer cada comida en la propiedad de comida favorita de sus pingüinos e imprima cada una en la consola.
for (let i = 0; i < pinguinos.length; i++) { 
  const element = pinguinos[i].favoriteFoods;
  console.log(`Pingüinos: ${pinguinos[i].name}`)
  for (let j = 0; j < element.length; j++) {
    console.log(element[j])
  }
}

//   Programe una función que imite el comportamiento del array.find().
const found = pinguinos.find(element => element.name === 'Gunter');
console.log(found)
//   Programe una función que imite el comportamiento del array.filter().
