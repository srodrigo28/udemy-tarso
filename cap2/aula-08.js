/** Save file */

const fs = require('fs')

fs.writeFile(process.argv[2], process.argv[3], (error) => {
    if (error) throw error
    console.log(`Arquivo ${process.argv[2]} foi salvo com sucesso.`)
})

/**
 * Comando usado 
 * node aula-08.js hello.text "hello world" 
 */