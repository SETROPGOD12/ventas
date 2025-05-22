const API_URL_PROD = 'http://localhost:3000/api/productos';

document.getElementById('formProducto').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre_prod = document.getElementById('nombre_prod').value;
  const precio = document.getElementById('precio').value;
  const stock = document.getElementById('stock').value;

  try {
    const respuesta = await fetch(API_URL_PROD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_prod, precio, stock })
    });

    const datos = await respuesta.json();

    if (respuesta.ok) {
      alert(datos.mensaje); // Muestra "Producto agregado"
      document.getElementById('formProducto').reset();
      cargarProductos();
    } else {
      alert('Error al agregar producto: ' + datos.error);
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});

async function cargarProductos() {
    const res = await fetch(API_URL_PROD);
    const datos = await res.json();
    const tabla = document.getElementById('tablaProductos');
    tabla.innerHTML = '';
    datos.forEach(producto => {
        tabla.innerHTML += `
        <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre_prod}</td>
        <td>${producto.precio}</td>
        <td>${producto.stock}</td>
        </tr>
        `;
    });

}
cargarProductos();