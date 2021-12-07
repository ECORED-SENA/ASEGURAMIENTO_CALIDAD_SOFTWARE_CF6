<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Patrones creacionales

    p Una de las labores comunes en el proceso de construcción de<em> software </em>es precisamente distribuir responsabilidades en un conjunto de módulos o clases siguiendo los principios definidos en los paradigmas de programación, como, por ejemplo, la programación orientada a objetos. Sin embargo, al momento de dar solución a un requerimiento particular, se requerirá instanciar objetos de diferentes tipos, los cuales, bajo sus responsabilidades, implementan algún tipo de lógica.
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t4/f1.svg' alt='Atención')
      .col-lg-5
        .p-4(style='background-color:rgba(77,208,225,.2)')
          p Los patrones creacionales proporcionan diversos mecanismos de creación de objetos, que aumentan la flexibilidad y la reutilización del código existente de una manera adecuada a la situación. Esto le da al programa más flexibilidad para decidir qué objetos deben crearse para un caso de uso dado.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 
        em Singleton

    p Este patrón de diseño creacional se encarga de definir la forma en que se puede garantizar que exista una única instancia de una clase particular en el contexto de la aplicación. Esto es útil para casos en los que, por cuestiones de manejo de memoria o de la lógica del negocio, se requiere que sea el mismo objeto quien responda todos los mensajes, independientemente del contexto actual de la aplicación.

    .row.align-items-center.mb-5
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Este patrón se ve reflejado en el cuerpo de la misma clase que se requiere sea instancia una sola vez. Un ejemplo puede ser el manejo de conexiones a bases de datos. En algunos casos, no sería conveniente instanciar nuevos objetos de conexión cada vez que se genere un evento.
        p A continuación, se puede ver cada uno de los componentes del patrón relacionados entre el cliente y los requerimientos.
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          span 
            b Figura 5 
            | Diagrama patrón 
            em Singleton

        img(src='@/assets/curso/t4/f2.svg' alt='Singleton pattern')
        
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Fábrica abstracta
    
    p Es un patrón de diseño creacional que permite producir familias de objetos relacionados sin especificar sus clases concretas. En el siguiente recurso, podrá apreciar en detalle sus características.

    .row.pRelative
      .col-lg-5
        figure
          img(src='@/assets/curso/t4/f3.svg' alt='imagen relacionada')
      .col-lg-7
        .tarjeta.h470px.fcacb.p-5
          p.mb-0 Este patrón de diseño permite las instancias de una familia de objetos relacionados o dependientes, sin necesidad de entrar en detalles particulares de su implementación, de forma que tanto el cliente como los elementos creados por la fábrica son totalmente independientes unos de otros.
        .tarjeta.h470px.fcacb.p-5
          p.mb-0 Este patrón define una interfaz de tipo fábrica, la cual se refina por medio de la creación de fábricas concretas, las cuales pueden producir diferentes tipos de objetos y en diferentes combinaciones, según las necesidades del cliente.
        .tarjeta.h470px.fcacb.p-5
          p.mb-0 Los elementos importantes de este patrón se describen a continuación (Landa, 2018c):
          ul.ul__vineta--color
            li
              i.fas.fa-circle 
              | Interfaz de la fábrica abstracta, la cual relaciona las operaciones de creación de los productos abstractos.
            li
              i.fas.fa-circle 
              | Fábricas concretas, las cuales implementan las operaciones de creación definidas en la interfaz de fábrica abstracta.
            li
              i.fas.fa-circle 
              | Interfaz de producto, la cual relaciona los comportamientos de los productos o elementos.
            li
              i.fas.fa-circle 
              | Productos concretos, los cuales implementan los comportamientos definidos en la interfaz de producto.
        .tarjeta.h470px.fcacb.p-5
          p.text-center En figura se puede ver cada uno de los componentes del patrón.
          figure
            img(src='@/assets/curso/t4/f4.svg' alt='Componentes del patrón')

</template>

<script>
export default {
  name: 'Tema4',
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
