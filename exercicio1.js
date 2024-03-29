let number1 = Number(prompt('Digite o primeiro número'))
let number2 = Number(prompt('Digite o segundo número'))

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let rest = number1 % number2

alert(`A soma de ${number1} e ${number2} é igual a: ${sum}`)
alert(`A subtração de ${number1} e ${number2} é igual a: ${sub}`)
alert(`A multiplicação de ${number1} e ${number2} é igual a: ${mult}`)
alert(`A divisão de ${number1} e ${number2} é igual a: ${div}`)
alert(`O resto da divisão de ${number1} e ${number2} é igual a: ${rest}`)


if (sum % 2 == 0) {
  alert('A soma dos números é par')
} else {
  alert('A soma dos números é impar')
}


if (number1 == number2) {
  alert('Os números são iguais')
} else {
  alert('Os números não são iguais')
}




