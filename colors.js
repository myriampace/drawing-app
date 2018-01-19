var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//var swatches = document.getElementsByClassName('swatch');

/*for(var i = 0, n = swatches.length; i < n; i++) {
  swatches[i].addEventListener('click', setSwatch);
}*/

// crée les ronds de couleurs plus vite que de tout taper à la main
for(var i = 0, n = colors.length; i < n; i++) {
  var swatch = document.createElement('div');   // crée des éléments div dans l'index
  swatch.className = 'swatch';    // donne la classe swatch à ces éléments div
  swatch.style.backgroundColor = colors[i];   // donne la couleur de fond aux ronds
  swatch.addEventListener('click', setSwatch);    // associe un événement(fonction) click qui s'appelle setSwatch
  document.getElementById('colors').appendChild(swatch);    // ajoute dans le div colors les swatch qu'on a créée
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
  // set color function sets to the background color of the swatch
  setColor(swatch.style.backgroundColor);
  // give active class
  swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch') [0]});
