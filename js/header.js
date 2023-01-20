let imagenes=['../imagenes/imagenes-principal/b1.jpg','../imagenes/imagenes-principal/b2.jpg','../imagenes/imagenes-principal/b3.jpg'];

let contador=-1;

function carruselFondo(){

    contador++;

    
    if(contador>=3){
        contador=0;
    }

    document.getElementById('fondoimagen').setAttribute("src",imagenes[contador]);

    setTimeout(carruselFondo,5000);

}

let contentTitulos=document.querySelectorAll('.content-titulos');
let padre=document.querySelector('.main-titulos');

let cantidad=-1;

function cambioTitulos(){

    cantidad++;

    if(cantidad>=3){
        cantidad=0;
    }
    let titulo=contentTitulos[cantidad];
    
    if(!padre.lastElementChild.classList.contains('oculto')){
        padre.lastElementChild.classList.add('oculto');
        titulo.classList.add('animando');
        padre.firstElementChild.classList.remove('oculto');
    }

    if(titulo.classList.contains('oculto')){
        titulo.classList.remove('oculto');
        titulo.classList.add('animando');
        titulo.previousElementSibling.classList.add('oculto');
    }


    setTimeout(cambioTitulos,5000);
}



document.body.setAttribute("onload","carruselFondo();cambioTitulos()");