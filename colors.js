var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//var swatches = document.getElementsByClassName('swatch');

/*for(var i = 0, n = swatches.length; i < n; i++) {
  swatches[i].addEventListener('click', setSwatch);
}*/

for(var i = 0, n = colors.length; i < n; i++) {
  var swatch = document.createElement('div');  
  swatch.className = 'swatch';   
  swatch.style.backgroundColor = colors[i];   
  swatch.addEventListener('click', setSwatch);   
  document.getElementById('colors').appendChild(swatch);   
}

function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active') [0];
  if(active) {
    active.className = 'swatch';
  }
}
function setSwatch(e) {
  // identify swatch
  var swatch = e.target;
  // sets to the background color of the swatch
  setColor(swatch.style.backgroundColor);
  // give active class
  swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch') [0]});
