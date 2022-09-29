//vamos a reusar cesar
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];

let key="";

//vienvenidos a interpretar codigo
$(document).ready(function(){
    //funcion para cifrar con viggenere
    $('#ci').click(function(){
        //para cifrar vamos a usar una funcion de modulo la cual es y = (x+z)mod27

        //traer los datos de la llave
        key = document.getElementById('llave').value;
        //verificar llave
        key = key.replace(/ /g,'');

        //traer los datos del mensage
        let mess = document.getElementById('mess').value;
        //verificar mensage
        mess = mess.replace(/ /g,'');
        
        let newMess="";
        let keyCompleta="";

        //para aplicar el algoritmo se debe crear funcion que rebice las condiciones del mismo
        if(revision(mess, key)){
            //vamos primero por aplicar y obtener la posicion de la longitud del mensaje y emparejarlo contra la llave

            for(var i=0;i<mess.length;i++){
                //emparejo conforme a la posicion de caracter obteniendo el numero de dicha posicion
                keyCompleta+=key.charAt((i%Number(key.length)));
            }
            alert(keyCompleta);

            //tengo que volver a recorrer el mensaje para obtener caracteres y posiciones
            for(var i=0;i<mess.length;i++){
                //obtener la posicion de la letra
                let charr=mess.charAt(i);
                //debemos crear una funcion para obtener la posicion de ese caracter
                let posm=getPosicion(charr);

                //tambien aplicarlo a la llave
                charr=keyCompleta.charAt(i);
                //obtenemos la posicion
                let posk=getPosicion(charr);

                //tenemos que ejecutar el cifrado
                let newValores=cifrado(posm, posk);

                newMess+=abc[newValores];
            }

            //imprimir el resultado
            document.getElementById('rs').value=newMess;
      }else{
        alert("ñyo cirve jeje");
      }
    });
    //descifrar
    $('#de').click(function(){
        //para cifrar vamos a usar una funcion de modulo la cual es y = (x+z)mod27

        //traer los datos de la llave
        key = document.getElementById('llave').value;
        //verificar llave
        key = key.replace(/ /g,'');

        //traer los datos del mensage
        let mess = document.getElementById('mess').value;
        //verificar mensage
        mess = mess.replace(/ /g,'');
        
        let newMess="";
        let keyCompleta="";

        //para aplicar el algoritmo se debe crear funcion que rebice las condiciones del mismo
        if(revision(mess, key)){
            //aplicar y obtener poscicion de la longitud del mensaje y emparejarlo contra la llave
            for(var i=0 ; i<mess.length ; i++){
                //emparejo conforme la pocicion obteniendo el numero de dicha posicion
                keyCompleta += key.charAt((i%Number(key.length)));
            }
            alert(keyCompleta);
            //tengo que volver a recorrer el mensage para optener caracteres y pociciones
            for(var i=0 ; i<mess.length ; i++){
                //obtener pocicion de la letra
                let charr = mess.charAt(i);
                //funcion para obtener la pocicion del caracter
                let posm = getPosicion(charr);
                //aplicar lo mismo a la llave
                charr = keyCompleta.charAt(i);
                //obtenemos la posicion
                let posk= getPosicion(charr);
                //ejecutar el cifrado
                let newValores = descifrar(posm, posk);

                newMess += abc[newValores];
            }
            //imprimir resultado
            document.getElementById('rs').value = newMess;
        }else{
            //no se cumple
            alert("ño sirve jeje")
        }
    });
});

//funcion de cambio o cifrado
function cifrado(poss,posk){
    //aplicar la formula
    let y=(poss + posk)%27;
    return y;
}

//funcion de descifrado descifrar
function descifrar(poss,posk){
    let val = 0;

    if((poss-posk) >= 0){
        //todo bien wiiiiiiiiiii
        val = (posm + posk)%27;
    }else{
        val = (posm - posk + 27)%27
    }
    return val;
}

//funcion de la posicion
function getPosicion(letra){
    let posicion = abc.indexOf(letra);
    return posicion;
}

//funcion de revicion
function revision(mess, key){
    //primero hay que validar la entrada de los dato a partir de una revision regular

    var expresion = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;

    var aceptado=true;

    //evaluar la expresion
    if(!expresion.test(mess)){
        alert("el texto que ingresó no ha sido aceptado, ingrese solo minusculas y evite números y simbolos");
        aceptado=false;
    }
    //evaluar la expresion
    if(!expresion.test(key)){
        alert("la clave ingresada es incorrecta, no cumple con las normas de solo minusculas y no de usar numero y/o simbolos");
        aceptado=false;
    }
    if(key.length>mess.length){
        alert("la llave no puede ser mayor que el mensaje");
        aceptado=false;
    }
    return aceptado;
}
