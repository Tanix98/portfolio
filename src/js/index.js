const emailBtn = document.getElementsByClassName("email-btn");
const emailCopyTxt = document.querySelector("#email-copy-txt");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const dropdownMenu = document.querySelector(".socials-mobile");
const dropdownItems = document.getElementsByClassName("dropdown");

/**
 * Copies the email address to the users clipboard when button is clicked
 * Also display a message to notify the user
 */
function emailCopy() {
    navigator.clipboard.writeText("oysteinrostvik@protonmail.com");
    /*emailCopyTxt.style.display = "flex";
    setTimeout(() => {
      emailCopyTxt.style.display = "none";
    }, "2500")*/
    emailCopyTxt.classList.toggle("hidden");
    emailCopyTxt.style.display = "flex";
    setTimeout(() => {
      emailCopyTxt.classList.toggle("hidden");
    }, "1300")
    emailCopyTxt.classList.add("mystyle");
}
for (i = 0; i < emailBtn.length; i++) {
  emailBtn[i].addEventListener("click", emailCopy);
}

/**
 * Every time the enter button gets pressed when an element is focused, checks the clicked elements id and either opens or closes the dropdown menu
 * Does nothing if the clicked element has no id or wrong id
 */
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("email-btn")) {
    emailCopy();
  }
  if (e.key === "Enter" && e.target.getAttribute('id') == "open-btn") {
    openDropdown();
  }
  if (e.key === "Enter" && e.target.getAttribute('id') == "close-btn") {
    closeDropdown();
  }
});

function openDropdown() {
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].style.display = "block";
  }
  openBtn.style.display = "none";
  dropdownMenu.style.backgroundColor = "#855BB8";
  dropdownMenu.style.boxShadow = "0px 0px 3px 1px rgba(0,0,0,0.25)";
}
function closeDropdown() {
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].style.display = "none";
  }
  openBtn.style.display = "block";
  dropdownMenu.style.backgroundColor = "";
  dropdownMenu.style.boxShadow = "";
}

openBtn.addEventListener("click", openDropdown);
closeBtn.addEventListener("click", closeDropdown);

// Keep copyright year up to date
const copyrightText = document.querySelector("#copyright-text");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
copyrightText.innerHTML = `© Øystein Røstvik, ${currentYear}`;