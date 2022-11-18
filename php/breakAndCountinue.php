<!-- PHP Break and Continue -->

<!-- PHP Break -->
<!-- It was used to "jump out" of a switch statement. -->

<!-- The break statement can also be used to jump out of a loop. -->
<!DOCTYPE html>
<html>
<body>

<?php  
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
}
?>

</body>
</html>

<!-- output  -->
The number is: 0
The number is: 1
The number is: 2
The number is: 3




