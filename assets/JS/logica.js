
let totalGastos = 0;
let id = 0;
let arrayGastos = [];
let totalPresupuesto = 0;
let arrayPresupuesto = [];


const getId = () => {
    id++;
    return id;
}

const getGastoObj = (nombre, cantidad) => {
    const NewGasto = {
        id: getId(),
        nombre: nombre,
        cantidad: parseInt(cantidad)
    }
    return JSON.parse(JSON.stringify(NewGasto));
}



const addGastoTabla = (Gasto) => {
    const tbody = document.getElementById('tcontenido');
    tbody.innerHTML += `<tr id="elemento${Gasto.id}">
        <td>${Gasto.id}</td>
        <td>${Gasto.nombre}</td>
        <td>${Gasto.cantidad}</td> 
        <td>
            <a href="#" onclick="borrarGasto(${Gasto.id})"><i class="bi bi-trash-fill"></i></a>
        </td>
    </tr> `;
}


const inputGasto = () => {
    let gastoNombre = document.getElementById("nombreInput").value;
    let gastoCantidad = document.getElementById("cantidadInput").value;

    let Gasto = getGastoObj(gastoNombre, gastoCantidad);
    console.log('Gasto:', Gasto);

    totalGastos += Gasto.cantidad;
    console.log('totalGastos:', totalGastos);

     let presupuestoPresupuesto = document.getElementById("presupuestoInput").value;
  

    arrayGastos.push(Gasto);
    
    console.log('arrayGastos:', arrayGastos);

    document.getElementById('despliegaTotal').innerText = totalGastos;
   document.getElementById("despliegaTotal1").innerText = presupuestoPresupuesto-totalGastos;
    
    
    

    addGastoTabla(Gasto);
}

const borrarGasto = (id) => {
   // console.log('arrayGastos:', arrayGastos);
   // console.log('id:', id);

    arrayGastos = arrayGastos.filter((gasto) => {
        if (gasto.id == id) {
            let filaBorrar = document.getElementById("elemento" + gasto.id);
            filaBorrar.remove(filaBorrar);
            return false;
        }
        return true;
    });
    totalGastos = arrayGastos.reduce((total, valor) => total + valor.cantidad, 0);
    document.getElementById('despliegaTotal').innerText = totalGastos;
    

    

//totalGastos = arrayGastos.reduce((total, valor) => total + valor.cantidad, 0);
   // document.getElementById('despliegaTotal').innerText = totalGastos;
    console.log('2.- arrayGastos:', arrayGastos);
    

}


const getPresupuestoObj = (saldo, gasto, presupuesto) => {
    const NewPresupuesto = {
       // id: getId(),
    saldo: parseInt(saldo),
        gasto: parseInt(gasto),
        presupuesto: parseInt(presupuesto)
        
    }
    return JSON.parse(JSON.stringify(NewPresupuesto));
}

const inputCalcular = () => {
    let presupuestoPresupuesto = document.getElementById("presupuestoInput").value;
 
     let Presupuesto = getPresupuestoObj(presupuestoPresupuesto);
     totalPresupuesto += Presupuesto.presupuesto;
     arrayGastos.push(Presupuesto);
      document.getElementById('despliegaTotal2').innerText = presupuestoPresupuesto;
     
      
 }


 