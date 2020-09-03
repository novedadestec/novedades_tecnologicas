function accion(){
    console.log('está funcionando mi boton');
    var ancla = document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}