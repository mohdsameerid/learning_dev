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