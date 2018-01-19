<?php
// got file
$file = $_GET['file'];
// told php it's an image
header('Content-type: image/png');
// told php it's an attachement
header("Content-disposition: attachement; filename=canvasoutput.png");
// spit out file
readfile($file);

 ?>
