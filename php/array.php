<!-- Array -->
<!-- In PHP, there are three types of arrays: -->

<!-- Indexed arrays - Arrays with a numeric index
Associative arrays - Arrays with named keys
Multidimensional arrays - Arrays containing one or more  -->


<!-- Get The Length of an Array - The count() Function
The count() function is used to return the length (the number of elements) of an array: -->

<!-- Example -->
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
?>
// 3





<!-- PHP Indexed Arrays
There are two ways to create indexed arrays:

The index can be assigned automatically (index always starts at 0), like this: -->

$cars = array("Volvo", "BMW", "Toyota");
or the index can be assigned manually:

$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";

<!-- The following example creates an indexed array named $cars, assigns three elements to it, and then prints a text containing the array values: -->

<!-- Example -->
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>