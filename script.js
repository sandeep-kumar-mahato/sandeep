var navLinks = document.getElementById("nav-links");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxzrjKyI3XuxrjX5thFS2B_raMa1xetbHzs-P0RidwiyKoDofrLBHR7hb3R5viPRnZP/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
