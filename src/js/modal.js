const modal = document.querySelector("#modal-container");
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtns = document.getElementsByClassName("close-modal");

// Open modal
openModalBtn.addEventListener("click", openModal);
openModalBtn.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    openModal();
  }
});
function openModal() {
  modal.style.display = "flex";
}

// Close modal
for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", closeModal);
  closeModalBtns[i].addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    closeModal();
  }
});
}
function closeModal() {
  modal.style.display = "none";
}