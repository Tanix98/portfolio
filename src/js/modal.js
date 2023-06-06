const modal = document.querySelector('#modal-container');
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtns = document.getElementsByClassName('close-modal');

// Open modal
openModalBtn.addEventListener('click', openModal);
openModalBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        openModal();
    }
});
function openModal() {
    modal.style.display = 'flex';
}

// Close modal
for (let i = 0; i < closeModalBtns.length; i++) {
    closeModalBtns[i].addEventListener('click', closeModal);
    closeModalBtns[i].addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            closeModal();
        }
    });
}
function closeModal() {
    modal.style.display = 'none';
}

// Keep age up to date, either adds one or two to the current year and sets the modal's first paragraph text
function setModalFirstParagraph() {
    const currentDateFull = new Date();
    const currentMonth = currentDateFull.getMonth() + 1;
    const currentDay = currentDateFull.getDate();
    const dayMonth = `${currentMonth}.${currentDay}`;
    const dayMonthNumber = Number(dayMonth);
    const birthDate = Number(9.25);
    function isBefore() {
        return dayMonthNumber < birthDate;
    }
    const yearString = JSON.stringify(currentDateFull.getFullYear());
    const currentYear = Number(yearString.substring(2, 4));
    if (isBefore()) {
        const myAge = currentYear + 1;
        document.querySelector(
            '#first-paragraph'
        ).innerHTML = `Hello, I’m a ${myAge} year old front-end dev from Tromsø 👋`;
    } else {
        const myAge = currentYear + 2;
        document.querySelector(
            '#first-paragraph'
        ).innerHTML = `Hello, I’m a ${myAge} year old front-end dev from Tromsø 👋`;
        console.log('hello');
    }
}
setModalFirstParagraph();
