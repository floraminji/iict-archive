let headX = 250;
let headY = 200;
let headSpeedX = 0;
let headSpeedY = 0;
let flying = false; 
 
let swordHole = 0; // 이번에 칼이 꽂힌 구멍 번호 (1~3)
let flyRoll = 0;   // 머리가 날아갈지 (1이면 날아감)
 
let hole1X = 170; let hole1Y = 300;
let hole2X = 250; let hole2Y = 340;
let hole3X = 330; let hole3Y = 300;
 
function setup() {
  createCanvas(500, 500);
}
 
function draw() {
  background(220, 240, 255);
 
  // 머리가 날아가는 중이면 위치를 조금씩 바꾼다
  if (flying == true) {
    headX = headX + headSpeedX;
    headY = headY + headSpeedY;
  }
 
  
  noStroke();
  fill(120, 80, 40);
  ellipse(250, 420, 200, 50);
 
  fill(180, 130, 70);
  rect(150, 220, 200, 200);
 
  stroke(150, 105, 55);
  line(190, 220, 190, 420);
  line(250, 220, 250, 420);
  line(310, 220, 310, 420);
  noStroke();
 
 
  fill(70, 45, 20);
  ellipse(250, 220, 200, 50);
  noFill();
  stroke(150, 105, 55);
  ellipse(250, 220, 190, 42);
  noStroke();
 
  fill(30, 20, 10);
  circle(hole1X, hole1Y, 30);
  circle(hole2X, hole2Y, 30);
  circle(hole3X, hole3Y, 30);
 
  
  fill(230, 180, 140);
  circle(headX - 38, headY + 6, 16);
  circle(headX + 38, headY + 6, 16);
 
  fill(255, 210, 170);
  circle(headX, headY, 80);
 
  fill(230, 190, 40);
  circle(headX - 40, headY + 18, 8);
 
  fill(190, 30, 30);
  rect(headX - 42, headY - 34, 84, 24);
 
  triangle(headX - 14, headY - 34, headX + 14, headY - 34, headX, headY - 54);
 
  triangle(headX + 38, headY - 30, headX + 60, headY - 18, headX + 34, headY - 8);
 
  fill(255);
  circle(headX - 20, headY - 22, 5);
  circle(headX, headY - 22, 5);
  circle(headX + 20, headY - 22, 5);
 
 fill(255);
  circle(headX + 16, headY - 2, 12);
  fill(0);
  circle(headX + 18, headY - 2, 6);
 
  stroke(20);
  line(headX - 15, headY - 10, headX + 40, headY - 24);
  line(headX - 15, headY + 6, headX + 40, headY + 16);
  noStroke();
  fill(20);
  circle(headX - 15, headY - 2, 20);
 
 
  triangle(headX - 8, headY + 22, headX + 8, headY + 22, headX, headY + 36);
 
  fill(180);
  if (swordHole == 1) {
    rect(hole1X - 5, hole1Y - 35, 10, 35);
  }
  if (swordHole == 2) {
    rect(hole2X - 5, hole2Y - 35, 10, 35);
  }
  if (swordHole == 3) {
    rect(hole3X - 5, hole3Y - 35, 10, 35);
  }
}
 

function mousePressed() {
  if (flying == false) {
    swordHole = int(random(1, 4)); // 1~3 중 랜덤으로 칼이 꽂힐 구멍 결정
    flyRoll = int(random(1, 4));   // 1~3 중 랜덤 숫자 뽑기
 
    if (flyRoll == 1) { // 1이 나오면 (1/3 확률) 머리가 날아간다
      flying = true;
      headSpeedX = random(-2, 2);
      headSpeedY = random(-8, -5);
    }
  }
}
 
function keyPressed() {
  flying = false;
  swordHole = 0;
  flyRoll = 0;
  headX = 250;
  headY = 200;
  headSpeedX = 0;
  headSpeedY = 0;
}
 