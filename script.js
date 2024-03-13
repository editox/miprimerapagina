

const form = document.getElementById("form");
const name = document.getElementById("nombre");
const parrafo = document.getElementById("alerta");


function validarFormulario(){
    let warning = "";
    let valido = true;
    
    alerta.innerHTML = "";


    if(name.value.length < 4){
        warning += `El nombre debe contener más de 4 caracteres`;
        valido = false;
    }

    if(!valido){
        //Mostrar alerta
        parrafo.innerHTML = warning;
    } else {
        //Enviar la servidr
        parrafo.innerHTML = 'Enviado';
    }

    return valido;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if(validarFormulario()){
        //Envia el formulario
        console.log("Se envio el formulario");
        form.submit();
    } else{
        console.error("Mensaje de alerta");
        e.preventDefault(); //Evita que el formulario se envie automaticamente.
        
    }
});