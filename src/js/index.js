const emailBtn = document.getElementsByClassName("email-btn");
const emailCopyTxt = document.querySelector("#email-copy-txt");

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

// Keep copyright year up to date
const currentDate = new Date();
document.querySelector("#copyright-text").innerHTML = `© Øystein Røstvik, ${currentDate.getFullYear()}`;
