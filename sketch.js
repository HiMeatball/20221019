function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0); //背景黑色
  stroke(255) //框線顏色(255為白色)
  noFill() //不要充滿顏色
  rectMode(CENTER) //以方框中心點為座標點

  for(var i=0;i<(width/50);i=i+1){ //i++等於i=i+1
    for(var j=0;j<(width/50);j++){
    ellipse(100+(i*200),100+(j*200),200+mouseX/10) //在座標(100,100)畫一個直徑200的圓
    stroke("#ccd5ae")
    rect(100+(i*200),100+(j*200),200) //方框座標
    stroke('#e9edc9')
    ellipse(50+(i*200),50+(j*200),25+mouseY/5)
    stroke(255)
    }
  }
}