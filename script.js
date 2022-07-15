var navLinks = document.getElementById("nav-links");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}

const scriptURL ="https://script.google.com/macros/s/AKfycbyx0ojD9b3M253m7fBBD2oCc_lOKbZQv9SwSTECrNssaQkk6ncLkvaAYLVvNfp4DhLUhA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You!";
      setTimeout(function(){
        msg.innerHTML = "";
      },5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
