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




<!-- PHP Continue -->
<!-- The continue statement breaks one iteration (in the loop), 
if a specified condition occurs, and continues with the next iteration in the loop.
 -->
 <!DOCTYPE html>
<html>
<body>

<?php  
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    continue;
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
The number is: 5
The number is: 6
The number is: 7
The number is: 8
The number is: 9