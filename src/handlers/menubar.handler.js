// // #region Full screen Overlay Navigation
// //reference https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
// //show overlay menu bar from left to right with animation
// function openNav() {}
// //hide overlay menu bar from right to left with animation
// function closeNav() {}
// function toggleBox() {
//   // toggle between classes => show or hidden with fade effect
//   document.querySelector('.navbar-btn-box').classList.toggle('change');
// }
// // #end region

export const openNavbar = (event) => {
  document.getElementById('overlay_navbar').style.width = '100%';
};
export const closeNavbar = (event) => {
  document.getElementById('overlay_navbar').style.width = '0%';
};
