/* Função para TypeWriter  */

const title = document.querySelector('#name');
const fullText = "Kleber M Kardel";

let i = 0;

function typeWriterName() {
    if(i === 0) {
        title.innerHTML = "";
    }

    if(i < fullText.length) {
        title.innerHTML += fullText.charAt(i);
        i++;

        setTimeout(typeWriterName, 50);
    }
}

window.onload = typeWriterName;