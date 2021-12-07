<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Patrones comportamentales

    .row.align-items-end.justify-content-center.mb-5.bg3
      .col-lg-6.ofVisible
        p.mb-5 Como se había mencionado en los conceptos GOF, los patrones de diseño comportamentales se centran en definir la forma en cómo los objetos interactúan entre ellos por medio de mensajes. 
      .col-lg-5
        figure
          img(src='@/assets/curso/t3/f1.svg' alt='imagen relacionada')

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Estrategia

    .row.align-items-center.mb-4 
      .col-lg-7.tarjeta.ofvisible(style='background-color:#1565c0;')
        .col-auto.ms-5
          img(src='@/assets/curso/comilla1.svg' alt='"' style='width:73px;margin-top:-10px;')
        .col-11.mx-auto.p-5
          p.text-white El patrón estrategia permite encapsular un conjunto de algoritmos de forma que puedan ser seleccionados dinámicamente durante el tiempo de ejecución de acuerdo con las acciones del cliente. Este patrón es una de las formas en las que se ven reflejadas fácilmente las características de la programación orientada a objetos, particularmente, lo referente a encapsulamiento y polimorfismo.
          h6.text-right.fRight.mb-5 <span class='text-white'>(Landa, 2018c)</span> <i class='fas fa-square cac'></i>
      .col-lg-5.p-4(style='background-color:rgba(21,101,192,.15);')
        .titulo-sexto.color-acento-contenido
          span 
            b Figura 2 
            | Ejemplo de Patrón estrategia
        figure
          img(src='@/assets/curso/t3/f2.svg' alt='imagen relacionada')

    p.mb-5 Este patrón de diseño es útil cuando una misma funcionalidad puede ser provista usando diferentes mecanismos, algoritmos o estrategias, que serán seleccionadas dependiendo de las acciones realizadas por el cliente en el momento que está ejecutando el programa.

    .col-lg-10.border12.p-5.mx-auto(style='background-color:rgba(77,208,225,.25)')
      .row.align-items-center.justify-content-center
        .col-lg-5
          p Para un mejor entendimiento del patrón, suponga que quiere implementar una calculadora, la cual provee un conjunto de operaciones (suma, resta, multiplicación y división) que serán usadas por el cliente según su deseo. Cada una de estas operaciones representa una estrategia diferente y será el cliente quien invocará la ejecución de cada una de ellas dependiendo de su deseo, por medio de una interfaz que, usando las propiedades del polimorfismo, se transformará para poder responder a cada solicitud.
        .col-lg-5
          figure
            img(src='@/assets/curso/t3/f3.svg' alt='imagen relacionada')

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Comando

    .row.align-items-center.mb-5
      .col-lg-6
        .tarjeta(style='background-color:rgba(255,202,40,.29);padding:1rem 1000px 1rem 2rem;margin: 0 -1000px 0 0')
          p El patrón comando permite aislar los objetos que realizan una petición de los objetos concretos encargados de recibir y realizar dicha acción. Esto permite, entre otras cosas, que las peticiones puedan ser enviadas a varios receptores y, si se maneja el estado de las solicitudes, controla acciones de tipo Undo y Redo.
          p.mb-0 El patrón comando necesita la implementación de varios elementos (Landa, 2018c), así:
      .col-lg-6(data-aos='fade-left')
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t3/f4.svg' alt='imagen relacionada')
          .p-2.tarjeta.tarjeta--gris(y="31.2%" x="30.5%" numero="")
            h5.mb-0 Comando: es la clase que sirve de puente entre el cliente y los receptores.
          .p-2.tarjeta.tarjeta--gris(y="44%" x="33.8%" numero="")
            h5.mb-0 
              em Invoker: 
              | elemento usado por los clientes y que le solicita al comando llevar a cabo una acción.
          .p-2.tarjeta.tarjeta--gris(y="57%" x="38.1%" numero="")
            h5.mb-0 Cliente: invoca la ejecución de las acciones desde el Invoker.
          .p-2.tarjeta.tarjeta--gris(y="69.5%" x="42.8%" numero="")
            h5.mb-0 IComando: interfaz donde se especifican las operaciones a ejecutar.
          .p-2.tarjeta.tarjeta--gris(y="82.5%" x="47.4%" numero="")
            h5.mb-0 Receptor: clase que realiza la acción.
          .p-2.tarjeta.tarjeta--gris(y="82.5%" x="67.4%" numero="")
            h5.mb-0 Ejecutar: operación que necesita ser llevada a cabo.

    .col-lg-7.mx-auto.mb-5
      p.text-center En la Figura 3, se puede ver cada uno de los componentes del patrón y cómo interactúan entre ellos.
      .titulo-sexto.color-acento-contenido
        span 
          em Figura 3 
          | Diagrama patrón comando
      img(src='@/assets/curso/t3/f5.svg' alt='imagen relacionada')

    .col-lg-10.border12.pt-5.px-5.mx-auto(style='background-color:rgba(77,208,225,.25)')
      .row.align-items-center.justify-content-center
        .col-lg-5
          p Para entender mejor este patrón, imagine el siguiente contexto: una persona (cliente) quiere hacer uso del televisor y, para poder realizar esto, hace todas las solicitudes de servicios por medio del control remoto (Invoker). El control remoto se comunica con una interfaz que se encarga de responder a las solicitudes de cada uno de los comandos que el usuario puede hacer, como, por ejemplo, prender el televisor, apagar el televisor, subir el volumen, etc. Cada comando realiza una acción particular sobre el televisor (Receptor).
        .col-lg-5
          figure
            img(src='@/assets/curso/t3/tv.svg' alt='imagen relacionada')

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 
        em Iterator

    p Este patrón de diseño está orientado al trabajo con colecciones y facilita el acceso a todos los elementos de la colección sin tener la necesidad de conocer su estructura.
    p En este patrón, se reconocen dos elementos clave: los enumeradores y los iteradores:

    .row.justify-content-center
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo='Los enumeradores')
            p Como su nombre lo indica, es el encargado de establecer la secuencia con la cual se puede conocer el siguiente elemento de la estructura.
          div(titulo='Los iteradores')
            p Corresponden a un mecanismo que permite recorrer la estructura de acuerdo con su secuencia de inicio a fin.
      .col-lg-4
        figure
          img(src='@/assets/curso/t3/f8.svg' alt='imagen relacionada')

    p El enumerador, por lo tanto, se encarga de implementar un conjunto de métodos estándar para poder establecer la secuencia con la que se debe recorrer la estructura. Entre los métodos más comunes, se encuentra, por ejemplo, el método 
      em moveNext()
      | , el cual indica si existe o no un próximo elemento por recorrer; el método 
      em Current()
      | , que devuelve el valor actual de la colección según la posición actual en la secuencia; y el método 
      em Reset()
      | , que permite iniciar nuevamente la secuencia desde su punto de partida. El iterador necesita del enumerador para poder hacer el proceso de recorrido (Landa, 2018c).
    p En la siguiente figura, se puede ver cada uno de los componentes del patrón y cómo interactúan entre ellos.

    .row.align-items-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          span 
            b Figura 4. 
            | Diagrama patrón iterador
        figure
          img(src='@/assets/curso/t3/f9.svg' alt='imagen relacionada')
      .col-lg-5
        p Este tipo de operaciones son tan comunes en los sistemas actuales que los lenguajes de programación ya poseen una implementación propia del patrón iterador.

        
</template>

<script>
export default {
  name: 'Tema3',
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
