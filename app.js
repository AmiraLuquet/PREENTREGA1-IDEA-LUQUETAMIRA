//CONOCER EL RESULTADO DEL DESCUENTO COMPRANDO 2 PARES DE ZAPATILLAS///
let valor1;
let marca1;
let marca2;
let valor2;
let promocion;
let i;

function suma(a , b) {
    return a + b ;
    
}
do {
    marca1 = prompt("¿Cual es la primera zapatillas que eliges? Elige entre topper, converse, salomon y ringo")
    if (marca1=='topper') {
        valor1=12500
    } else {
        if (marca1=='converse') {
            valor1=13900
        } else {
            if (marca1=='salomon') {
                valor1=28490
            } else {
                if (marca1=='ringo') {
                    valor1=19950
                }
            }
        }
    }
    marca2 = prompt("¿Cual es la segunda zapatillas que eliges? Elige entre topper, converse, salomon y ringo")
    if (marca2=='topper') {
        valor2=12500
    } else {
        if (marca2=='converse') {
            valor2=13900
        } else {
            if (marca2=='salomon') {
                valor2=28490
            } else {
                if (marca2=='ringo') {
                    valor2=19950
                }
            }
        }
    }

    const resultado = suma(valor1 , valor2);
    alert("su compra es de ///// " + resultado + "y con su descuento termina pagando = " + ((resultado*30)/100))
    promocion = prompt("¿Quieres seguir comprando con un descuento del 30%? si para continuar/no para salir")
    if (promocion != 'no') {
        i++
    } else {
        i=0
    }
    
} while (i!=0);





