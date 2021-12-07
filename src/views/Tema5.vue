<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Patrones estructurales

    img(src='@/assets/curso/t5/f1.jpg' alt='pantallas con código fuente').mb-4
    p.text-center Los patrones estructurales proveen una orientación relacionada con la forma de definir los componentes de los objetos.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Fachada

    p.mb-5 El patrón fachada se utiliza cuando el sistema está compuesto por varios subsistemas y se hace complejo gestionar los mensajes que debe realizar el cliente en cada uno de estos subsistemas. Este patrón permite generar al cliente una vista de alto nivel que simplifica el control y el envío de mensajes a los subsistemas, ocultando los detalles relacionados con la gestión de las clases e instancias, como se detalla en el siguiente recurso educativo.

    .bg4
      SlyderA
        .row.align-items-center.justify-content-center
          .col-lg-5
            p Existen diferentes variaciones del patrón fachada (Landa, 2018c):
            ul.ul__vineta--color
              li 
                i.fas.fa-circle 
                b Opaco: 
                | una de las variaciones más utilizadas y en la cual los clientes no pueden acceder a los subsistemas, solo se puede hacer mediante el objeto fachada.
              li 
                i.fas.fa-circle 
                b Transparente: 
                | el cliente tiene la posibilidad de acceder a los subsistemas por medio de la fachada, pero también puede hacerlo de forma directa.
              li 
                i.fas.fa-circle 
                b Estática: 
                | en esta variación, la fachada se implementa como una clase estática, por lo cual, no se hace necesaria la instancia de un objeto concreto de la fachada.
          .col-lg-5
            figure
              img(src='@/assets/curso/t5/f2.svg' alt='imagen relacionada')
        .row.align-items-center.justify-content-center
          .col-lg-5
            p En este patrón se reconocen tres partes fundamentales (Landa, 2018c):
            ul.ul__vineta--color
              li 
                i.fas.fa-circle 
                b Fachada: 
                | clase que provee las operaciones de alto nivel que serán usadas por el cliente.
              li 
                i.fas.fa-circle 
                b Subsistemas: 
                | clases que proveen las funcionalidades que son expuestas por la fachada.
              li 
                i.fas.fa-circle 
                b Cliente: 
                | hace uso de las operaciones de alto nivel por medio de la fachada.
          .col-lg-5
            figure
              img(src='@/assets/curso/t5/f3.svg' alt='imagen relacionada')
        .row.align-items-center.justify-content-center
          .col-lg-10
            p En la figura, se puede ver cada uno de los componentes del patrón.
            figure
              img(src='@/assets/curso/t5/f4.svg' alt='imagen relacionada')
      
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 
        em Delegate

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t5/f5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El patrón 
          em delegate 
          | se usa cuando se quieren reutilizar y extender funcionalidades de una clase sin hacer uso de la herencia. Este patrón permite, de cierta forma, implementar algo similar a la herencia múltiple, que no es admitida por algunos lenguajes de programación, pero, adicionalmente, permite tener un control más detallado sobre este proceso, ya que se puede ocultar parte de los elementos heredados o, incluso, compartir elementos que no son posibles de heredar bajo el mecanismo de herencia tradicional.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t4/f1.svg' alt='Atención')
      .col-lg-5
        .p-4(style='background-color:rgba(77,208,225,.2)')
          p Este patrón lo que busca es evitar asumir todas las responsabilidades en una sola instancia y delegar las actividades en otras instancias que son especializadas en resolver dichas tareas.

</template>

<script>
export default {
  name: 'Tema5',
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
