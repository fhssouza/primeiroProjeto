let nome = 'Scooby';
let idade = 7;
let gostaDeComer = true;

const cachorro = JSON.stringify([{
    nome,
    idade,
    gostaDeComer}]);


console.log(cachorro);

//module.exports = cachorro