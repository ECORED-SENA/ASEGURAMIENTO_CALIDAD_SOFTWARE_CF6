<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 8
      h1 Diagrama de componentes

    p El diagrama de componentes es uno de los diagramas propuestos en UML que representa una vista estática del sistema de información y hace parte de los diagramas estructurales. Este diagrama proporciona una vista de alto nivel de los componentes dentro del sistema y generalmente se construye posterior a la construcción del diagrama de clases.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-secundario.p-4
          p.mb-0 Un componente puede ser  <em>software</em>, como, por ejemplo, las bases de datos o una interfaz de usuario; y también puede ser <em>hardware</em>, como un dispositivo o incluso una unidad de negocio, como, por ejemplo, la nómina, el inventario, proveedores, etc.
        p Este tipo de diagrama es muy útil para arquitecturas orientadas a servicios, permite mostrar la estructura general del código, por lo que puede ser usado para mostrar las funciones del sistema que se construye a cualquier parte interesada.
      .col-lg-4.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t8/f1.svg' alt='imagen relacionada')

    p.mb-5 Los elementos que conforman un diagrama de componente son los siguientes: (Diagramas UML, 2019):


    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.fcacb(titulo='Componente')
        .row.justify-content-around
          .col-lg-5
            h3 Componente
            p Es una abstracción de un nivel más alto que las clases y representa unidades lógicas del sistema.
          .col-lg-5
            figure
              img(src='@/assets/curso/t8/f2.svg' alt='imagen relacionada')
      .py-3.py-md-4.fcacb(titulo='Interfaz')
        .row.justify-content-around
          .col-lg-5
            h3 Interfaz
            p Las interfaces siempre se asocian con los componentes y representan el lugar que debe ser usado por otros componentes para poder establecer comunicación con él.
          .col-lg-5
            figure
              img(src='@/assets/curso/t8/f3.svg' alt='imagen relacionada')
      .py-3.py-md-4.fcacb(titulo='Relación de dependencia')
        .row.justify-content-around
          .col-lg-5
            h3 Relación de dependencia
            p Representa una relación más general entre dos componentes, para indicar que un componente requiere de otro para poder ejecutar su trabajo.
          .col-lg-5
            figure
              img(src='@/assets/curso/t8/f4.svg' alt='imagen relacionada')
      .py-3.py-md-4.fcacb(titulo='Paquetes')
        .row.justify-content-around
          .col-lg-5
            h3 Paquetes
            p También es posible utilizar los paquetes para agrupar lógicamente un conjunto de componentes dentro de un subsistema.
          .col-lg-5
            figure
              img(src='@/assets/curso/t8/f5.svg' alt='imagen relacionada')
      .py-3.py-md-4.fcacb(titulo='Ejemplo')
        .row.justify-content-around
          .col-lg-5
            h3 Ejemplo
            p En la figura, se muestra un ejemplo de un diagrama de componentes para un sistema de gestión de una clínica veterinaria.
          .col-lg-5
            figure
              img(src='@/assets/curso/t8/f6.svg' alt='imagen relacionada')

    #Sintesis.row.align-items-center
      .col-lg-6
        h3 C.	Síntesis
        p Los patrones de diseño de  <em>software</em>  son de gran importancia para los desarrolladores, ya que estos recogen un conjunto de buenas prácticas que fueron abordadas por gran cantidad de personas en el contexto de problemas reales muy bien definidos. Por lo anterior, ya no es necesario iniciar desde cero para plantear una solución.
        p Los patrones de diseño, por sus características, están categorizados en tres grandes grupos: comportamentales, creacionales o estructurales. Es decir, dependiendo de la forma como se quiere que se comporte una funcionalidad, o como se quiere que se creen los objetos, o como se quiere definir su estructura, se van a tener que implementar varios patrones de diseño al mismo tiempo. De hecho, el desarrollo de un proyecto profesional requerirá siempre la implementación de varios patrones de diseño.
        p Existen muchos más patrones de diseño que los desarrollados en este componente formativo, y a medida que pase el tiempo, seguramente aparecerán muchos más. Se le invita a observar los materiales complementarios para profundizar en la temática.
      .col-lg-4.mx-auto.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t8/f7.svg' alt='imagen relacionada')

    p.text-center A continuación, se muestra un mapa conceptual de los elementos más importantes desarrollados en este componente:

    img(src='@/assets/curso/t8/f8.svg' alt='imagen relacionada')

</template>

<script>
export default {
  name: 'Tema8',
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
