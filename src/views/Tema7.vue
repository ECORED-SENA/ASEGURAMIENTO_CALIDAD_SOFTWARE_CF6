<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Diagrama de despliegue

    p Los diagramas de despliegue hacen parte de los tipos de diagrama propuestos por UML y su objetivo es la representación de la arquitectura del sistema en términos de hardware y <em>software</em> físico, y los medios por los cuales se conectan. Este tipo de diagrama es muy útil para el proceso de despliegue del sistema.
    p.mb-5 Los diagramas de despliegue utilizan un conjunto de elementos gráficos que tienen una representación y significado estandarizados. A continuación, se detalla cada uno de ellos (Cinergix Pty. Ltd., 2021):

    TabsA.color-secundario
      .tarjeta.tarjeta--gris.p-5(titulo='NODOS')
        h3 NODOS
        p Representan un elemento que puede ser 
          em hardware 
          | o 
          em  <em>software</em>  
          | y se grafican mediante un cubo.
        figure
          img(src='@/assets/curso/t7/f1.svg')
      .tarjeta.tarjeta--gris.p-5(titulo='ARTEFACTOS')
        h3 ARTEFACTOS
        p Representan elementos concretos generados en el proceso de desarrollo, como, por ejemplo, bibliotecas, archivos, etc.
        figure
          img(src='@/assets/curso/t7/f2.svg')
      .tarjeta.tarjeta--gris.p-5(titulo='ASOCIACIÓN DE COMUNICACIÓN')
        h3 ASOCIACIÓN DE COMUNICACIÓN
        p Representa el camino de comunicación entre los nodos y se grafica mediante una línea continua que une los nodos en cuestión.
        figure
          img(src='@/assets/curso/t7/f3.svg')
      .tarjeta.tarjeta--gris.p-5(titulo='DISPOSITIVOS')
        h3 DISPOSITIVOS
        p Es un tipo especial de nodo que representa un recurso computacional del sistema, como, por ejemplo, un servidor.
        figure
          img(src='@/assets/curso/t7/f4.svg')
      .tarjeta.tarjeta--gris.p-5(titulo='ESPECIFICACIONES DE DESPLIEGUE')
        h3 ESPECIFICACIONES DE DESPLIEGUE
        p Representan configuraciones que se deben tener en cuenta para desplegar un artefacto en un nodo.
        figure
          img(src='@/assets/curso/t7/f5.svg')
      .tarjeta.tarjeta--gris.p-5(titulo='FIGURA ILUSTRATIVA')
        h3 FIGURA ILUSTRATIVA
        p Este un tipo de ejemplo de un diagrama de despliegue para un sistema de gestión de biblioteca.
        figure
          img(src='@/assets/curso/t7/f6.svg')

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
