const menu=document.getElementById('menu');
const cerrarnav=document.getElementById('cerrarnav');
const navegador=document.querySelector('.nav');

menu.addEventListener('click',()=>{
    navegador.classList.add('abrirnavegador');
});

cerrarnav.addEventListener('click',()=>{
    navegador.classList.remove('abrirnavegador');
});

const lista=document.querySelectorAll('.lista');
const flechar=document.getElementById('flechar');
const flechal=document.getElementById('flechal');

let a=0;

flechar.addEventListener('click',()=>{
    lista[a].classList.add('animandonav');
    if(a==0){
        lista[a].classList.remove('ac');
        lista[a+1].classList.add('ac');
    }
    a++;
});

flechal.addEventListener('click',()=>{
    if(a==1){
        lista[a].classList.remove('ac');
        lista[a-1].classList.add('ac');
    }
    a--;
});