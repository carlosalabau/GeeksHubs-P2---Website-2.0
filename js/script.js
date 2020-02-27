// Detectamos cuando el usuario desplace la pantalla
window.onscroll = function() {
let nav = document.getElementById('barra-menu');
console.log(nav)
    if(window.scrollY > 600 ){
    nav.style.cssText = 'background-color: black';
    }
    if(window.scrollY < 600){
        nav.style.cssText = 'background-color: none';
    }
  };
    
