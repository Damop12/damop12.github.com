//DOM
//buscar un elemento desde js
/*
let links = document.querySelectorAll("a");
links.forEach(function(link){
  console.log(link);
});*/
/* ver el evento click
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener("click",function(){
    console.log(this);
  })
});
*/
//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
link.addEventListener("click",function(ev){
  ev.preventDefault();
  let.content = document.querySelectr('.content')
  //Quitar las clases de animaciones
  content.classList.remove("fadeInDown");
  content.classList.remove("animated");
  //Agregar clases para animar la salida
  content.classList.add("fadeInDown");
  content.classList.add("animated");
  return false;
  });

});

let iconos = document.querySelectorAll("i");

 iconos.forEach(function(icono){
   icono.classList.remove("fa fa-star-o");
   icono.classList.add("fa-star");
   setTimeout(function(){
   location.href = "/boletines";  //como moverse entre documentos javascript setTimeout o setInterval
 },1000);
});
