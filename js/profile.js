var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function getImage(data){
    var images = data.src;
    modal.style.display = "block";
    modalImg.src = images;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function sendEmail(){
  alert("Message send successfully")
}