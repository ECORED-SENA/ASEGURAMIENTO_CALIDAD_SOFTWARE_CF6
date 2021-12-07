<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Vistas estáticas

    p La vista estática está encargada de modelar los conceptos significativos del dominio de la aplicación desde sus propiedades internas y las relaciones existentes. Se denomina vista estática porque no modela el comportamiento del sistema ni muestra las variaciones que se puedan presentar por efecto del tiempo.
    p Los elementos fundamentales de la vista estática son las clases, que describen los conceptos del dominio del problema, y las relaciones, que pueden ser de tipo asociación, generalización y de dependencia. Entre los diagramas de UML que se utilizan para representar la vista estática del sistema, se encuentran (ITCA-FEPADE, s. f.):

    .row.align-items-center.mb-5
      .col-lg-6
        hr
        .row.align-items-center.mb-3
          .col-auto
            img(src='@/assets/curso/t6/f1.svg' alt='1' style='max-width:55px')
          .col
            p.mb-0 Diagrama de clases
        hr
        .row.align-items-center.mb-3
          .col-auto
            img(src='@/assets/curso/t6/f2.svg' alt='2' style='max-width:55px')
          .col
            p.mb-0 Diagrama de objetos
        hr
        .row.align-items-center.mb-3
          .col-auto
            img(src='@/assets/curso/t6/f3.svg' alt='3' style='max-width:55px')
          .col
            p.mb-0 Diagrama de componentes
        hr
      .col-lg-6 
        figure
          img(src='@/assets/curso/t6/f4.png' alt='imagen relacionada')

    p A continuación, se detallan algunos diagramas de UML que permiten tener una visión más generalizada de los sistemas de información en desarrollo o desarrollados por el equipo de trabajo.
    
</template>

<script>
export default {
  name: 'Tema6',
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
