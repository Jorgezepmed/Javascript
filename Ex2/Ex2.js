var vistor = prompt("Whats your name?");
var mensaje = "Hello!" + vistor + ". Welcome to my pages"
mensaje +=  "<br/> We are so glad thar you come by to vivist";       //el <br/> es para dar un salto de linea.
mensaje += vistor + ".  ";         //el += dice que es la variable dicha antes mas lo escrito a continuacion
mensaje += " Plese come again, when you want to leran more"
document.write(mensaje);

var lector_caracters = "Hola" + vistor;
console.log(lector_caracters.length);       // El .length sirve para lerete el numero de caracters que tiene la variable puesta, incluye espacios
console.log(lector_caracters.toLowerCase());        //te hace m inusculas las letras
console.log(lector_caracters.toUpperCase());        //te hace mayusculas las letras
