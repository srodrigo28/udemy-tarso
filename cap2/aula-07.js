console.log('n-fatorial')

console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', () => {
    console.log('script está prestes a terminar')
})

const fatorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * fatorial (num - 1)
}

console.log(process.argv)

//console.log(`O fatorial de 5 é igual a ${fatorial(5)}` )