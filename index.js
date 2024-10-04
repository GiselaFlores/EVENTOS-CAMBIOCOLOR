const btn = document.querySelector("button");

//toque el botón y cambie de color el fondo

//Pasos:
//función que permita cambiar el color
//un generador de colores rgb(255 255 255)
// con el color ya armado edvuelvo el color a la acción (al click del botón)

//random() devolverme un número cualquiera entre 0 y <1


function randomColor(number){
    return Math.floor(Math.random()*(number +1))
}

/*
console.log(randomColor(255));
console.log(randomColor(255));
console.log(randomColor(255));
console.log(randomColor(255));
*/

btn.addEventListener("click", ()=>{
    const color = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`; //rgb(123, 56, 89);
    document.body.style.backgroundColor = color;
});