$(document).ready(function(){
  $.get("http://localhost/claudia/api/getvalues.php", function(data, status){
      console.log(data);
      dataJson = data[0];
      document.getElementById("jumbotron_title").innerHTML = dataJson.jumbotron_title;
      document.getElementById("jumbotron_subtitle").innerHTML = dataJson.jumbotron_subtitle;
      document.getElementById("jumbotron_color").style.backgroundColor = dataJson.jumbotron_color;
      document.getElementById("jumbotron_color").value = dataJson.jumbotron_color;
      document.getElementById("image1_url").src = dataJson.image1_url;
      document.getElementById("image1_url").value = dataJson.image1_url;
      document.getElementById("image2_url").src = dataJson.image2_url;
      document.getElementById("image2_url").value = dataJson.image2_url;
      document.getElementById("image3_url").src = dataJson.image3_url;
      document.getElementById("image3_url").value = dataJson.image3_url;
      document.getElementById("image1_title").innerHTML = dataJson.image1_title;
      document.getElementById("image2_title").innerHTML = dataJson.image2_title;
      document.getElementById("image3_title").innerHTML = dataJson.image3_title;
      document.getElementById("image1_content").innerHTML = dataJson.image1_content;
      document.getElementById("image2_content").innerHTML = dataJson.image2_content;
      document.getElementById("image3_content").innerHTML = dataJson.image3_content;
      document.getElementById("bottom_container1_title").innerHTML = dataJson.bottom_container1_title;
      document.getElementById("bottom_container2_title").innerHTML = dataJson.bottom_container2_title;
      document.getElementById("bottom_container3_title").innerHTML = dataJson.bottom_container3_title;
      document.getElementById("bottom_container1_content").innerHTML = dataJson.bottom_container1_content;
      document.getElementById("bottom_container2_content").innerHTML = dataJson.bottom_container2_content;
      document.getElementById("bottom_container3_content").innerHTML = dataJson.bottom_container3_content;
  });
});
