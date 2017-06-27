/* 

    # Mohamed Elshorbagy
    # 26 / 06 / 2017
    # MandelBrot Set 

*/ 
    var constA;
    var constB;
    var angle = 0;
    var r = 0.7885;

function setup() {
  createCanvas(600 , 600);
  pixelDensity(1);
  colorMode(HSB);
}


function draw() {

/* 
  Formula : 
      F(Z) = Z ^ 2 + C 
      F(0) = 0
      F(1) = F(F(0))

      # Every Next Value is Dependent in Value of Pervious Value 

      # MandelBrot Set is a Set of Complex Number  

*/ 

angle += 0.02;

constA = r * cos(angle * 3.125);
constB = r * sin(angle);


// Modifaing the Pixels 
loadPixels();
for(x = 0 ; x < width ; x++) {
  for(y = 0 ; y < height ; y++) {

    // Mapping Canvas from -2 ==> 2
    var a = map(x , 0 , width , -2 , 2);
    var b = map(y , 0 , height , -2 , 2);


    // Controling Shape Between Julia Sets & MandelBrot Sets



    var n = 0;
    while(n < 100) {
      var aSquare = a * a - b * b;
      var constValue = 2 * a * b;

      a = aSquare + constA;
      b = constValue + constB;

      if (abs(aSquare + constValue) > 16) {
        break;
      }
      n++;
    }

// To Control Color of MandelBrot

      var bright = (n * 16) % 360;
      if(n == 100) {
        bright = (n / 100) % 360;

      }


    var pix = (x + y * width) * 4;
    pixels[pix + 0] = bright - 240;
    pixels[pix + 1] = bright - 100;
    pixels[pix + 2] = bright - 100;
    pixels[pix + 3] = 255;

  }
}


updatePixels();


}