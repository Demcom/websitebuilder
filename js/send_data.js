
$(document).ready(function(){
  console.log("doc ready")

});

function getInfo(){
  var jsonObj = {};
  jsonObj.jumbotron_title = $("#jumbotron_title").text();
  jsonObj.jumbotron_subtitle = $("#jumbotron_subtitle").text();
  jsonObj.jumbotron_color = $("#jumbotron_color").val();
  jsonObj.section_title = $("#section_title").text();
  jsonObj.section_header = $("#section_header").text();
  jsonObj.image1_url = $("#image1_url").val();
  jsonObj.image2_url = $("#image2_url").val();
  jsonObj.image3_url = $("#image3_url").val();
  jsonObj.image1_title = $("#image1_title").text();
  jsonObj.image2_title = $("#image2_title").text();
  jsonObj.image3_title = $("#image3_title").text();
  jsonObj.image1_content = $("#image1_content").text();
  jsonObj.image2_content = $("#image2_content").text();
  jsonObj.image3_content = $("#image3_content").text();
  jsonObj.bottom_container1_title = $("#bottom_container1_title").text();
  jsonObj.bottom_container2_title = $("#bottom_container2_title").text();
  jsonObj.bottom_container3_title = $("#bottom_container3_title").text();
  jsonObj.bottom_container1_content = $("#bottom_container1_content").text();
  jsonObj.bottom_container2_content = $("#bottom_container2_content").text();
  jsonObj.bottom_container3_content = $("#bottom_container3_content").text();
  var sendJson = JSON.stringify(jsonObj)
  $.ajax({
              url: '../api/setvalues.php',
              type: 'POST',
              success: function (data) {
                  alert(data);
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
              },
              data: sendJson
          });
  // $.get("../api/setvalues.php", function(data, status){
  //     alert("Data: " + data + "\nStatus: " + status);
  // });

  console.log(jsonObj);

}
