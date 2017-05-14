<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maindb";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  //Receive the RAW post data.
  $content = trim(file_get_contents("php://input"));

  //Attempt to decode the incoming RAW post data from JSON.
  $decoded = json_decode($content, true);

  //If json_decode failed, the JSON is invalid.
  if(!is_array($decoded)){
      throw new Exception('Received content contained invalid JSON!');
  }

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$jmb_title = $decoded["jumbotron_title"];
$jmb_subtitle = $decoded["jumbotron_subtitle"];
$jmb_color = $decoded["jumbotron_color"];
$section_title = $decoded["section_title"];
$section_header = $decoded["section_header"];
$image1_url = $decoded["image1_url"];
$image2_url = $decoded["image2_url"];
$image3_url = $decoded["image3_url"];
$image1_title = $decoded["image1_title"];
$image2_title = $decoded["image2_title"];
$image3_title = $decoded["image3_title"];
$image1_content = $decoded["image1_content"];
$image2_content = $decoded["image2_content"];
$image3_content = $decoded["image3_content"];
$bottom_container1_title = $decoded["bottom_container1_title"];
$bottom_container2_title = $decoded["bottom_container2_title"];
$bottom_container3_title = $decoded["bottom_container3_title"];
$bottom_container1_content = $decoded["bottom_container1_content"];
$bottom_container2_content = $decoded["bottom_container2_content"];
$bottom_container3_content = $decoded["bottom_container3_content"];

$sql = "UPDATE page_style
SET jumbotron_title ='$jmb_title',
 jumbotron_subtitle ='$jmb_subtitle',
 jumbotron_color = '$jmb_color',
 image1_url ='$image1_url',
 image2_url ='$image2_url',
 image3_url ='$image3_url',
 image1_title ='$image1_title',
 image2_title ='$image2_title',
 image3_title ='$image3_title',
 image1_content ='$image1_content',
 image2_content ='$image2_content',
 image3_content ='$image3_content',
 bottom_container1_title ='$bottom_container1_title',
 bottom_container2_title ='$bottom_container2_title',
 bottom_container3_title ='$bottom_container3_title',
 bottom_container1_content ='$bottom_container1_content',
 bottom_container2_content ='$bottom_container2_content',
 bottom_container3_content ='$bottom_container3_content'
WHERE id=1";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
}
?>
