const axios = require("axios");
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
let usuarios = []


for (let i = 1; i < 8; i++){
axios
.get("https://randomuser.me/api/")
.then((data) => {
const info = data.data.results;
const nombre = info[0].name.first
const apellido = info[0].name.last
const consulta = {
    fecha: moment().add(10000, 'days').format('MMM Do YY'),
    ID: uuidv4(),
    }
const usuario = `${i}. Nombre: ${nombre} - Apellido: ${apellido} - ID: ${consulta.ID} - Timestamp: ${consulta.fecha}`
usuarios.push(usuario)
if(i == 7){
console.log('resultado:')
console.log(chalk.blue.bgWhite.bold(_.partition(usuarios, (n) => n)))
}
})
.catch((e) => {
console.log(e);
});
}

// /nodemon index.js