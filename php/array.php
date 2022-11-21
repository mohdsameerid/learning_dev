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

<!-- Loop Through an Indexed Array
To loop through and print all the values of an indexed array, you could use a for loop, like this: -->

<!-- Example -->
<?php
$cars = array("Volvo", "BMW", "Toyota");
$arrlength = count($cars);

for($x = 0; $x < $arrlength; $x++) {
  echo $cars[$x];
  echo "<br>";
}
?>





<!-- PHP Associative Arrays -->
<!-- Associative arrays are arrays that use named keys that you assign to them.

There are two ways to create an associative array:  -->

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

or:

$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";

<!-- The named keys can then be used in a script: -->

<!-- Example -->
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>


<!-- Loop Through an Associative Array
To loop through and print all the values of an associative array, you could use a foreach loop, like this: -->

<!-- Example -->
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>



<!-- PHP - Multidimensional Arrays -->
<!-- A multidimensional array is an array containing one or more arrays. -->

<!-- take a look at the following table: -->

Name	    Stock	Sold
Volvo	    22	    18
BMW	        15	    13
Saab	    5	    2
Land Rover	17	    15
We can store the data from the table above in a two-dimensional array, like this:

$cars = array (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);

<!-- Now the two-dimensional $cars array contains four arrays, 
and it has two indices: row and column.

To get access to the elements of the $cars array we must 
point to the two indices (row and column): -->

<?php
echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";
?>