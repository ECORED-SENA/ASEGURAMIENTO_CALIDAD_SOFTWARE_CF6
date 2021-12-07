<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos GOF

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t1/f1.jpg' alt='Laptop')
      .col-lg-7
        p Los patrones GOF son presentados como una forma indispensable de enfrentarse a la programación y surgen a raíz de: Erich Gamma, Richard Helm, Ralph Jonson y John Vlissides, quienes tratan el tema en su libro 
          em “Design Patterns—Elements of Reusable Software”
          | ; por esta razón, a estos patrones se les conoce con el nombre de la pandilla de los cuatro 
          em (GoF, gang of four)
          | . Según estos autores, los patrones de diseño se basan principalmente en dos principios de diseño orientado a objetos:

        .col-lg-8.mx-auto
          hr
          .row.align-items-center.mb-3
            .col-auto
              img(src='@/assets/curso/t1/f2.svg' alt='1' style='max-width:55px')
            .col
              p.mb-0 Programa una interfaz, no una implementación.
          hr
          .row.align-items-center.mb-3
            .col-auto
              img(src='@/assets/curso/t1/f3.svg' alt='2' style='max-width:55px')
            .col
              p.mb-0 Favorece la composición de objetos sobre la herencia.
          hr

    p.text-center Para EcuRed (s. f.), los patrones de diseño tienen las siguientes características:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t1/f4.svg' alt='imagen relacionada')
      .col-lg-6
        ul.lista-ul--color
          li 
            i.fas.fa-circle.cac
            | Constituyen soluciones concretas que, aunque se representan de forma genérica, son aplicados para resolver problemas reales.
          li 
            i.fas.fa-circle.cac
            | Son especificaciones técnicas basadas en los principios de la programación orientada a objetos y, dependiendo del lenguaje de programación, la forma de implementarlos puede variar.
          li 
            i.fas.fa-circle.cac
            | Son frecuentemente utilizados, ya que se construyen a partir de la experiencia acumulada en la industria del desarrollo de software.
          li 
            i.fas.fa-circle.cac
            | Favorecen la implementación de las características de la programación orientada a objetos, como la encapsulación, las jerarquías y el polimorfismo.
          li 
            i.fas.fa-circle.cac
            | No necesariamente el uso de un patrón implica el uso de palabras claves, reservadas o de librerías especializadas.
          li 
            i.fas.fa-circle.cac
            | Los patrones generalmente hacen referencia al uso de interfaces, clases y objetos que deben ser ajustados de acuerdo con la solución concreta a desarrollar.

    p.mb-5 Los patrones que describen GOF suelen clasificarse en tres grandes categorías según su finalidad: patrones comportamentales, patrones creacionales y patrones estructurales. Una breve explicación de estos podrá consultarse a continuación, pues en el transcurso de este componente serán explicados con mayor detalle:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t1/f5.png', alt='Patrones GOF')
      .p-4(y="46.2%" x="7.4%" numero="")
        p Fábrica Abstracta 
          br
          em (Abstract Factory)
      .p-4(y="55.05%" x="7.4%" numero="")
        p Método de Fabricación
          br
          em (Factory Method)
      .p-4(y="63.94%" x="7.4%" numero="")
        p Prototipo 
          br
          em (Prototype)
      .p-4(y="72.8%" x="7.4%" numero="")
        p 
          em Singleton
      .p-4(y="80.7%" x="7.4%" numero="")
        p Constrsuctor
          br
          em (Builder)
      .p-4(y="46.2%" x="34.97%" numero="")
        p Adaptador
          br
          em (Adapter)
      .p-4(y="55.05%" x="34.97%" numero="")
        p Puente
          br
          em (Bridge)
      .p-4(y="63.94%" x="34.97%" numero="")
        p Objeto compuesto
          br
          em (Composite)
      .p-4(y="72.8%" x="34.97%" numero="")
        p Envoltorio
          br
          em (Decorator)
      .p-4(y="80.7%" x="34.97%" numero="")
        p Fachada
          br
          em (Facade)
      .p-4(y="45.94%" x="64.1%" numero="")
        p Cadena de responsabilidad
          br
          em (Chain of responsibility)
      .p-4(y="61.5%" x="64.1%" numero="")
        p Orden
          br
          em (Command)
      .p-4(y="70.25%" x="64.1%" numero="")
        p Intérprete
          br
          em (Interpreter)
      .p-4(y="79.45%" x="64.1%" numero="")
        p Iterador
          br
          em (Iterator)
      .p-4(y="88.55%" x="64.1%" numero="")
        p Mediador
          br
          em (Mediator)
      .p-4(y="97%" x="64.1%" numero="")
        p Observador
          br
          em (Observer)
      .p-4(y="45.85%" x="95.09%" numero="")
        p Estado
          br
          em (State)
      .p-4(y="54.78%" x="95.09%" numero="")
        p Estrategia
          br
          em (Strategy)
      .p-4(y="63.55%" x="95.09%" numero="")
        p Método plantilla
          br
          em (Template method)
      .p-4(y="72.8%" x="95.09%" numero="")
        p Visitante
          br
          em (Visitor)
      //.p-4(y="84.45%" x="95.09%" numero="")
        p 
          br
          em 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
