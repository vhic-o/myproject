//get the div  for the ham hurget menu
const HamburgerMenu = document.getElementById("hamB");
//event lisntern to  notify when is clicked
HamburgerMenu.onclick= function togglemenu(){
    const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}