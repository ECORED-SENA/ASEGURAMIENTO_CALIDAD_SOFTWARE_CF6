<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.texto-blanco
      h1 Introducción

    p.mb-5 Le damos la bienvenida al componente formativo “Patrones de diseño de software”. Para comenzar el recorrido, visite el recurso didáctico que se muestra a continuación:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg1.p-5
      .row.align-items-center.justify-content-around
        .col-lg-6
          p Para la elaboración de este componente, se abordaron varios autores conocidos en 
            b patrones de diseño de 
              em software, 
            | de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del 
            b aseguramiento de la calidad de 
              em software.
        .col-lg-5.order-first.order-lg-last
          figure
            img(src='@/assets/curso/if1.svg' alt='Imagen relacionada')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
