var lineas_HTML = prompt("Cuantas lineas de HTML tienes?");
lineas_HTML = parseInt(lineas_HTML) + 10;    //Es lo mismo que lineas_HTML += 100;  Se pone el parseInt para que convierta de string a number
console.log(lineas_HTML);
var lineas_CCS = prompt("Cuantas lineas de CCS tienes?");
lineas_CCS = lineas_CCS * .25;      //Lo mismo que [ lineas_CCS *= 5;] y asi sucesivamente
console.log(lineas_CCS);
//Nan = not a number
var total;
total = (lineas_HTML)+ parseInt(lineas_CCS);  //Se pone el parseInt para que convierta de string a number el CCS ya que lo giarda como nombre
alert(total);
var flo;
flot = lineas_HTML + parseFloat(lineas_CCS);
alert(flot);
