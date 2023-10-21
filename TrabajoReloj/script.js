const deg = 6;

const horas = document.querySelector(".hora");/*traen y guardan lo que pase*/
const minutos = document.querySelector(".minuto");
const segundos = document.querySelector(".segundo");

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg;
    let seg = tiempo.getSeconds()*deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
})

function calcularTiempo(){
    let tiempo /*Variable*/= new Date(); /*hora local del sistema*/
    let hora = tiempo.getHours()-12;
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let franja= hora <12 ? `${('')}PM` : `${('')}AM`;
    
    minuto = minuto <10 ? "0" + minuto:minuto;
    segundo = segundo<10 ? "0"+ segundo:segundo;
    
    let pantallaReloj = hora +  ":" + minuto + ":" + segundo + franja;/*Concatenar*/
    let relojDigital = document.querySelector(".reloj");/*Guardar*/
    relojDigital.innerHTML = pantallaReloj;/*Insertar HTML, para que la info sea enviada*/
}

setInterval(calcularTiempo, 1000)
/*Llamar función y actualizar cada 1000 milisegundos*/


