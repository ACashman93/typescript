function printAddress(street: string, streetTwo?: string, state = 'AZ') {
  console.log(street);
  if(streetTwo) {
    console.log(streetTwo);
  }
  console.log(state)
}

console.log('Skip streetTwo:')
printAddress('123 Any St')
// optional arguments are declared with a ?. streetTwo?
console.log('Includes streetTwo:')
printAddress('123 Any St', 'Suite 540')
// default arguments are decalred with an = instead of a :. state = 'AZ'
console.log('Includes a state change:')
printAddress('123 Any St', 'Suite 540', 'OR')

// rest argument (like a splat in ruby.. an array of values)
function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let dude of players) {
    console.log(dude);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');

// List of arguments types
// Optional - defined by a ? at end of variable name
// Default - defined by an equals instead of a colon
// Rest - defined by ... before a variable name