let resultado = 1;
let num = +prompt("Digite um número");

while (num > 1) {
    resultado = resultado + num;
    num = num - 1;
}
console.log(resultado);

const quantidadeTermos = +prompt("Digite a quantidade de termos da sequencia")
const sequencia = [0, 1];
let i = 2;

do {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 1];
    i + i + i;
}
while (i < quantidadeTermos)
console.log(sequencia);
