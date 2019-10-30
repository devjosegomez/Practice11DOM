let isDefault = true;
window.onload = () =>{
    document.getElementById("btnCambiaTexto").onclick = CambiaTexto;
    document.getElementById("btnRestablecerTexto").onclick = function(){
        document.getElementById("parrafo1").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi, error officiis delectus nam labore rem quae commodi iste saepe blanditiis itaque quis. Rem maiores aspernatur quibusdam quae numquam, deserunt.";
    }
    document.getElementById("btnChangeTextColor").onclick = ()=> document.getElementById("parrafo1").style.color = "blue";
    document.getElementById("btnSwitchColor").onclick = SwitchColor;
}

function CambiaTexto(){
    document.getElementById("parrafo1").innerHTML = "Este es mi nuevo texto";
}

function SwitchColor(){
    if(isDefault){
        isDefault = false;
        document.getElementById("parrafo1").style.color = "black";
        console.log(isDefault);
    }else{
        isDefault = true;
        document.getElementById("parrafo1").style.color = "green";
        console.log(isDefault);
    }
}
