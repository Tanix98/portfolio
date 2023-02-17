const emailBtn = document.querySelector(".email-btn");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const dropdownMenu = document.querySelector(".socials-mobile");
const dropdownItems = document.getElementsByClassName("dropdown");

/**
 * Copies the email address to the users clipboard when button is clicked
 */
function emailCopy() {
    navigator.clipboard.writeText("oysteinrostvik@protonmail.com");
    alert("Email copied!");
}
emailBtn.addEventListener("click", emailCopy);

/**
 * Every time the page gets clicked, checks the clicked elements id and either opens or closes the dropdown menu
 * Does nothing if the clicked element has no id or wrong id
 */
document.addEventListener("click", function (e) {
  if (e.target.getAttribute('id') == "open-btn") {
    for (let i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].style.display = "block";
    }
    openBtn.style.display = "none";
    dropdownMenu.style.backgroundColor = "#855BB8";
    console.log("open");
  }
  if (e.target.getAttribute('id') == "close-btn") {
    for (let i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].style.display = "none";
    }
    openBtn.style.display = "block";
    dropdownMenu.style.backgroundColor = "";
    console.log("open");
  }
});
