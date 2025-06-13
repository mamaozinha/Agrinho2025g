function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Desenha o campo
  desenhaCampo(0, 0, width / 2, height);

  // Desenha a cidade
  desenhaCidade(width / 2, 0, width / 2, height);

  // Desenha a conexão entre a cidade e o campo
  desenhaConexao(width / 2, height / 2);
}

function desenhaCampo(x, y, largura, altura) {
  // Desenha o céu
  fill(135, 206, 235); // Azul claro
  rect(x, y, largura, altura / 2);

  // Desenha a grama
  fill(34, 139, 34); // Verde escuro
  rect(x, y + altura / 2, largura, altura / 2);
}

function desenhaCidade(x, y, largura, altura) {
  // Desenha prédios
  fill(192, 192, 192); // Cinza
  rect(x + 20, y + altura / 4, 50, altura / 2);
  rect(x + 80, y + altura / 8, 50, altura / 4 * 3);
  rect(x + 140, y + altura / 2, 50, altura / 4);
}

function desenhaConexao(x, y) {
  // Desenha uma linha que conecta a cidade e o campo
  stroke(0); // Preto
  line(x, y, x, height);
}