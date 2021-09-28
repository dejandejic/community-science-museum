//hamburger-menu

let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle(".fa fa-bars");
    navbar.classList.toggle('active');
  }
  
  window.onscroll = () =>{
      menu.classList.remove(".fa fa-bars");
      navbar.classList.remove('active');
  }