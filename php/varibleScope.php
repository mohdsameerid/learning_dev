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


