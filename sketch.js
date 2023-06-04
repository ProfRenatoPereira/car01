//Passo a passo
//Na aula 01, geram-se as seguintes imagens: estrada na tela de fundo, atores e carrinhos. Passos de 01 a 4.

//1º criar uma pasta para imagens no ambiente "arquivos do Esboço" e carregar as imagens. de mesma forma, carregar os sons.

//2º gerar variáveis: imagem da estrada estrada, imagem do ator e imagens dos carros.

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

//3º criar a função para carregar a imagem da estrada

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator1.png");
  imagemDoCarro = loadImage("imagens/carro1.png")
}
 // Função setup, creatCanvas gera a área do jogo.

function setup() {
  createCanvas(500, 400);
}

//4º Carregar na função Draw a imagem da estrada na tela de fundo.

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor,100, 366, 30, 30);
  image(imagemDoCarro, 400, 40, 50, 40);
}