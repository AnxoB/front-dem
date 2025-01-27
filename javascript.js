
function changeBG(){
    let paragraph = document.getElementById("para");
    paragraph.style.backgroundColor = "red";
}

function changeBG2(){
    let paragraph = document.getElementById("para");
    paragraph.style.backgroundColor = "blue";
}

function changeText(){
    let paragraph = document.getElementById("para");
    paragraph.innerText="Text changed";
}

function seeInfo(){
    let paragraph2 = document.getElementById("para2")
    document.write(paragraph2.textContent) //Muestra el texto del parágrafo sin el strong
    document.write(paragraph2.innerHTML) //Muestra el texto con el strong
}


