<?php
include "config.php";

$sql = "DELETE FROM tbSiswa WHERE NIS = 55443325";

$sql = "INSERT INTO tbSiswa (NIS, namaSiswa, tglLahir, noHp, email)
VALUES ('" . $_POST["nis"] . "', '" . $_POST["nama"] . "', '" . $_POST["tglLahir"] . "', '" . $_POST["nohp"] . "' , '" . $_POST["email"] . "');";
echo $sql;

if ( $conn->query( $sql ) === TRUE ) {
    echo "New record created successfully" . "<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql = "SELECT * FROM tbSiswa";
$result = $conn->query( $sql );

echo "<br> <br>" . "<table border='1'>";
echo "<tr><td>NIS</td>  <td>Name</td> <td>Birthday</td> <td>Phone</td> <td>Email</td></tr>";

if ( $result->num_rows > 0 ) {
    // output data of each row
    while ( $row = $result->fetch_assoc() ) {
        echo "<tr><td>" . $row["NIS"] . "</td>  <td> " . $row["namaSiswa"] . "</td> <td>" . $row["tglLahir"] . "</td> <td>" . $row["noHp"] . "</td> <td>" . $row["email"] . "</td></tr>";
    }
} else {
    echo "0 results";
}

echo "</table>" . "<br>";

echo "<a href='$link_address'>Link</a>";
?>