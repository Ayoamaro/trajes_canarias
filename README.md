# U09-P01: Comics y personajes de Marvel

![imagen_previa.PNG](https://github.com/Ayoamaro/trajes_canarias.github.io/blob/master/img/imagen_previa.PNG?raw=true)

## Requisitos mínimos
* El juego debe estar en una página Web que contenga un área de juego que no ocupe todo
el alto y ancho de la Web
* El usuario debe elegir el nivel de dificultad tres botones: fácil, normal y experto (con
jQueryUI)
* Inicialmente:
    * Debe haber entre 4 y 7 áreas (containers para las diferentes islas (containers) en el
área de juego de manera aleatoria
    * El juego debe mostrar (a la vez y en un área reservada para ello) al usuario un número
de imágenes de trajes típicos (draggables) al azar (del total de imágenes
proporcionadas) en el área de juego:
        * Fácil: 4 imágenes
        * Medio: 7 imágenes
        * Experto: 8 imágenes
* Las imágenes de los trajes a ubicar deben corresponderse únicamente a las islas que hay
en el nivel seleccionado.
* El usuario debe ser capaz de seleccionar una imagen de un traje y arrastrarla con el ratón
sobre la imagen de la isla adecuada. No se pueden arrastrar elementos fuera del área de
juego.
* Si el usuario deposita la imagen del traje en la isla adecuada, él/ella gana 1 punto y se
avisará al usuario a través de notificaciones Toastr. En el caso de error, la puntuación será
de 0.
* Si la imagen del traje se deposita de manera correcta se le aplicar algún estilo (por
ejemplo: borde verde). En el caso de que lo haga de manera incorrecta, le aplicará otro
estilo diferente (por ejemplo: borde rojo).
* Después de que todos las imágenes de trajes han sido arrastradas, se debe mostrar el
resultado (por ejemplo: "Tienes 2 puntos) y pedir al usuario "¿Quieres jugar de nuevo? Si el
usuario decide volver a jugar, se inicia el juego (y puede cambiar de nivel), de lo contrario el
juego se termina. Para estos mensajes se han de usar ventanas modales con algún efecto a
la entrada y salida (jQueryUI).

Autor de las imágenes: [Proyecto TSP (IECI-EFC)](https://bit.ly/36smvp2)

## Ejecución
1. Descargar el [Proyecto](https://bit.ly/3c0t57E) y descomprimir
2. Abrir con [Visual Studio Code](https://code.visualstudio.com) o algún editor de código
3. Descargar el [Live Server](https://bit.ly/3elOzNx)
3. Abrir el **index.html** y ejecutarlo con la opción "Go Live"

## Hecho con
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - **55,70%**
* [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5) - **33,70%**
* [CSS3](https://developer.mozilla.org/es/docs/Archive/CSS3) - **8,60%**
