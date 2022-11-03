function Mycolor() {
    var element = document.getElementById("myID");
    
    if(element.style.backgroundColor!='red')
    {
        element.style.backgroundColor='red'}
        else{

        element.style.backgroundColor='green'
    }
    }
    function addElement () {

        // obtener el elemento div con id = "div_example"
      
        const existDiv = document.getElementById("div1");
      
        // crear un nuevo elemento div 
      
        const newDiv = document.createElement("div");
        var newContent = document.createTextNode("Hola!¿Qué tal?");
        // agregar el nuevo elemento div existente
      
        existDiv.appendChild(newDiv);
    }
    document.body.onload = addElement2;
    function addElement2 () {
        // crea un nuevo div
        var newDiv = document.createElement("div");
        // y añade contenido        
        var newContent = document.createTextNode("Hola!¿Qué tal?");
        newDiv.appendChild(newContent); //añade texto al div creado.
      
        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
      }