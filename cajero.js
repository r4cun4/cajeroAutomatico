// Desafio 1 : en vez de mostrar en texto los billetes. Crea imagenes y agregalos. Hay que agregarlo al ciclo cuando se estan creando los billetes 
// Desafio 2 : La caja del cajero se empiece a quedar vacia. Sin recargar la pagina cada vez que extraigas dinero que le reste a la variable caja los billetes que colocaste en la variable entregado 
// Desafio 3 : optimiza el codigo

//Creo el Array asociativo imagenes y le cargo las imagenes de los billetes

var imagenes = [];
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";

//Creo la clase Billete 
//Dentro creamos la funcion constructor y dentro le pasamos los valores, el valor y la cantidad 
//Le colocamos por parametro el valor y la cantidad 
//También le creo la imagen y le asocio al parametro valor la ubicacion de la imagen tomando el this.valor

class Billete 
{ 
  constructor(v, c,) 
  { 
    this.valor = v; 
    this.cantidad = c; 
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];//adjunto imagen a cada billete
  } 
} 

//Creamos el Array vacio 
//Ahora le empezamos a hacer push de objetos. Esto lo que hace es agregarle objetos a nuestro Array 
var caja = []; 
//Entregado es un Array. Son los billetes que se le entregan al usuario. 
var entregado = []; 

caja.push( new Billete(50, 10,) ); 
caja.push( new Billete(20, 5,) ); 
caja.push( new Billete(10, 10,) ); 


var dinero = 0; 
var div = 0; 
var papeles = 0; 

//Una vez que el usuario elije la cantidad de dinero. En el momento que se extrae es cuando le da click al boton extraer 
var resultado = document.getElementById("resultado"); 
var b = document.getElementById("extraer"); 
b.addEventListener("click", entregarDinero); 




//La funcion entregarDinero es disparada cuando se le da click a extraer 
//El ciclo for agarra todos los elementos en el array caja y los carga en la var bi por cada iteracion 

function entregarDinero() 
{ 
  var t = document.getElementById("dinero");//guardo en la variable t la caja de texto tomando el id dinero 
  dinero = parseInt(t.value);//convierto el valor de la caja de texto a numero 
  for(var bi of caja)//agarra todos los elementos del array caja y los va a colocar en la variable bi en cada iteracion 
  { 
    if(dinero > 0) 
    { 
      div = Math.floor(dinero / bi.valor);//guardo en la variable div el resultado de la siguiente division :  
      //lo que el usuario solicito sobre la variable iteradora bi asignandole .valor los valores del objeto caja que serian los billetes 
      //100, 50, 20, 10, 5. Por ej en el primera iteracion seria si el usuario ingreso 210. 210 / 50 = 4 billetes 
      //console.log(div); 
      if(div > bi.cantidad)//esta condicional es para no darle billetes de más al usuario. 
      { 
        papeles = bi.cantidad;//hacemos que la cantidad de papeles es igual a la cantidad de billetes disponibles 
      } 
      else 
      { 
        papeles = div; // si la cantidad es menor; guardo en papeles la cantidad de billetes 
      } 
      entregado.push( new Billete(bi.valor, papeles) ); 
      dinero = dinero - (bi.valor * papeles); 
    } 
    console.log(entregado);//me muestra la cantidad de billetes entregados 
  } 
  if(dinero > 0) 
  { 
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :("; 
  } 
  else 
  { 
    for(var e of entregado) 
    { 
      //if(e.cantidad > 0) 
      //{
        for(let i = 0; i < e.cantidad; i++)
        {
          resultado.innerHTML += "<img src=" + e.imagen.src + ">";
          resultado.innerHTML += "<hr />";
        }
                //resultado.innerHTML += "<img src=" + e.imagen.src + ">";
                //resultado.innerHTML += "<hr />";
              //resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />"; 
      //} 
    } 
  } 
} 
