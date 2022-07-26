const express = require('express');
const app = express();

const { v4: uuidv4 } = require('uuid')

app.use(express.json())

/**
 * Account Requeriments:
 * CPF - string
 * name - string
 * id - uuid
 * statement - []
 */

const costumers = [];

app.post('/account', (req, res)=>{
    const { name, cpf } = req.body;
    const id = uuidv4();

    costumers.push({
        cpf,
        name,
        id,
        statement: []
    })

    res.status(201).send()
})

app.listen(3333, ()=> console.log('Backend running on!'));