function setup() {
  createCanvas(windowWidth, windowHeight);
  background(248, 245, 239);
  angleMode(DEGREES);

  textSize(30);
  textFont('Futura');
  fill("#68321f");
  textAlign(CENTER);
  text('time to get caffeinated and ready for the day!', windowWidth / 2, 60);

  let numeroGlifi = 210;
  let numeroColonne = ceil (sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);

  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 100;

  for(let g = 0; g < numeroGlifi; g++){

    let larghezza = random(30, 45);
    let altezza = random(35, 48);
    let tipoCaffe = floor(random(4)); //la funzione floor() arrotonda per difetto

    miaTazzina(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2,
      larghezza, altezza, tipoCaffe);
      xCorrente = xCorrente + dimColonna;

    if(xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }  
  }
}

function draw() {
}

function miaTazzina(_x, _y, _larghezza, _altezza, _tipoCaffe) {
  push();

  translate(_x, _y);

  // colori del caffè
  let coloreCaffe = color("#68321f");
  let coloreLatte = color(218, 194, 173);
  let coloreSchiuma = color(245, 237, 224);

  // manico della tazzina
  noFill();
  stroke(170);
  strokeWeight(2);
  arc(_larghezza / 2, 0, 18, 22, -90, 90);

  /* arc è una "sezione" di ellisse con 4 parametri.
  i primi due sono x e y, determinano il suo centro.
  gli altri due sono la larghezza e l'altezza dell'ellisse.
  gli ultimi due indicano l'angolo di inizio e fine dell'arco. */

  // corpo della tazza
  stroke(170);
  fill(255, 253, 249);
  rect(
    -_larghezza / 2,
    -_altezza / 2,
    _larghezza,
    _altezza,
    4, 4, 10, 10
  );

  /* dovendo curvare di più gli angoli sotto della tazzina
  non posso mettere solo un quinto parametro, ma devo indicare
  quanto voglio curvare ogni angolo, quindi sono 8 parametri */

  // Contenuto della tazzina
  noStroke();

  if (_tipoCaffe == 0) {
    // espresso
    fill(coloreCaffe);
    rect(-_larghezza / 2 + 2, 0,
     _larghezza - 4, _altezza / 2 - 2,
     0, 0, 8, 8);
     /* qui devo curvare SOLO gli angoli inferiori del rettangolo
      per fare in modo che segua la curva della tazzina, quindi
      i primi due che sono quelli in alto rimangono zero, gli altri
      due (sotto) si curvano quindi il valore sarà >0 */
  } else if (_tipoCaffe == 1) {
    // cappuccino
    fill(coloreCaffe);
    rect(-_larghezza / 2 + 2, 0,
     _larghezza - 4, _altezza / 2 - 2,
     0, 0, 8, 8);

    fill(coloreSchiuma);
    rect(-_larghezza / 2 + 2, -_altezza / 2 + 2,
         _larghezza - 4, _altezza / 3);
  } else if (_tipoCaffe == 2) {
    // latte
    fill(coloreCaffe);
    rect(-_larghezza / 2 + 2, 0,
     _larghezza - 4, _altezza / 2 - 2,
     0, 0, 8, 8);

    fill(coloreLatte);
    rect(-_larghezza / 2 + 2, -_altezza / 2 + 2,
         _larghezza - 4, _altezza * 0.65);
  } else if (_tipoCaffe == 3) {
    // mocaccino
    fill(coloreCaffe);
    rect(-_larghezza / 2 + 2, 0,
     _larghezza - 4, _altezza / 2 - 2,
     0, 0, 8, 8);

    fill(coloreLatte);
    rect(-_larghezza / 2 + 2, -_altezza / 2 + 2,
         _larghezza - 4, _altezza / 2);
  }

  // bordo finale della tazza
  noFill();
  stroke(170);
  rect(
    -_larghezza / 2,
    -_altezza / 2,
    _larghezza,
    _altezza,
    4, 4, 10, 10
  );

  pop();
}