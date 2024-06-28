// Función para encriptar texto
function encriptarTexto() {
    let texto = document.getElementById("textoOriginal").value.trim(); 

    // Verificar si el textarea está vacío
    if (texto === "") {
        alert("Por favor, ingrese algún texto para encriptar.");
        return; // Salir de la función si no hay texto
    }

    // Reemplazar caracteres para encriptar el texto
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarTexto(textoEncriptado, true);
}

// Función para desencriptar texto
function desencriptarTexto() {
    let texto = document.getElementById("textoOriginal").value;

    // Revertir los reemplazos para desencriptar el texto
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarTexto(textoDesencriptado, false);
}

// Función para copiar texto encriptado al portapapeles y reemplazar el textarea con el texto encriptado
function copiarTexto() {
    const textoEncriptado = document.getElementById("rectangulo").textContent;
    
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        console.log("Texto copiado al portapapeles");

        // Reemplazar el contenido del textarea con el texto encriptado
        document.getElementById("textoOriginal").value = textoEncriptado;
    }).catch(err => {
        console.error("Error al copiar texto: ", err);
    });
}


// Función para mostrar texto en el rectángulo y ajustar visibilidad de botones
function mostrarTexto(texto, mostrarBotonCopiar) {
    const rectangulo = document.getElementById("rectangulo");
    rectangulo.style.display = "block";
    rectangulo.textContent = texto;

    const botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = mostrarBotonCopiar ? "inline-block" : "none";
    document.getElementById('desencriptar').disabled = !mostrarBotonCopiar;
}
