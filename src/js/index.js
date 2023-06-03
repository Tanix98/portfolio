const emailBtn = document.getElementsByClassName('email-btn');
const emailCopyTxt = document.querySelector('#email-copy-txt');

/**
 * Copies the email address to the users clipboard when button is clicked
 * Also displays a message to notify the user
 */
function emailCopy() {
    navigator.clipboard.writeText('oysteinrostvik@protonmail.com');
    emailCopyTxt.classList.toggle('hidden');
    emailCopyTxt.style.display = 'flex';
    setTimeout(() => {
        emailCopyTxt.classList.toggle('hidden');
    }, '1300');
    emailCopyTxt.classList.add('mystyle');
}
for (i = 0; i < emailBtn.length; i++) {
    emailBtn[i].addEventListener('click', emailCopy);
}

// Create divider over every post after the first one
/*const projectDiv = document.querySelector("#projects-container");
for (let i = 1; i < projects.length; i++) {
  projectDiv.innerHTML += "<hr>";
}*/

// Reverse order of every other project
const projects = document.getElementsByClassName('project');
for (let i = 1; i < projects.length; i += 2) {
    projects[i].classList.add('reverse');
}

// Keep copyright year up to date
const currentDate = new Date();
document.querySelector(
    '#copyright-text'
).innerHTML = `© Øystein Røstvik, ${currentDate.getFullYear()}`;
