const fatorial = require('./aula-09').fatorial

console.log('n-fatorial')

const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)