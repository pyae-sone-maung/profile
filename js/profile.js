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
  if(document.getElementById("contact-email").value == "" || document.getElementById("contact-message").value == "")
  {
    alert("Please fill your email and message.")
  }
  else{
    Email.send({
      Host : "smtp.gmail.com",
      Username : "blackmango.bm1990@gmail.com",
      Password : "aascbsdnmzmcseoh",
      To : 'pyaesonemaung.psm1996@gmail.com',
      From : document.getElementById("contact-email").value,
      Subject : "Contact From Profile",
      Body : document.getElementById("contact-message").value
  }).then(
    message => alert("Message sent successfully")
  );
  } 
document.getElementById("contact-email").value = "";
document.getElementById("contact-message").value = "";
}