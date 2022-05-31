<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "dbform";
$link_address = "../index.html";

// Koneksi
$conn = new mysqli( $servername, $username, $password, $dbName );

// Cek koneksi

if ( $conn->connect_error ) {
    die( "Connection failed: " . $conn->connect_error );
}
echo "Connected successfully" . "<br>";

//   Cek isi database
/*
$sql = "SELECT * FROM tbSiswa";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
while ($row = $result->fetch_assoc()) {
echo "NIS: " . $row["NIS"] . "<br/>  Name: " . $row["namaSiswa"] . "<br>";
}
} else {
echo "0 results";
} */
?>
