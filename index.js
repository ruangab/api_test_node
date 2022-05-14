// importando o módulo express para a criação da estrutura da api
const express = require('express')
// instanciando o módulo
const app = express()

// criando a primeira rota
app.get('/', (req, res) =>  {
    res.send('hello world')
})


// rota notificando qual porta esta sendo ouvida
app.listen(8080, () =>{
    console.log('ouvindo a porta 8080')
})