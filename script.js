let button = document.getElementById("share_icon");
let icon = document.querySelector(".fa-share");
let social = document.getElementById("social_hide");

button.onclick = function () {
  if (social.style.display !== "none") {
    social.style.display = "none";
  } else {
    social.style.display = "unset";
  }
};
