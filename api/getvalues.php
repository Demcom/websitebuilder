<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maindb";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM page_style";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $resArray = array();
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $resArray [] = $row;
    }
    echo json_encode(utf8ize($resArray));
} else {
    echo "0 results";
}
$conn->close();

function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}

?>
