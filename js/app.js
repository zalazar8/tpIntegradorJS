document.querySelector("#botonCalcular").addEventListener('click',()=>{
    // alert()
    let inputs = document.querySelectorAll("input");
    let descuento = document.querySelector("#inputState").value;
    console.log(inputs);
    let comprador = {
        nombre:inputs[0].value,
        apellido:inputs[1].value,
        correo:inputs[2].value,
        cantidad:inputs[3].value,
    }
    // console.log(descuento);
    calcularValor(descuento, comprador.cantidad, comprador);
});

const calcularValor=(desc,cantEnt, comp)=>{
    let resultado = 0;
    let descuento = 0;
    let numT = document.querySelector("#exampleModalLabel");
    for (let index = 0; index < 8; index++) {
        numT.innerHTML+=crearNumTicket();
    }
    let modal = document.querySelector(".modal-body");
    
    let alert = document.querySelector("#totalCompra");
    if(desc == "estudiante"){
        resultado = (cantEnt * 200)*0.2;
        descuento = (cantEnt * 200)*0.8;
        alert.innerHTML="Total a pagar: $";
        // console.log(resultado);
        alert.innerHTML+=resultado;
    }else if(desc == "trainee"){
        resultado = (cantEnt * 200)*0.5;
        descuento = (cantEnt * 200)*0.5;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else{
        resultado = (cantEnt * 200)*0.85;
        descuento = (cantEnt * 200)*0.15;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }
    modal.innerHTML=`
        <p>Nombre: ${comp.nombre}</p>
        <p>Apellido: ${comp.apellido}</p>
        <p>Correo: ${comp.correo}</p>
        <p>Categoria: ${desc}</p>
        <p>Cantidad de Entradas: ${comp.cantidad}</p>
        <p>Descuento: ${descuento}</p>
        <p>Total a pagar: ${resultado}</p>
    `
}

const crearNumTicket=()=>{
    return Math.floor(Math.random()*9);
    // alert(numAlt);
}
const limpiar=()=>{
    let alert = document.querySelector("#totalCompra");
    alert.innerHTML="Total a pagar: $";
}