<?php 

$con = mysqli_connect('localhost','root');

if ($con){
    echo "Connection successful";
}else {
    echo "No connection";
}

mysqli_select_db($con, 'foruserdata');

$email = $_POST['email'];
$password = $_POST['password'];
$user = $_POST['user'];

$query = " insert into userlogindata( `email`, `password`, `username`) values ('$email','$password','$user', current_timestamp()";

echo $query;

mysqli_query($con, $query);


header('location:index.html');


?>