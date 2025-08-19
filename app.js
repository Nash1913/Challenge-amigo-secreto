// Lista donde se guardarán los nombres de los amigos ingresados
let amigos = [];

console.log(amigos); // Debería mostrar []

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
} 

function agregarAmigo() {
    // 1. Capturar valor del input
    let nombreAmigo = document.getElementById("amigo").value.trim();
    
    // 2. Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor inserte un nombre');
        return;
    }
    
    // 3. Agregar al array
    amigos.push(nombreAmigo);
    console.log(amigos);
    actualizarLista();
    
    // 4. Limpiar campo
    limpiarCaja();
}


  function actualizarLista() {
    // 1. Obtener el elemento <ul> donde se van a mostrar los amigos
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista antes de volver a llenarla (para evitar duplicados)
    lista.innerHTML = "";

    // 3. Recorrer el array "amigos"
    for (let i = 0; i < amigos.length; i++) {
        // a) Crear un nuevo <li>
        let li = document.createElement("li");

        // b) Poner el nombre actual del array como texto dentro del <li>
        li.textContent = amigos[i];

        // c) Agregar el <li> al <ul>
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    // 1. Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; // corta la función si no hay nombres
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado usando ese índice
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${amigoSorteado}</li>`;
}

