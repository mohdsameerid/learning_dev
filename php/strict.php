<!-- PHP is a Loosely Typed Language -->

<!-- PHP automatically associates a data type to the variable, 
depending on its value. Since the data types are not set in a strict sense, 
you can do things like adding a string to an integer without causing an error. -->

<?php
function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is NOT enabled "5 days" is changed to int(5), and it will return 10
?>

<!-- output -->
10




<!-- In PHP 7, type declarations were added. This gives us an option to specify 
the expected data type when declaring a function, and by adding the
 strict declaration, it will throw a "Fatal Error" if the data type mismatches. -->

 <!-- To specify strict we need to set declare(strict_types=1);. 
 This must be on the very first line of the PHP file.

In the following example we try to send both a number and 
a string to the function, but here we have added the strict declaration:  -->

<?php declare(strict_types=1); // strict requirement

function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is enabled and "5 days" is not an integer, an error will be thrown
?>

<!-- output  -->
PHP Fatal error: