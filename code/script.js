// THEME 
const switcher = document.querySelector('.theme-switch');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

switcher.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
// THEME

// BURGER BTN
const burgerBtn = document.querySelector('.burger-menu_lines'),
    burgerBtnWrapper = document.querySelector('.burger-menu_wrapper'),
    navTest = document.querySelector('.nav-menu');

burgerBtnWrapper.onclick = () => {
    burgerBtn.classList.toggle('burger-menu_lines-active')
    navTest.classList.toggle('nav-menu-active');
    // Modal.classList.toggle('modal_active')
    // ModalBody.classList.toggle('modal-body_active')
};
// BURGER BTN

// MODAL BG 
// const
//     ModalCross = document.querySelector('.modal-content-cross'),
//     ModalBtnGank = document.querySelector('.burger-menu_wrapper'),
//     Modal = document.querySelector('.modal'),
//     ModalContent = document.querySelector('.modal-content'),
//     ModalBodyActive = document.querySelector('.modal-body_active'),
//     ModalBody = document.querySelector('.modal-body'),
//     ModalBG = document.querySelector('.modal-bg'),
//     body = document.body;

// ModalBG.onclick = () => {
//     Modal.classList.remove('modal_active'),

// };
// ModalBtnGank.addEventListener('click', (e) => {
// 	disableScroll();
// });
// let disableScroll = function () {
// 	document.body.classList.add('disable-scroll');
// }
// ModalBG.addEventListener('click', (e) => {
// 	enableScroll();
// });
// let enableScroll = function () {
//     document.body.classList.remove('disable-scroll');
// }
// MODAL BG


// ZOOM SAVE
// function saveZoomLevel() {
//     const zoomLevel = window.devicePixelRatio; 
//     localStorage.setItem('zoomLevel', zoomLevel);
// }

// window.addEventListener('resize', saveZoomLevel);

// function applySavedZoomLevel() {
//     const savedZoomLevel = localStorage.getItem('zoomLevel');
//     if (savedZoomLevel) {
//         document.body.style.transform = scale({savedZoomLevel});
//         document.body.style.transformOrigin = '0 0'; 
//     }
// }

// applySavedZoomLevel();
// ZOOM SAVE

// THEME 
// const switcher = document.querySelector('.theme-switch');
// switcher.addEventListener('click', () => {
//     const currentTheme = document.body.getAttribute('data-theme');
//     document.body.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
// });
// THEME 