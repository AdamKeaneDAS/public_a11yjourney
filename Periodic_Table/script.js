const openButton = document.querySelector('[data-open-modal]')
const closeButton = document.querySelector('[data-close-modal]')
const modal = document.querySelector('[data-modal]')

openButton.addEventListener('click', () => {
    modal.classList.add('open')
})

openButton.addEventListener('click', () => {
    modal.classList.remove('open')
})

