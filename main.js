var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');    // gives 2d context

var radius = 10;
var dragging = false;   // says whenever or not our mouse is held down

// makes canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

// whenever the mouse is down it puts a point
var putPoint = function(e) {
  if(dragging) {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);   // full circle
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
}

var engage = function(e) {
    dragging = true;
    putPoint(e);
}

var disengage = function() {
    dragging = false;
    context.beginPath();    // quand on disengage on begin un nouveau path!!
}


// adds addEventListener to canvas attached to event mousedown, mousemove, mouseup
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
