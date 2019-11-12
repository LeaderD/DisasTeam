<?php

include 'DBConfig.php';

$connection = mysqli_connect($HostName, $DatabaseName, $DatabaseUsername, $DatabasePassword);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

//populate values from JSON to store into variables
$name = $obj['name'];
$email = $obj['email'];
$password = $obj['password'];

//checks if email exists
$CheckSQL = "SELECT * FROM users WHERE email - '$email'";
//executes SQL Query
$check mysqli_fetch_array(mysqli_query($connection,$CheckSQL));

if(isset($check)){
    $EmailExistMSG = "Account already exists, log in or use a different email!";
    $EmailExistJson = json_encode($EmailExistMSG);

    echo $EmailExistJson;
} else {
    //creates SQL query and inserts values into table
    $sql_Query = "INSERT INTO users (name, email, password) values ('$name','$email','$password')";

    if(mysqli_query($con,$Sql_Query)){
        //this will happen if the user is registered
        $okmsg = "You've been registered!";
        $json = json_encode($okmsg);

        echo $json;
    } else {
        echo 'Try again';
    }
}
mysqli_close($connection);

?>