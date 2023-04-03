

//1. Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo//
let numero1 = 5
let numero2= 2
if ( numero1 > numero2 ){
    console.log(true)
}
//2. Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
if (numero1 === numero2){
    console.log()
}

//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.//

function maximo (num1, num2){
    if (num1 > num2){
      console.log(num1);
    } else if (num2 > num1) {
      console.log(num2)
    }else if(num1===num2){
        console.log(num1 +" y "+ num2 + " son iguales")
    }
  }
//4 Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.
function minimo (num1, num2, num3){
    if(num1 < num2 && num1 <num3){
        return (num1) 
    }else if( num2 < num1 && num2 < num3){
        return(num2) 
    } else if (num3 < num1 && num3 < num2){
        return(num3)
    }
} 
 // 5. Realizar un programa que dado 2 objetos representando personas con las propiedadesnombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
  let persona1 ={
    nombre : "Lucas",
    edad: 20, 
    altura:170
  }
  let persona2 = {
    nombre: "Martin",
    edad:50,
    altura: 190
  }

  function personas(persona1, persona2){
    if(persona1.altura > persona2.altura){
        return persona1
    }else if (persona2.altura > persona1.altura){
        return persona2
    }else if(persona1.edad > persona2.edad){
        return persona1
    }else if(persona2.edad > persona1.edad){
        return persona2
    } 
  }
  //6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
//y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
//una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
//mínimo.
let nombre = prompt("Ingresa tu nombre")
let edad= prompt("ingresa tu edad")
let altura = prompt("ingresa tu altura")
let vision = prompt("ingresa tu nivel de visión")

  
  if ( edad < 18){
    alert("Debes ser mayor de 18 para continuar")
  } else if (altura <= 150 ){
    alert("Debes medir más de 150cm")
    
  }else if( vision < 8 ){
    alert("Con una visión menor a 8 no estás capacitado para conducir")
  }

  //7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
    //o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
    //mismo nombre tienen ingreso libre así como también los que posean un pase vip,
    //mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
    //caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
    //mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
    //afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
    //de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
    //caso contrario a no querer comprar, mostrar mensaje de despedida.
    let pase = prompt("Pase vip o normal?")
    let compraPase= "si"
    let dineroDisponible = prompt("Cuúanto dinero tienes?")
    let siTieneEntrada = prompt("Tiene entrada?")
    if (nombre=== "Lucas" || pase === "vip"){
      alert("Bienvenido, pase.")
    }else if( siTieneEntrada === "si"){
      prompt("Desea utilizarla?")
      alert("Bienvenido, pase.")
    }
    if( nombre!= "Lucas"|| pase != "vip"|| siTieneEntrada != "si"){
      prompt("Desea comprar una entrada o pase?")
    }
    if (dineroDisponible >= 1000){
      alert("Compra exitosa! Bienvenido")
    }else if (dineroDisponible<=1000){
      alert("no puedes realizar la compra")
    }else{
      alert("Hasta luego!")
    }

    //.8 Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
//llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
//deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
//guardar en una variable llamada numeroIngresado, y en cada intento deberás
//mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
//intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
//adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
//usas mucho código repetido, mas adelante veraz como realizar este juego de manera
//mas eficiente.
let numeroIncognita = Math.floor(Math.random()* 10 )+ 1;
let intentos = 3
let numeroIngresado = prompt("Ingresa un numero entre 1 y 10")
if(numeroIngresado === numeroIncognita ){
  alert("¡Has ganado!"); 
}else if (numeroIngresado > numeroIncognita){
  alert("El numero es mayor al solicitado, vuelve a intentarlo")
  
    
  
}

   //9 Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años),
   // un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje 
   //preguntando si en realidad tiene esa edad.
  
  if (edad >0 && edad < 12){
    alert( "Eres un infante")
  }else if(edad >13 && edad < 18){
    alert("Eres adolescente")
  }else if (edad > 19 && edad< 45){
    alert("eres un mayor joven")
  }else if(edad >= 100){
    alert("¿De verdad tienes esa edad?")
  }
  /* 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa.*/
let jugadorUno = prompt("Piedra, Papel, o tijera?")
let jugadorDos = prompt("Piedra, papel, o tijeras?")
if( jugadorUno === "Piedra" && jugadorDos === "tijeras" || jugadorUno=== "Papel" && jugadorDos=== "tijeras" || jugadorUno==="tijera"&& jugadorDos==="papel"){
  alert("Jugador uno, has ganado")
} else if ( jugadorDos==="Piedra" && jugadorUno==="tijera"|| jugadorDos==="papel"&& jugadorUno==="tijera"|| jugadorDos=== "tijeras"&& jugadorUno==="Papel"){
  alert("Jugador dos, has ganado.")

}else{
  alert("¡Trampa!")
}

/*11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color,
Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo:
El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente
elección, no lo teníamos pensado.*/
let color = prompt("Ingresa un color")
switch(color){
  case "blanco":
    case "negro":
      alert("Falta de color")
      case "verde":
        alert("El color  de la naturaleza ")
        case "azul":
          alert("El color del agua")
          case "amarillo":
            alert("El color del sol")
            case "rojo":
              alert( "El color dle fuego")
              case "marron":
                alert("El color de la tierra")
                break
                default:
                  alert("Excelente elección, no lo teníamos pensado")
      
}

/*12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0.*/
let num1 = prompt("INGRESA UN NUMERO")
let num2 = prompt ("INGRESA OTRO NUMERO")
switch(num1, num2){
  case"suma":
  let resultado = num1+ num2
  alert("esta suma da como resultado"+ resultado)
  break;
  case "resta":
  let resultadoDos = num1-num2
  alert("esta resta da como resultado"+ resultadoDos)
  break;
  case "multiplicacion":
    let resultadoTres= num1*num2
    alert("Esta multiplicacion da como resultado"+resultadoTres)
    break;
    case "division":
      let resultadoCuatro = num1 % num2 
      alert("Esta division da como resultado"+ resultadoCuatro)
}
/*13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes*/
let documento = prompt("Ingrese su numeo de documento")
alert(documento)
let correctos = prompt("Son correctos los datos mostrados anteriormente?")
if(correctos === "Si"){
  let dni= {
    numero : documento,
    registro:"exitoso"
  }
  console.table(dni)
}