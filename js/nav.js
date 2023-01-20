const abrir=document.getElementById('abrirNav');
const cerrar =document.getElementById('cerrar');
const nav=document.querySelector('.nav');

const entrar=document.getElementById('entrar');
const regresar=document.getElementById('regresar');

const entrarTienda=document.getElementById('entrarTienda');
const salirTienda=document.getElementById('salirTienda');

abrir.addEventListener('click',()=>{
    nav.classList.add('abrir-nav');
});

cerrar.addEventListener('click',()=>{
    nav.classList.remove('abrir-nav');
});

entrarTienda.addEventListener('click',()=>{
    entrar.classList.remove('listaizquierda');
    regresar.classList.add('listaderecha');
});

salirTienda.addEventListener('click',()=>{
    regresar.classList.remove('listaderecha');
    entrar.classList.add('listaizquierda');
});

