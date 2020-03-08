// Funcion con JQUERY para intercambiar entre el login de inicio de sesion y registro.
$(document).ready(function(){
    $(".form-registro").hide();

   $(".btn-inicio").click(function(){
       $(".form-registro").hide("linear");
       $(".form-inicio").show("swing");
   });

   $(".btn-registro").click(function(){
    $(".form-inicio").hide("linear");
    $(".form-registro").show("swing");
   });

   $(".reg").click(function(){
    $(".form-inicio").hide("linear");
    $(".form-registro").show("swing");
   })
   //Funcion con JQUERY para mostrar la pagina principal una vez nos logueamos.

   $(".btn-entrar").click(function(){
    let user = document.querySelector('#user').value;
    let pass = document.querySelector('.form-inicio .pass').value;
    console.log(user.value)
       if(pass == '1234'){

        if (typeof(Storage) !== "") {
            localStorage.setItem('Nombre', user);
            localStorage.setItem('Pass', pass);
          } else {
            console.log('Lo sentimos, tu navegador no soporta localStorage')
          }
          location.href='html/principal.html';
       }else{
           alert('El usuario o la contraseña son incorrectos.')
       }

   })
   $(".exit").click(function(){
       localStorage.clear();
       location.href='../index.html'
   })
});
// Detectamos cuando el usuario desplace la pantalla
window.onscroll = function() {
let nav = document.getElementById('barra-menu');
    if(window.scrollY > 600 ){
    nav.style.cssText = 'background-color: black';
    }
    if(window.scrollY < 600){
        nav.style.cssText = 'background-color: none';
    }
  };
//Cargar la variable del localstorage en pantalla
function carga(){
    $('#let').prepend('Bienvenido '+ localStorage.getItem('Nombre'));
}
function comprobarToken(){
  console.log(localStorage.getItem('Nombre'))
  if(localStorage.getItem('Nombre') != null){
    location.href='html/principal.html';
  }
}
