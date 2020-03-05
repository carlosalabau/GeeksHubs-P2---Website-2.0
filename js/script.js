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
       if($('.pass').val() == '1234'){
            $('#login').hide('linear');
            $("#principal").show('swing');
            $("#let").prepend('Bienvenido '+$('.user').val());
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem('Nombre', $('.user').val());
                sessionStorage.setItem('Pass', $('.pass').val());
              } else {
                console.log('Lo sentimos, tu navegador no soporta localStorage')
              }
       }else{
           alert('El usuario o la contraseña son incorrectos.')
       }
   })
   $(".exit").click(function(){
       sessionStorage.clear();
       $('#principal').hide('linear');
        $("#login").show('swing');
   })
});
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


