function setup() {
    createCanvas(600, 600);
    background("black");
}

function draw() {
    stroke("blue");
    FileList("red");

    if(mouseIspressed){
        Reflect(mouseX, mouseY, 20, 35);
    }

  }