let particulas = [];

class Particula {
  constructor() {
    this.posX = random(width);
    this.posY = random(height);
    this.velX = random(-5, 10);
    this.velY = random(-10, 2);
    this.tamano = random(-20, 10);
    this.color = color(20, random(100, 255), random(100, 255), 200); // Color con algo de transparencia
  }

  // Actualizar la posición de la partícula
  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    // Movimiento hacia el mouse, suavizado
    let distanciaX = mouseX - this.posX;
    let distanciaY = mouseY - this.posY;

    this.posX += distanciaX * 0.01;
    this.posY += distanciaY * 0.01;

    // Asegurarse de que las partículas se mantengan dentro de la pantalla
    if (this.posX > width) this.posX = 0;
    if (this.posX < 0) this.posX = width;
    if (this.posY > height) this.posY = 0;
    if (this.posY < 0) this.posY = height;
  }

  // Dibujar la partícula
  display() {
    noStroke();
    fill(this.color);
    circle(this.posX, this.posY, this.tamano);
  }
}

function setup() {
  let miCanvas = createCanvas(windowWidth, windowHeight);
  miCanvas.parent("#my-p5-sketch");

  // Crear varias partículas
  for (let i = 0; i < 100; i++) {
    particulas.push(new Particula());
  }
}

function draw() {
  // Fondo con transparencia para que el rastro permanezca por unos segundos
  background(0, 20); // Negro con alfa bajo (20) para dejar un rastro

  // Dibujar y actualizar las partículas
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
}

// function setup() {
//   let miCanvas = createCanvas(windowWidth, windowHeight);
//   miCanvas.parent("#my-p5-sketch");
// }
// function draw() {
//   background(0, 245, 180);
// }
