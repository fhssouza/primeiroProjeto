
//importando módulos

const fs = require('fs'); //módulo nativo

let moment = require('moment'); //modulo instalado

const superHerois = require('./superHerois'); //módulo criado pelo usuario

//utilizando os módulos

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8'); //módulo fs

let data = moment().format('MMM do YY'); //módulo moment

console.log(superHerois); //módulo superHerois