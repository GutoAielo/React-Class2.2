//EXAMPLE OF CLOSURE
function IMC() {
  let altura = 1.8
  function calcula() {
    let peso = 70
    console.log('IMC: ' + peso / (altura * altura))
  }
  return calcula
}
let imc = IMC()
//imc()

//EXAMPLE OF CLOSURE ENCAPSULATION
function Carro() {
  this.proprietario = 'Guto'
  let ano = 2020
  this.getAno = function () {
    return ano
  }

  this.setAno = function (a) {
    ano = a
  }
}
let carro = new Carro()

console.log(carro.proprietario) //Guto
console.log(carro.ano) //undefined - closure encapsulated or lexicon scope
console.log(carro.getAno()) //2020
