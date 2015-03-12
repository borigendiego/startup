$(document).ready(function() {
  

    var canvas = document.getElementById('canvasAPI');
        ctx = canvas.getContext('2d');

  function drawCircle() {
    var centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        radius = 90;

    ctx.beginPath();
    ctx.arc(290, 160, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#2EFE2E"; //Color de la figura
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#424242";
    ctx.stroke();
  }

  function drawTriangle() {
    ctx.fillStyle="#58FAF4"; //Color de la figura
    ctx.beginPath(); 
    ctx.moveTo(100,200);
    ctx.lineTo(50,80);
    ctx.lineTo(200,110);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  drawCircle();
  drawTriangle();

  function drawRectangle() {
    ctx.beginPath();
    ctx.rect(x, y, 70, 50);
    ctx.fillStyle = "#045FB4";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  var x = 0;
      y = 15;
      speed = 4;

  
  setTimeout(function animate() { //Funcion usando setTimeout
     
    reqAnimFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.ooRequestAnimationFrame ||
    window.setTimeout(animacion, 5000) ||
    window.msRequestAnimationFrame;

    reqAnimFrame(animate);
    x += speed;
    if(x <= 0 || x >= 600) {
      speed = -speed;
    }
    drawRectangle(); 
  }, 3000);

    
  animate();

});