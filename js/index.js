



//calificacion
/*
const boton6 = document.getElementById("btncalificacion");
boton6.addEventListener("click", calificacion);*/
//SUMAR



//crear una variable y constante, se lee el id del boton del html
const boton1 = document.getElementById("btnsumar");
//el boton estara al pendiente cuando el usuario de click y despues realice la funcion
boton1.addEventListener("click", sumar);



function nombre()
//leer variable de los imputs
{
    //la vanumero1 hace referencia a la varible con el id num1  y varnumro1 se convierte en una constante
    const varnumero1 = Number(document.getElementById("btnnom").value);


   //crear variable para guardar resultarlo
    //la varresultado es igual a las valores que se ingresaron en las variables que hacen referncia a los id
    //varresultado es una constante por eso se le const
    const varresultado = varnumero1 + "bienvenido";



   //aqui es donde va el id de donde se va a aprecer el resultado
    const imprimirsumresultado = document.getElementById("resultado1");



  //Imprimir resultado
    imprimirsumresultado.innerText = varresultado;



}




