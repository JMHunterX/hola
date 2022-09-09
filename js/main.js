console.log(4 * 4)

const array = ['a', 'b', 'c']

array.forEach(palabra => {
 console.log(palabra) 
});


for (let i = 0; i < array.length; i++) {
  console.log(`for ${[i]}`);
  const newArray = array.map(num => num++);
  console.log(newArray)
}

console.log('OMG, alguien me ayuda a solucionar lo de arriba, por favor y gracias, besos en el siempre sucio')