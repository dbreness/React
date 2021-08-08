




// Implemencation del Map
var numeros = [1, 4, 9];
var dobles  = numeros.map(function(num) {
  return num * 2;
});

console.log(numeros)
console.log(dobles)

const numbers = [1, 2, 3, 4];
const newArr = numbers.map(myFunction)
console.log(newArr)

function myFunction(num) {
  return num * 10;
}

const persons = [
    {name : "Douglas", lastname: "Brenes"},
    {name : "Elky", lastname: "Araya"},
    {name : "Victor", lastname: "Vargas"}
  ];
  
  var newPersons = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.name,item.lastname].join(" de ");
  }
  console.log(newPersons)