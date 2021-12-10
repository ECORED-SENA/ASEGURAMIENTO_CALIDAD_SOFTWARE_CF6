<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Conceptos GOF

    .row.align-items-center.mb-5
      .col-lg-5(data-aos='fade-right')
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
          .row.align-items-center.mb-3(data-aos='fade-left')
            .col-auto
              img(src='@/assets/curso/t1/f2.svg' alt='1' style='max-width:55px')
            .col
              p.mb-0 Programa una interfaz, no una implementación.
          hr
          .row.align-items-center.mb-3(data-aos='fade-left')
            .col-auto
              img(src='@/assets/curso/t1/f3.svg' alt='2' style='max-width:55px')
            .col
              p.mb-0 Favorece la composición de objetos sobre la herencia.
          hr

    p.text-center Para EcuRed (s. f.), los patrones de diseño tienen las siguientes características:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4(data-aos='fade-right')
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
          img(src='@/assets/curso/t1/f5.svg', alt='Patrones GOF')
      .p-4.tarjeta.tarjeta--azul(y="45.9%" x="7.4%" numero="")
        p Crea diferentes familias de objetos relacionados o dependientes, como, por ejemplo, la creación de diferentes elementos de una interfaz gráfica.
      .p-4.tarjeta.tarjeta--azul(y="54.75%" x="7.4%" numero="")
        p Define una interfaz para crear un objeto, pero permite que las subclases determinen la clase a implementar.
      .p-4.tarjeta.tarjeta--azul(y="63.6%" x="7.4%" numero="")
        p Se basa en la clonación de objetos copiándolos de un prototipo.
      .p-4.tarjeta.tarjeta--azul(y="72.38%" x="7.4%" numero="")
        p Restringe una clase a una sola instancia y provee un punto global de acceso a la clase.
      .p-4.tarjeta.tarjeta--azul(y="80.25%" x="7.4%" numero="")
        p Separa la construcción de objetos complejos de su representación.
      .p-4.tarjeta.tarjeta--azul(y="45.9%" x="34.95%" numero="")
        p Convierte una interfaz de una clase en otra.
      .p-4.tarjeta.tarjeta--azul(y="54.75%" x="34.95%" numero="")
        p Desacopla una abstracción de su implementación, permitiendo modificarlas independientemente.
      .p-4.tarjeta.tarjeta--azul(y="63.6%" x="34.95%" numero="")
        p Construye objetos complejos a partir de otros más simples, utilizando para ello la composición recursiva y una estructura de árbol.
      .p-4.tarjeta.tarjeta--azul(y="72.5%" x="34.95%" numero="")
        p Permite añadir dinámicamente funcionalidad a un objeto existente, evitando heredar sucesivas clases para incorporar la nueva funcionalidad.
      .p-4.tarjeta.tarjeta--azul(y="80.65%" x="34.95%" numero="")
        p Permite una interfaz unificada para un conjunto de interfaces en un subsistema.
      .p-4.tarjeta.tarjeta--azul(y="88.8%" x="34.95%" numero="")
        p Emplea un uso compartido para eliminar o reducir la redundancia cuando se tiene gran cantidad de objetos con información idéntica.
      .p-4.tarjeta.tarjeta--azul(y="97%" x="34.95%" numero="")
        p Proporciona un objeto sustituto para controlar el acceso a otro.
      .p-4.tarjeta.tarjeta--azul(y="45.65%" x="63.25%" numero="")
        p Permite que más de un objeto tenga la posibilidad de atender una petición.
      .p-4.tarjeta.tarjeta--azul(y="61%" x="63.25%" numero="")
        p Encapsula una petición como un objeto y permite “deshacer” la petición.
      .p-4.tarjeta.tarjeta--azul(y="69.8%" x="63.25%" numero="")
        p Permite construir un intérprete de lenguaje para una gramática simple y sencilla.
      .p-4.tarjeta.tarjeta--azul(y="79%" x="63.25%" numero="")
        p Define una interfaz que declara los métodos necesarios para acceder secuencialmente a una colección de objetos sin exponer su estructura interna.
      .p-4.tarjeta.tarjeta--azul(y="88%" x="63.25%" numero="")
        p Coordina las relaciones entre sus asociados. Permite la interacción de varios objetos, sin generar acoples fuertes en esas relaciones.
      .p-4.tarjeta.tarjeta--azul(y="96.5%" x="63.25%" numero="")
        p Almacena el estado interno de un objeto y lo restaura posteriormente.
      .p-4.tarjeta.tarjeta--azul(y="45.5%" x="95.05%" numero="")
        p Dependencia de uno a muchos para notificar cambios de estado de un objeto.
      .p-4.tarjeta.tarjeta--azul(y="54.4%" x="95.05%" numero="")
        p Permite a un objeto alterar su comportamiento dependiendo del estado interno del mismo.
      .p-4.tarjeta.tarjeta--azul(y="63.2%" x="95.05%" numero="")
        p Define familias de algoritmos, los encapsula y maneja su selección.
      .p-4.tarjeta.tarjeta--azul(y="72%" x="95.05%" numero="")
        p Define el esqueleto de un algoritmo y permite que clases derivadas redefinan ciertos pasos.
      .p-4.tarjeta.tarjeta--azul(y="81.3%" x="95.05%" numero="")
        p Operaciones aplicadas a elementos de una estructura de objetos.

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
