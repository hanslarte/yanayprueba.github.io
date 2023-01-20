

let animadoScroll=document.querySelectorAll('.scroll-animado');

let animado=document.querySelectorAll('.scroll-animadoc');


window.addEventListener("scroll",()=>{

    /*if(animadoScroll.offsetTop>animadoScroll.offsetTop-window.scrollY){
        animadoScroll.style.opacity=1;
        animadoScroll.classList.add('mostrarArriba');
       }*/
    let scrolltopi=document.documentElement.scrollTop;

    for(var i=0;i<animadoScroll.length;i++){

        let alturaanimada=animadoScroll[i].offsetTop;
        if(alturaanimada-500<scrolltopi){
            animadoScroll[i].style.opacity=1;
            animadoScroll[i].classList.add('mostrarArriba');
        }

    }




});

