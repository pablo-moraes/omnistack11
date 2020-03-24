const routes  = require('./routes'); 
const express = require('express');

const cors = require('cors');
//Para não entender como um pacote usa o ./ no início

const app = express();


app.use(cors());
app.use(express.json()); // Para indicar que está retornando o corpo em um json
app.use(routes);

app.listen(3333);