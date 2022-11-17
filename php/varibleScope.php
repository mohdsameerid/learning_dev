<!-- Global Scope  -->
<!-- A variable declared outside a function has a GLOBAL SCOPE 
and can only be accessed outside a function -->
<?php
  $text = "Samir"; // global scope 

  function abc(){
    echo "Inside a Function $text";
  }
  abc();
?>



<!-- local scope  -->
<!-- A variable declared within a function has a LOCAL SCOPE 
and can only be accessed within that function -->
<?php
  $text = "Samir";
  function abc(){
    $text = "Apple";
    echo "Inside a function : $text";
  }

  abc();
?>



<!-- PHP The global Keyword -->
<!-- The global keyword is used to access a global variable from within a function.
To do this, use the global keyword before the variables (inside the function) -->
<!-- (Also used for updation like ($y's value)) -->
<?php
  $x = 10;
  $y = 15;
  echo $y; // 15
  function abc(){
    global $x, $y;
    $y = $x + $y;
  }
  abc();
  echo $y; // 25
?>



<!-- $GLOBALS[index] -->
<!-- Also used for updation value  -->
<?php
$x = 5;
$y = 10;

function myTest() {
  $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest();
echo $y; // outputs 15
?>