
var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

// fonction save image est liée au button save et s'active à l'évenemnt click
function saveImage() {
  var data = canvas.toDataURL();

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      // do our stuff
      var response = request.responseText;
      window.open('download.php?file='+response, '_blank', 'location=0, menubar=o');  // fonction that opens a new window
    }
  }

  request.open('POST', 'save.php', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send('img='+data);

  //window.open(response, '_blank', 'location=0, menubar=o');  // fonction that opens a new window
}
