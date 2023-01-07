const animado=document.querySelectorAll('.animado');
let titulo=document.querySelectorAll('.titulo');


let imagenes=["./img/b1.jpg","./img/b2.jpg","./img/b3.jpg"]
var contador=0;


function carrusel(){
    contador++;
    if(contador>=3){
        contador=0;
    }
    document.getElementById('imgf').setAttribute("src",imagenes[contador]);
    setTimeout(carrusel,7000);
}

let c=0;

function carruselt(){

    titulo[c].classList.remove('activo');
    c++;

    if(c>=titulo.length){
        c=0;
    }

    titulo[c].classList.add('activo');

    setTimeout(carruselt,7000);
}

let animadoh1=document.querySelectorAll('.animadoh1');
let animadoh2=document.querySelectorAll('.animadoh2');
let animadop1=document.querySelectorAll('.animadop1');
let animadop2=document.querySelectorAll('.animadop2');

function arriba(){
    if(titulo[c].classList.contains("activo")){
        animadoh1[c].classList.add('animando');
        animadoh2[c].classList.add('animando2');
        animadop1[c].classList.add('animando3');
        animadop2[c].classList.add('animando4');
    }

    setTimeout(arriba,7000);

};





document.body.setAttribute("onload","carrusel();carruselt();arriba()");


