# Attribute binding

## Introducción

Vamos a mejorar la lista de hábitos. Si recibimos un array vacío, mostraremos un mensaje "No hay hábitos creados"

## Requisitos

- Añadir por input de Angular una cadena de texto al 'attribute-binding.page'
- Si la cadena comienza por la letra A aplicar una clase que ponga el color en rojo
- Si la cadena tiene 5 caracteres aplicar una clase que pongo el fondo en amarillo
- Añadir un atributo "title" dinámico cuyo valor sea 'Hola mundo' si la cadena son menos de 5 caracteres

## Resultado y notas

👍 Hecho

- Si queremos que una propiedad de HTML se evalue como codigo lo colocamos entre []
  <br/> Por ejemplo `<p [title]="getTittle()" [class]="getStyleClass()">{{text()}}</p>`
- `[title]` y `[class]` se evaluan con dos funciones `getTittle()` y `getStyleClass()` en el compoente
- Ademas la funcion `getStyleClass()` puede devolver un array de estilos, con true o false para indicar si se aplicacion o no. Ver resolucion.
