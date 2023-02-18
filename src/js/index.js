const emailBtn = document.getElementsByClassName("email-btn");
const emailCopyTxt = document.querySelector("#email-copy-txt");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const dropdownMenu = document.querySelector(".socials-mobile");
const dropdownItems = document.getElementsByClassName("dropdown");

/**
 * Copies the email address to the users clipboard when button is clicked
 * Also displays a message to notify the user
 */
function emailCopy() {
    navigator.clipboard.writeText("oysteinrostvik@protonmail.com");
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

/**
 * Open and close dropdown menu
 * Called when the open or close button is clicked 
 * */
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
for (let i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener("click", closeDropdown);
}

// Keep copyright year up to date
const currentDate = new Date();
document.querySelector("#copyright-text").innerHTML = `© Øystein Røstvik, ${currentDate.getFullYear()}`;