

// OBTENER PRODUCTOS
var urlApi = 'https://api.yumserver.com/15833/products';

function obtenerProductos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(mostrarProductos, mostrarProductosInicio)
        .catch(error => console.error('Error:', error));
}

// MOSTRAR EN TABLA
function mostrarProductos(productos) {
    let html = '';
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].titulo)
        html += `
        <tr>
          <td>${productos[i].idcod}</td>
          <td>${productos[i].titulo}</td>
          <td class="precio">$ ${productos[i].precioPeso}</td>
          <td class="precio">$ ${productos[i].precioDolar}</td>
          <td>${productos[i].fecha}</td>
          <td>
           <button class="btnTabla" onclick="MostrarFormularioModificar('${productos[i].idcod}')">Editar</button>
           <button class="btnTabla" onclick="borrarProducto('${productos[i].idcod}')">Borrar</button>
        </td>
        </td>
          </td>
        </tr>
        `;
    }
    document.getElementById('resultados').innerHTML = html;
}

// MOSTRAR FORMULARIOS
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
function MostrarFormularioModificar(idcod, titulo, precioPeso, precioDolar, fecha) {
    mostrarSeccion('editar-producto');
    console.log(idcod, titulo, precioPeso, precioDolar, fecha);
    document.getElementById('edit-idcod').value = idcod;
    document.getElementById('edit-titulo').value = titulo;
    document.getElementById('edit-precioPeso').value = precioPeso;
    document.getElementById('edit-precioDolar').value = precioDolar;
    document.getElementById('edit-fecha').value = fecha;

}
        
//Modificar
 function Modificar() {
        fetch(urlApi, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idcod:document.getElementById('edit-idcod').value,
                titulo:document.getElementById('edit-titulo').value,
                precioPeso:document.getElementById('edit-precioPeso').value,
                precioDolar:document.getElementById('edit-precioDolar').value,
                fecha:document.getElementById('edit-fecha').value                  
            })
        })
        .then(response => response.text())
        .then(data => {console.log(data)
            
    // Verificar la respuesta de la API
            if (data.trim() == "OK") {
                alert('Producto modificado exitosamente');
                mostrarSeccion('lista');
                obtenerProductos();                  
            } else {
                alert('Error al modificar'); // Mostrar mensaje de error devuelto por la API                  
            }
        })
        .catch(error => console.error('Error:', error));       
}

// MOSTRAR EN INICIO
window.addEventListener('load', obtenerProductosInicio())
function obtenerProductosInicio() {
    fetch(urlApi)
        .then(response => response.json())
        .then(mostrarProductosInicio)
        .catch(error => console.error('Error:', error));
}
function mostrarProductosInicio(productos) {
    let html = '';
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].titulo)
        html += `
        <div class="product">
            <label class="titulo">${productos[i].titulo}</label>
            <label class="precioPeso">AR$ ${productos[i].precioPeso}</label>
            <label class="precioDolar">U$S ${productos[i].precioDolar}</label>
        </div>  
        `;
    }
    document.getElementById('Productos-inicio').innerHTML = html;
}





// FILTRO

function Search() {
	let input = document.getElementById("parametro");
	input.value = input.value.toLowerCase();

	let contenedor = document.getElementById("Productos-inicio");

	let hijos = contenedor.childNodes;

	let hayResultados = false;

	for (let i = 0; i < hijos.length; i++) {
		console.log(hijos[i].innerHTML)
		console.log(hijos[i])
		if (hijos[i].tagName == 'DIV') {
			if (hijos[i].innerHTML.toLowerCase().indexOf(input.value) > -1) {
				hayResultados = true;
				hijos[i].removeAttribute('style');

			} else {
				hijos[i].setAttribute('style', 'display:none');
			}
		}
	}
}




//MENU MOBILE
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


