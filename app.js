
function encriptarTexto() {
  
    let texto = document.getElementById("textoOriginal").value;
    
    let textareraEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    const rectangulo = document.getElementById("rectangulo");
    rectangulo.style.display = "block";
    rectangulo.textContent = textareraEncriptado

    const botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "inline-block";
    document.getElementById('desencriptar').removeAttribute('disabled');
}

function desencriptarTexto() {
    
    let texto = document.getElementById("textoOriginal").value;

   
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    
    const rectangulo = document.getElementById("rectangulo");
    rectangulo.style.display = "block"; 
    rectangulo.textContent = textoDesencriptado; 

    const botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "none";
}

function copiarTexto() {
    
    const textoEncriptado = document.getElementById("rectangulo").textContent;
    
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textoEncriptado;
    
    document.body.appendChild(tempTextarea);
    
    tempTextarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(tempTextarea);
}