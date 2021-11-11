// La composizione è ispirata al poster tipografico di Sabina Oehninger
// url : https://www.typographicposters.com/posters/neubad/6015d340974fef73e4f24d9f

// L'idea proviene dalla lettura del seguente articolo
// url : https://www.frizzifrizzi.it/2020/09/14/7-volumi-di-tavole-mineralogiche-dell800-diventano-un-sito-interattivo-e-un-poster/

// il designer Nicholas Rougeux ha progettato il sito d'ispirazione
// url : https://www.c82.net/mineralogy/

let bg;
let newCursor;
let helvetica;

// array immagini
let planet;
let planetsFile = new Array();

// array suoni
let track;
let tracksFile = new Array();

function preload() {
  bg = loadImage("./assets/background.png");
  planet = loadJSON("./planets.json");
  track = loadJSON("./songs.json");

  newCursor = loadImage("./assets/cursor.png");

  helvetica = loadFont("assets/HelveticaNeueLTProBd.otf");

  soundFormats("mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);

  // cursore
  noCursor();

  // creo loop per array immagini
  for (let i = 0; i < planet.planets.length; i++) {
    planetsFile[i] = loadImage("./assets/img/" + planet.planets[i]);
  }

  // creo loop per array suoni
  for (let i = 0; i < track.songs.length; i++) {
    tracksFile[i] = loadSound("./assets/tracks/" + track.songs[i]);
  }

  imageMode(CENTER);
}

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;

function draw() {
  noStroke();
  fill(0);
  rect(530, 25, 525, 60);

  noStroke();
  fill(0);
  rect(510, 756, 575, 60);

  fill(255);
  textFont(helvetica, 40);
  textAlign(CENTER);
  text("CHOOSE YOUR PLANET, ", 800, 70);
  text("LISTEN TO ITS OWN MUSIC", 800, 800);

  // IMPOSTO I PIANETI
  // creo due immagini dall'array sovrapposte,
  // sotto c'è l'immagine in B/N sopra quella a colori,
  // invisibile per via della variabile posta uguale a 0.

  // Belafonte
  image(planetsFile[8], 750, 640, planetsFile[8].width, planetsFile[8].height);

  image(
    planetsFile[0],
    750,
    640,
    planetsFile[0].width / a,
    planetsFile[0].height / a
  );

  // Earth
  image(planetsFile[9], 500, 440, planetsFile[9].width, planetsFile[9].height);

  image(
    planetsFile[1],
    500,
    440,
    planetsFile[1].width / b,
    planetsFile[1].height / b
  );

  // Four Tops
  image(
    planetsFile[10],
    1450,
    640,
    planetsFile[10].width,
    planetsFile[10].height
  );

  image(
    planetsFile[2],
    1450,
    640,
    planetsFile[2].width / c,
    planetsFile[2].height / c
  );

  // BobM
  image(
    planetsFile[11],
    1350,
    270,
    planetsFile[11].width / 1.1,
    planetsFile[11].height / 1.1
  );

  image(
    planetsFile[3],
    1350,
    270,
    planetsFile[3].width / (1.1 * d),
    planetsFile[3].height / (1.1 * d)
  );

  // Prince
  image(
    planetsFile[12],
    150,
    290,
    planetsFile[12].width,
    planetsFile[12].height
  );

  image(
    planetsFile[4],
    150,
    290,
    planetsFile[4].width / e,
    planetsFile[4].height / e
  );

  // Blur
  image(
    planetsFile[13],
    800,
    240,
    planetsFile[13].width,
    planetsFile[13].height
  );

  image(
    planetsFile[5],
    800,
    240,
    planetsFile[5].width / f,
    planetsFile[5].height / f
  );

  // Laura
  image(
    planetsFile[14],
    250,
    640,
    planetsFile[14].width,
    planetsFile[14].height
  );

  image(
    planetsFile[6],
    250,
    640,
    planetsFile[6].width / g,
    planetsFile[6].height / g
  );

  // Rolling
  image(
    planetsFile[15],
    1100,
    590,
    planetsFile[15].width,
    planetsFile[15].height
  );

  image(
    planetsFile[7],
    1100,
    590,
    planetsFile[7].width / h,
    planetsFile[7].height / h
  );

  push();
  image(newCursor, pmouseX, pmouseY, 40, 40);
  pop();
}

// MOUSECLICKED --> parte la canzone

// ho avuto problemi con l'evento click:
// nel momento in cui si seleziona un'immagine a tutte le altre
// si applica il filtro.

function mouseClicked() {
  let dBelafonte = dist(750, 640, mouseX, mouseY);
  if (dBelafonte < 100) {
    tracksFile[0].play();
    a = 1;
  } else {
    tracksFile[0].stop();
  }

  let dEarth = dist(mouseX, mouseY, 500, 440);
  if (dEarth < 100) {
    tracksFile[1].play();
    b = 1;
  } else {
    tracksFile[1].stop();
  }

  let dFourTops = dist(mouseX, mouseY, 1450, 640);
  if (dFourTops < 100) {
    tracksFile[2].play();
    c = 1;
  } else {
    tracksFile[2].stop();
  }

  let dBobM = dist(mouseX, mouseY, 1350, 270);
  if (dBobM < 100) {
    tracksFile[3].play();
    d = 1;
  } else {
    tracksFile[3].stop();
  }

  let dPrince = dist(mouseX, mouseY, 150, 290);
  if (dPrince < 100) {
    tracksFile[4].play();
    e = 1;
  } else {
    tracksFile[4].stop();
  }

  let dBlur = dist(mouseX, mouseY, 800, 240);
  if (dBlur < 100) {
    tracksFile[5].play();
    f = 1;
  } else {
    tracksFile[5].stop();
  }

  let dLaura = dist(mouseX, mouseY, 250, 640);
  if (dLaura < 100) {
    tracksFile[6].play();
    g = 1;
  } else {
    tracksFile[6].stop();
  }

  let dRolling = dist(mouseX, mouseY, 1100, 590);
  if (dRolling < 100) {
    tracksFile[7].play();
    h = 1;
  } else {
    tracksFile[7].stop();
  }
}
