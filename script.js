alert("Seja bem-vindo ao nosso jogo!");

// Variável para armazenar o chute do usuário
let qtd;
qtd = prompt("Digite um numero pra fazer a media: ");

let i;
let soma = 0;
for (i = 1; i <= qtd; i++) {
  soma = soma + i;
}
let media = soma / qtd;

alert(`Sua média é: ${media}`);
