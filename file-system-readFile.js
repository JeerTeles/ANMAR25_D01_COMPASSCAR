let {readFile} = require('fs');

readFile("arquivo_readFile.txt", "utf8", (error, texto) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
})