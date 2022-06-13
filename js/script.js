var navLinks = document.getElementById("nav");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}

$(window).on("scroll",function(){
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else{
    $('nav').removeClass('black');
  }
})


function sendMail() {
  var link = "mailto:sandeepkumarmahato712@gmail.com"
           + "?cc="
           + "&subject=" + encodeURIComponent("")
           + "&body=" + encodeURIComponent(document.getElementById('myText').value)
  ;
  
  window.location.href = link;
}

