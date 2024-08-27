const mensagemEsquerda = document.querySelector(".conteudo_principal_esquerda_input");
const mensagemDireita = document.querySelector(".conteudo_principal_direita_input");

function btnEncriptar() {
    const textoEncriptado = encriptar(mensagemEsquerda.value);
    mensagemDireita.value = textoEncriptado;
    mensagemEsquerda.value = "";
    
    imagem.style.visibility = "hidden";
    texto.style.visibility = "hidden";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1])
        }
    }

    return stringEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensagemEsquerda.value);
    mensagemDireita.value = textoDesencriptado;
    mensagemEsquerda.value = "";

    imagem.style.visibility = "hidden";
    texto.style.visibility = "hidden";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }

    return stringDesencriptado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("textoInput");
    textoCopiado.select();

    document.execCommand("copy");
    alert("Texto copiado para a área de transferência");
}