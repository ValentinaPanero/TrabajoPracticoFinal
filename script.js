

// OBTENER PRODUCTOS
var urlApi = 'https://api.yumserver.com/15833/products';

function obtenerProductos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(mostrarProductos)
        .catch(error => console.error('Error:', error));
}

// Función para mostrar los productos en la tabla
function mostrarProductos(productos) {
    let html = '';
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].titulo)
        html += `
        <tr>
          <td>${productos[i].idcod}</td>
          <td>${productos[i].titulo}</td>
          <td>${productos[i].precioPeso}</td>
          <td>${productos[i].precioDolar}</td>
          <td>${productos[i].fecha}</td>
          <td>
           <button class="btnTabla" onclick="actualizarProducto('${productos[i].idcod}')">Editar</button>
           <button class="btnTabla" onclick="borrarProducto('${productos[i].idcod}')">Borrar</button>
        </td>
        </td>
          </td>
        </tr>
        `;
    }
    document.getElementById('resultados').innerHTML = html;
}


var ids = ['lista', 'nuevo-producto', 'editar-producto'];


function mostrarSeccion(_div) {
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).setAttribute('style', 'display:none');
    }
    document.getElementById(_div).removeAttribute('style');
}


// Función para crear un nuevo producto
function crearProducto() {
    let producto = {
        titulo: document.getElementById('titulo').value,
        precioPeso: document.getElementById('PrecioPeso').value,
        precioDolar: document.getElementById('PrecioDolar').value,
        fecha: document.getElementById('fecha').value
    };

    fetch(urlApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
        .then(response => response.text())
        .then(
            function (texto) {
                if (texto.trim() == "OK") {
                    alert('Producto creado exitosamente');
                    mostrarSeccion('lista');
                    obtenerProductos();
                } else {
                    alert(texto);
                }
            })
        .catch(error => console.error('Error:', error));
}


// Eliminar un producto 
function borrarProducto(idcod) {
    const confirmacion = window.confirm("¿Seguro que desea eliminar este producto?");

    if (confirmacion) {
        let product = {
            idcod: idcod
        };

        fetch(urlApi, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    } else {
        console.log("Se cancelo Eliminar");
    }
}
obtenerProductos();

// EDITAR PRODUCTO

// Función para actualizar producto
function actualizarProducto(idcod) {

    mostrarSeccion('editar-producto');
    fetch(`${urlApi}/${idcod}`)

    .then(response => response.text())
    .then(producto => {
        
    })
    let datosActualizados = {
        titulo: document.getElementById('edit-titulo').value,
        precioPeso: document.getElementById('edit-PrecioPeso').value,
        precioDolar: document.getElementById('edit-PrecioDolar').value,
        fecha: document.getElementById('edit-fecha').value
    }

    fetch(`${urlApi} ${idcod}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosActualizados)
    })

    .then(response => response.text())
        .then(
            function (texto) {
                if (texto.trim() == "OK") {
                    alert('Producto actualizado');
                    mostrarSeccion('lista');
                    obtenerProductos();
                } else {
                    alert(texto);
                }
            })
        .catch(error => console.error('Error:', error));
}




//MENU MOVILE
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


window.addEventListener('load', CargarProductos)
function CargarProductos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(productos => {
            console.log(productos.data)
            Mostrar(productos);
    });
}

function Mostrar(productos) {
    let html = '';
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].titulo)
        html += `
        <div>
          <p>${productos[i].idcod}</p>
          <>${productos[i].titulo}</p>
          <p>${productos[i].precioPeso}</p>
          <p>${productos[i].precioDolar}</p>
          <p>${productos[i].fecha}</p>
        </div>
        `;
    }
    document.getElementById('resultados').innerHTML = html;
}