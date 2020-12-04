const axios = require("axios");
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const _ = require('lodash')
const chalk = require('chalk');
let j = 1
let guardar =[]
let row = ''
axios
.get("https://randomuser.me/api/?results=10")
.then((data) => {
const info = data.data.results;
    _.partition(info, (n) => {
    usuarios(n)
    })
})
.catch((e) => {
console.log(e);
});

function usuarios(n){
    const nombre = n.name.first
    const apellido = n.name.last
    const consulta = {
        fecha: moment().format('MMMM Do YYYY'),
        hora: moment().format('hh:mm:ss'),
        ID: uuidv4().slice(0, 6),
        }
    const usuario = `${j}. Nombre: ${nombre} - Apellido: ${apellido} - ID: ${consulta.ID} - Timestamp: ${consulta.fecha}, ${consulta.hora}`
    guardar.push(usuario)
    j = j+1
    console.log(chalk.blue.bgWhite.bold(usuario))
    if (j == 11){
    _.partition(guardar, (n) => {
        row = row + `<li>${n}</li>`
        })
        console.log(row)
    }
}