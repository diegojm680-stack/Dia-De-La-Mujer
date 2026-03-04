function dibujarGrafica(canvasId, datos, etiquetas){

let canvas = document.getElementById(canvasId);
let ctx = canvas.getContext("2d");

let baseY = 250;
let anchoBarra = 120;
let escalaMaxima = 100; // ahora trabajamos con porcentajes
let alturaMaxima = 200; // altura visual máxima de la gráfica

ctx.font = "16px Arial";

for(let i=0;i<datos.length;i++){

let x = 150 + i*200;
let altura = (datos[i]/escalaMaxima)*alturaMaxima;

ctx.fillStyle="#8e24aa";

ctx.fillRect(x, baseY-altura, anchoBarra, altura);

ctx.fillStyle="white";
ctx.textAlign="center";

/* texto centrado dentro de la barra */

ctx.fillText(etiquetas[i], x + anchoBarra/2 , baseY - altura/2);

/* numero arriba de la barra */

ctx.fillStyle="black";
ctx.fillText(datos[i] + "%", x + anchoBarra/2 , baseY-altura-10);

/* escala lateral */

/* Escala lateral en porcentaje */

ctx.textAlign="right";
ctx.fillStyle="black";

for(let j=0;j<=100;j+=20){

let y = baseY - (j/escalaMaxima)*alturaMaxima;
ctx.fillText(j + "%", 90, y);

}

}

}

dibujarGrafica("grafica1",[52,48],["Mujeres","Hombres"]);

dibujarGrafica("grafica2",[75,45],["Hombres","Mujeres"]);

let ultimoScroll = 0;
const menu = document.querySelector("nav");

window.addEventListener("scroll", function(){

if(window.innerWidth <= 768){

let scrollActual = window.pageYOffset;

if(scrollActual > ultimoScroll){
menu.classList.add("ocultar");
}else{
menu.classList.remove("ocultar");
}

ultimoScroll = scrollActual;

}

});