'use strict';

const modalEl = document.querySelector('.modal')
const overlayEl = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.close-modal')

const showModalBtnList = document.querySelectorAll('.show-modal')

function showModal() {
  modalEl.classList.remove('hidden')
  overlayEl.classList.remove('hidden')
}

function hideModal() {
  modalEl.classList.add('hidden')
  overlayEl.classList.add('hidden')
}

for(let i = 0; i < showModalBtnList.length; i++) {
  showModalBtnList[i].addEventListener('click', () => {
    showModal()
  })
}

closeModalBtn.addEventListener('click', () => {
  hideModal()
})

document.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.key === 'Escape') {
    hideModal()
  }
})