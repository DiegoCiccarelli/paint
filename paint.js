window.addEventListener("load", function(){
    let pincel;
    let lienzo = document.querySelector("#lienzo");
    let colorRojo = document.querySelector("#rojo");
    let colorVerde = document.querySelector("#verde");
    let colorAzul = document.querySelector("#azul");

    colorRojo.addEventListener("click", function(){
        pincel ="red";
    })
    
    colorVerde.addEventListener("click", function(){
        pincel ="green";
    })
    
    colorAzul.addEventListener("click", function(){
        pincel ="blue";
    })

    lienzo.addEventListener("click", function(){
       console.log(pincel);
        this.style.backgroundColor = pincel;
    })

    
    
})