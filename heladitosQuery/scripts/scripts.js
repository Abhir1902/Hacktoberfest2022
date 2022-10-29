$(document).ready(function () {
  var actualSection = localStorage.getItem('actualSection');
  if (actualSection == undefined) {
    actualSection = "slide_1";
  }else {
    $(".button-container button").removeClass('selected');
    $('#' + actualSection).addClass('selected');
  }
  $("#slidesContainer").load('components/' + actualSection + '.html');
});

function getImage(data){
  var image = data.split('_')
  image = image[1], 
  image = "imagenes/type_"+image+".jpg";
  return image;
}

function getIceCream(data) {
  var image = getImage(data);
  var title;
  var color;
  var texto;
  var animal_Section = data;
  switch (data) {
    case 'animal_a':
      title= "Azul"
      color= "#70cef8"
      texto= "Delicioso"
    break;
    case 'animal_b':
      title= "Pistache"
      color= "#c0d774"
      texto= "Rico"
    break;
    case 'animal_c':
      title= "Chocolate"
      color= "#9a7b6e"
      texto= "Hermoso"
    break;
    case 'animal_d':
      title= "Guayaba"
      color= "#e78d9a"
      texto= "Bello"
    break;
    case 'animal_e':
      title= "Vainilla"
      color= "#dbce79"
      texto= "Delicia"
    break;
    case 'animal_f':
      title= "Nuez"
      color= "#cc982a"
      texto= "Favorito"
    break;
    default:
    title=Azul;
    color="#70cef8"
  }
  return ({titulo:title, color:color, imagen:image, texto:texto, animal_Section: animal_Section,})
}

$(document).on("click",".button-container button",function(){
  var id = $(this).attr('id');
  $(".button-container button").removeClass('selected');
  $(this).addClass('selected');
  localStorage.setItem('actualSection', id);
  $("#slidesContainer").load('components/' + id + '.html');
});

$(document).on("click", ".pop-container button", function(){  
  $(".full-block").remove();
});

$(document).on("click", ".animal-btn", function(){
  var id = $(this).attr('id');
  var array = getIceCream(id);

  var html = `<div class="full-block">
   <div class="pop-container">
      <div class="animal-icecream" style="background-image:url(` +array.imagen+` )"></div>
      <h1 style="color: ` +array.color+ ` ">`+array.titulo+`</h1>
      <h2 style="color: ` +array.color+ ` ">`+array.texto+`</h2>
      <button>Salir</button>
    </div>
  </div>`;
  $(html).prependTo('body');
});