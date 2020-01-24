var imagenesPersonas = [
  { alt: 'fv', src: 'img/fv-male.png' },
  { alt: 'fv', src: 'img/fv-female.png' },
  { alt: 'gc', src: 'img/gc-male.png' },
  { alt: 'gc', src: 'img/gc-female.png' },
  { alt: 'go', src: 'img/go-male.png' },
  { alt: 'go', src: 'img/go-female.png' },
  { alt: 'hi', src: 'img/hi-male.png' },
  { alt: 'hi', src: 'img/hi-female.png' },
  { alt: 'lz', src: 'img/lz-male.png' },
  { alt: 'lz', src: 'img/lz-female.png' },
  { alt: 'pa', src: 'img/pa-male.png' },
  { alt: 'pa', src: 'img/pa-female.png' },
  { alt: 'tf', src: 'img/tf-male.png' },
  { alt: 'tf', src: 'img/tf-female.png' }
]

var aciertos = 0;
var numImagenes = 0;
var oportunidades = 0;

/* Iniciamos el JQuery con los Input tipo radio de JQuery UI */
$(document).ready(function() {
  $('input').checkboxradio();
});


$('input').click(function() {
  var trajesTipicos = $('<div></div>').appendTo('#comenzarJuego');
  trajesTipicos.attr('id', 'trajes')
  $('#grupoBotones').hide();
  var nivelEscogido = $('input:checked').val();

/* Switch con las 3 distintos niveles dipsponibles */
switch (nivelEscogido) {
    case 'Fácil':
      numImagenes = 4;
      for (cont = 0; cont < 4; cont++) {
        var imagenNueva = $('<img></img>').appendTo('#trajes');
        imagenesAleatorias = Math.floor(Math.random() * imagenesPersonas.length)
        imagenNueva.attr('src', imagenesPersonas[imagenesAleatorias].src)
        imagenNueva.attr('alt', imagenesPersonas[imagenesAleatorias].alt)
        $('#trajes').append(imagenNueva)
      }
      break
    case 'Medio':
      numImagenes = 6
      for (cont = 0; cont < 6; cont++) {
        var imagenNueva = $('<img></img>').appendTo('#trajes');
        imagenesAleatorias = Math.floor(Math.random() * imagenesPersonas.length)
        imagenNueva.attr('src', imagenesPersonas[imagenesAleatorias].src)
        imagenNueva.attr('alt', imagenesPersonas[imagenesAleatorias].alt)
        $('#trajes').append(imagenNueva)
      }
      break
    case 'Experto':
      numImagenes = 8
      for (cont = 0; cont < 8; cont++) {
        var imagenNueva = $('<img></img>').appendTo('#trajes');
        imagenesAleatorias = Math.floor(Math.random() * imagenesPersonas.length)
        imagenNueva.attr('src', imagenesPersonas[imagenesAleatorias].src)
        imagenNueva.attr('alt', imagenesPersonas[imagenesAleatorias].alt)
        $('#trajes').append(imagenNueva)
      }
      break
  }
  
  /* Activamos Jquery UI (Draggable) */
  $('#trajes').find('img').draggable({
    containment: '#contenedor'
  })
});


/* Activamos Jquery UI (Droppable) */
$('#islas').find('img').droppable({
  accept: '#trajes > img',
  addClass: 'ui-state-highlight',
  drop: function(event, ui) {
    ui.draggable.draggable({
      /* Desactivamos el arrastre de imagen tras soltarla en una isla */
      disabled: true
    })
    if (ui.draggable.attr('alt') == $(this).attr('alt')) {
      /* Mensaje de acierto del Toastr */
      toastr.success('¡Enhorabuena! Has acertado..');
      $(ui.draggable).css('border', '2px solid green');
      aciertos++
      oportunidades++
    } else {
      /* Mensaje de error del Toastr */
      toastr.error('¡Oops! Has fallado...');
      $(ui.draggable).css('border', '2px solid red');
      oportunidades++
    }
    /* Puntuación total en un Dialog de JQuery UI */
    if (oportunidades == numImagenes){
      var ventanaFinal = $(`<div>Has logrado acertar ${aciertos}/${oportunidades} imágenes... ¿quieres intentarlo de nuevo?</div>`)
      ventanaFinal.attr('id', 'ventanaModal')
      ventanaFinal.attr('title', 'Puntuación final')
      ventanaFinal.appendTo('body')
      var reiniciarPartida = $('<a id="reinicio" class="ui-button ui-widget ui-corner-all" href="../index.html" style="padding: 8px; margin-bottom: 5px;">Reiniciar partida</a>')
      reiniciarPartida.appendTo(ventanaFinal)
      $( function () {
        $("#ventanaModal").dialog();
        });
    }
  }
});
