<?php
if(!session_id()) session_start();
?>
<!doctype html public "-//W3C//DTD HTML 4.0 //EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <?php include('matbhead.php'); ?>
  <script src="swissarmy.js" type="text/javascript"></script>

<script src="slideshow.js" type="text/javascript"></script>
</head>
<body>
<div id="templatemo_container">
      <div id="templatemo_content">
        <div id="templatemo_gallery">
          </br>
        <h1>Gallery of Hope</h1>
        <p>These wonderful art works have been created by people attending Meals @ the bridge
 and the community arts project Ozanam House
        </p>
     </div>
<div id="show"><script type="text/javascript">new inter_slide(slideShow)</script></div>

    </div>
    <?php include("footer.php"); ?>
</div>
</body>
</html>