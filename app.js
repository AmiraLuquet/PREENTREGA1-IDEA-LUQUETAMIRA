//AGREGAR PRODUCTOS A UN CARRITO, MOSTRAR LA CANTIDAD DEL PRODUCTO SELECCIONADO, LA SUMA DE LA CANTIDAD POR PROUCTO Y LA SUMA DE TODOS
// LOS PRODUCTOS EN TOTAL DEL CARRITO DE COMPRA///
const zapatillas = [
    {nombre: "topper", precio:12500},
    {nombre: "converse", precio:13900},
    {nombre: "salomon", precio:28490},
    {nombre: "ringo", precio:19950},
];


let carrito = []
let selection = prompt("hola desea comprar algunas de nuestras zapatillas si o no")

while(selection != "si" && selection != "no"){
    alert ("por favor ingresa si o no")
    selection = prompt("hola desea comprar algo si o no")
}


if (selection == "si"){
    alert("a continuacion nuestra lista de calzados, APRETE ENTER")
    let todaslasZapatillas=zapatillas.map(
        (zapatilla) => zapatilla.nombre + " " + "$" + zapatilla.precio 
    );
    alert(todaslasZapatillas.join(" - "))
} else if (selection == "no"){
    alert("gracias por venir, saludos!!!")
}


while(selection != "no"){
    let zapatilla = prompt("agrega un calzado a tu carrito, ESCRIBIR LA MARCA")
    let precio = 0

    if (zapatilla == "topper" || zapatilla == "converse" ||  zapatilla == "salomon" ||  zapatilla == "ringo"){
        switch(zapatilla){
            case "topper":
                precio = 12500
                break;
             case "converse":
                precio = 13990
                break;
            case "salomon":
                 precio = 28490
                 break;
             case "ringo":
                precio = 19950
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({zapatilla, unidades , precio})
        console.log(carrito)

    }else {
        alert("no tenemos ese producto")
    }

    selection = prompt("desea seguir comprando? SI O NO")

    //SE MOSTRARA CON LA CONSOLA//
    while(selection === "no"){
        alert("gracias por la compra, nos vemos!")
        carrito.forEach((carritoFinal) => {
            console.log (`zapatilla: ${carritoFinal.zapatilla} , unidades: ${carritoFinal.unidades} , total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })

    break;
    }


}

//SE MOSTRARA POR LA CONSOLA EL TOTAL A PAGAR DE TODOS LOS PRODUCTOS JUNTOS//
const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades , 0)
console.log(`el total a pagar por su compra es: ${total}`)
