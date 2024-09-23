function setup() {
  createCanvas(400, 400);
  background(173, 216, 230); // Cor de fundo azul claro
}

function draw() {
  // Base do boneco de neve
  fill(255); // Branco
  ellipse(200, 300, 150, 150); // Posição (200, 300), diâmetro 150

  // Meio do boneco de neve
  ellipse(200, 200, 100, 100); // Posição (200, 200), diâmetro 100

  // Cabeça do boneco de neve
  ellipse(200, 120, 70, 70); // Posição (200, 120), diâmetro 70

  // Olhos
  fill(0); // Preto
  ellipse(185, 110, 10, 10); // Olho esquerdo
  ellipse(215, 110, 10, 10); // Olho direito

  // Nariz de cenoura
  fill(255, 165, 0); // Laranja
  triangle(200, 120, 200, 130, 220, 125); // Posições dos vértices do triângulo

  // Boca
  stroke(0); // Preto
  strokeWeight(2);
  line(190, 130, 210, 130); // Linha horizontal
  line(195, 135, 205, 135); // Linha vertical

  // Botões
  ellipse(200, 240, 10, 10); // Primeiro botão
  ellipse(200, 260, 10, 10); // Segundo botão

  // Braços
  stroke(0); // Preto
  strokeWeight(3);
  line(160, 200, 100, 150); // Braço esquerdo
  line(240, 200, 300, 150); // Braço direito
}