<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Patrones de arquitectura
    
    img(src='@/assets/curso/t2/f1.jpg' alt='imagen relacionada' data-aos='flip-up').mb-5

    p Para hablar de patrones, primero es necesario hablar de arquitectura de <em> software</em>. Esta consiste en una disciplina dentro del desarrollo de <em> software</em>. Como ya se sabe, este desarrollo es algo intangible y puede ser tan complejo como las necesidades que se quieren resolver, por lo tanto, es importante tener en cuenta que, cuando se piensa en la escalabilidad del <em> software </em> y su usabilidad, utilizando los recursos disponibles y sacándole el máximo provecho a esta arquitectura, posibilitando un ciclo de vida mucho más largo, se debe pensar que una aplicación de <em> software </em> es una especie de lego, donde todas sus piezas se encajan para poder cumplir con diversas funciones. 
    p Dentro de estos patrones de arquitectura, se encuentran diferentes tipos, que permiten generar <em> software </em> con mayor rendimiento. Algunos de estos son:

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Patrón multicapa

    p.mb-5 Son patrones de X niveles y se organizan en capas horizontales. Muchas de las aplicaciones informáticas han tomado este patrón como arquitectura, funciona conectando los componentes, pero estos no dependen uno del otro. Cada una de estas capas cumple con una función específica en el desarrollo de la aplicación. Su objetivo primordial es la separación de la lógica de negocios de la lógica de diseño, es decir, separar la capa de datos de la capa de presentación al usuario. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.reverse
      .bloque-texto-g__texto.p-4
        p.mb-0 La ventaja que ofrece consiste en que el desarrollo se puede llevar a cabo en varios niveles. En caso de realizar algún cambio, sólo se afecta el nivel requerido, sin tener que revisar todo el código. Un ejemplo de esto es el modelo de interconexión de sistemas abiertos, donde la capa de presentación se encarga de todo el diseño y desarrollo visual de parte del usuario, mientras que la capa de negocio se encarga de ejecutar las reglas y la lógica del negocio. Cada capa tiene funciones específicas, una capa informa cómo debe comportarse la venta de un producto, teniendo en cuenta la lógica y reglas establecidas para registrar esa venta, de esta forma, el patrón permite delegar funcionalidades propias de cada capa.
      .bloque-texto-g__img(data-aos='fade-left'
        :style="{'background-image': `url(${require('@/assets/curso/t2/f2.jpg')})`}"
      )

    p En la siguiente figura, se puede observar la arquitectura en tres capas. Fue creada en Microsoft Visio 2003, para ayudar a entender gráficamente y de una forma más fácil este tema.

    .col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span 
          b Figura 1 
          | Arquitectura de tres capas

      img(src='@/assets/curso/t2/f3.svg' alt='' data-aos='flip-left')
      .row.px-2
        .col-md-6.p-4.me-0(style='background-color: rgba(77,208,225,.15)' data-aos='fade-right')
          p.mb-0 Este patrón puede dividirse entre capas tantas veces se decida según su arquitectura, solo se debe tener en cuenta que, aunque es una buena forma de desarrollar, si existen muchas capas, también podría ser contraproducente, así que depende del juicio del arquitecto de <em> software </em> la distribución de capas que contemple.
        .col-md-6.p-4.ms-0(style='background-color: rgba(255,202,40,.15)' data-aos='fade-left')
          h3 Ventajas
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Facilidad al momento de realizar pruebas.
            li 
              i.lista-ul__vineta
              | Facilidad para el mantenimiento de la aplicación.
            li 
              i.lista-ul__vineta
              | Se puede desarrollar por separado, delegando capas por desarrollador.
            li 
              i.lista-ul__vineta
              | Permite actualizar y mejorar la aplicación por separado. 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Patrón Modelo Vista Controlador
	
    p Este modelo, también identificado como MVC, es una arquitectura que también se separa por capas, solo que en este caso son tres capas las que se dedican o son responsables de delegar funcionalidades específicas, como se puede observar a continuación:

    .col-lg-10.mx-auto.mb-5
      LineaTiempoD.color-primario
        .p-4(titulo='Modelo' numero='1')
          p Es una representación de los datos, maneja la lógica del negocio y la persistencia.
          .row.align-items-center
            .col-lg-4
              .vinetaBG
                p.mb-0 Accede a la capa de la base de datos.
              .vinetaBG
                p.mb-0 En el modelo se definen las reglas del negocio.
              .vinetaBG
                p.mb-0 Contiene la información extraída de la base de datos para después ser manipulada.
            .col-lg-8
              figure
                img(src='@/assets/curso/t2/f4.svg' alt='')
        .p-4(titulo='Vista' numero='2')
          p Se encarga de la interfaz de usuario, la interacción del usuario con el sistema y el despliegue de información.
          .row.align-items-center
            .col-lg-4
              .vinetaBG
                p.mb-0 Muestra la información solicitada al modelo.
              .vinetaBG
                p.mb-0 Recibe los eventos que ejecuta del usuario en la interacción de la vista y se conecta con el controlador.
              .vinetaBG
                p.mb-0 Recibe información del usuario para ser enviada al modelo y que sea almacenada.
            .col-lg-8
              figure
                img(src='@/assets/curso/t2/f5.svg' alt='')
        .p-4(titulo='Controlador' numero='3')
          p El controlador no es más que el interlocutor entre la vista y el modelo, gestionando y adaptando la información entre ellas.
          .row.align-items-center
            .col-lg-4
              .vinetaBG
                p.mb-0 Recibe peticiones desde la vista por medio de eventos.
              .vinetaBG
                p.mb-0 Envía peticiones al modelo de datos de información.
              .vinetaBG
                p.mb-0 Organiza la información para el despliegue en la vista.
            .col-lg-8
              figure
                img(src='@/assets/curso/t2/controlador.svg' alt='')

    p.mb-5 Es así como se pueden observar algunas de las responsabilidades de cada capa, para lo que hay que seguir unos pasos específicos al momento de iniciar sesión en una aplicación, observe:

    .col-lg-8.mx-auto.mb-5.p-5(style='background-color: #F3F9FF')
      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row.align-items-center 
          .col-md-8
            p.mb-0 El usuario ingresa los datos de acceso, 
              em login 
              | y 
              em password
              | , en la vista. Esta información se solicita al usuario dentro de dos cajas de texto.
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f6.svg' alt='' data-aos='fade-left')
        .row.align-items-center 
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f7.svg' alt='' data-aos='fade-right')
          .col-md-8
            p.mb-0 El usuario da clic en el botón ingresar, siendo esta una petición mediante un evento desde la vista.
        .row.align-items-center 
          .col-md-8
            p.mb-0 La vista envía esta petición mediante el evento al controlador y recibe los datos ingresados por el usuario, por medio de un arreglo.
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f8.svg' alt='' data-aos='fade-left')
        .row.align-items-center 
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f9.svg' alt='' data-aos='fade-right')
          .col-md-8
            p.mb-0 El controlador envía esta información y manda una petición de consulta al modelo.
        .row.align-items-center 
          .col-md-8
            p.mb-0 El modelo, que es una representación de los datos, verifica si el usuario existe y la contraseña es la correcta.
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f10.svg' alt='' data-aos='fade-left')
        .row.align-items-center 
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f11.svg' alt='' data-aos='fade-right')
          .col-md-8
            p.mb-0 El modelo envía el resultado al controlador, que fue quien hizo la petición de consulta.
        .row.align-items-center.justify-content-center 
          .col-md-12
            p.mb-0 El controlador devuelve el resultado a la vista y, si concuerda, permite el ingreso al usuario; si no, le devuelve un mensaje de error.
          .col-lg-10
            figure
              img(src='@/assets/curso/t2/f12.svg' alt='')

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Arquitectura monolítica

    .row.p-4.align-items-center.mb-5
      .col-lg-9
        p.mb-0(style='background-color:rgba(77,208,225,.15); padding: 1.5rem 600px 1.5rem 6rem;margin:0 -600px 0 -6rem;') La arquitectura monolítica es aquella en la que el<em> software </em>está estructurado de forma tal que todos los aspectos funcionales del mismo quedan acoplados y sujetos en un mismo programa. En esta arquitectura, cada proceso o microservicio es un elemento independiente. Es utilizada en aplicaciones en las que todo se desarrolla en una misma parte, aunque también se utilizan módulos para desarrollar. En el momento de compilarse, lo hace de forma completa, como una sola, y se comprende en una interfaz del lado del cliente, una aplicación del lado del servidor y una base de datos. Al igual que las otras arquitecturas, tiene sus ventajas y desventajas:
      .col-lg-3
        figure
          img(src='@/assets/curso/t2/f13.svg' alt='users, threads, posts' data-aos='fade-left')

    .col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span <em>Tabla 1</em> Ventajas y desventajas de la arquitectura monolítica
      .tabla-b.color-acento-contenido.mb-5
        table
          thead.tabla-b__header
            tr
              th.text-white 
                h4.mb-0 Ventajas
              th.text-white 
                h4.mb-0 Desventajas
          tbody 
            tr
              td
                p F&aacute;cil de probar y debuggear.
              td
                p
                  | Alto acoplamiento:&nbsp; si se hace un cambio en alguna parte del c&oacute;digo, puede cambiar el comportamiento en otra parte del mismo.
            tr
              td
                p F&aacute;cil de desplegar.
              td
                p C&oacute;digo muy grande.
            tr
              td
                p F&aacute;cil de desarrollar.
              td
                p Costos altos al momento de su escalabilidad.
            tr
              td
                p &nbsp;
              td
                p Dif&iacute;cil de mantener.
            tr
              td
                p &nbsp;
              td
                p Dificultad en las mejoras y actualizaciones.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Microservicios

    p.mb-5 Esta arquitectura se enfoca en crear pequeños programas API, que permiten que los servicios se comuniquen, posibilitando que las aplicaciones con estas arquitecturas puedan evolucionar y adaptarse muchísimo mejor. Además, se pueden incluir servicios de otras plataformas u otras aplicaciones, ya que pueden ser consumidos para la manipulación de la información.

    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-7.mb-4.mb-lg-0
            .bloque-texto-a__texto.p-4
              p Dentro de sus características está que cada servicio que se desarrolla se puede hacer de forma independiente, sin que afecte el funcionamiento del resto de la aplicación; además, se crean para solucionar problemas específicos, haciéndolos especializados, y, en caso de que un servicio de estos se vuelva muy grande, puede seguirse dividiendo en más microservicios.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f14.svg' alt='')

    #Microservicios.bg2.pRelative.p-5.mb-5
      .cRedondo.fcs.text-white.mx-auto.col-auto.px-5.py-4
        h3.text-center Entre los beneficios de los microservicios, se tienen:
      .row.mb-4.align-items-end
        .col-lg-4.col-md-6.mx-0.px-0.mb-4
          figure
            img(src='@/assets/curso/t2/f15.svg' alt='')
        .col-lg-4.col-md-6.mx-0.px-0.mb-4
          figure
            img(src='@/assets/curso/t2/f16.svg' alt='')
        .col-lg-4.col-md-6.mx-0.px-0.mb-4
          figure
            img(src='@/assets/curso/t2/f17.svg' alt='')

      .row.align-items-center.justify-content-center
        .col-lg-auto.col-sm-10.hover
          figure
            img(src='@/assets/curso/t2/f18.svg' alt='Agilidad')
          .tarjeta.tarjeta--gris.onlyHover.p-4.mb-4.mx-auto(style='max-width:100%;clear:both;position:absolute;z-index:1')
            p.mb-0 Los desarrolladores pueden trabajar con problemas más pequeños y lograr mejor su comprensión, “divide y vencerás”; además, un grupo de desarrolladores puede ser dividido por microservicios, para después integrar sus funcionalidades, agilizando el desarrollo.
        .col-lg-auto.col-sm-10.hover
          figure
            img(src='@/assets/curso/t2/f19.svg' alt='Escalado flexible')
          .tarjeta.tarjeta--gris.onlyHover.p-4.mb-4.mx-auto(style='max-width:100%;clear:both;position:absolute;z-index:1')
            p.mb-0 Se pueden agregar más funcionalidades sin ningún inconveniente.
        .col-lg-auto.col-sm-10.hover
          figure
            img(src='@/assets/curso/t2/f20.svg' alt='Sencillez en la implementación')
          .tarjeta.tarjeta--gris.onlyHover.p-4.mb-4.mx-auto(style='max-width:100%;clear:both;position:absolute;z-index:1')
            p.mb-0 Como se mencionó antes, la forma de desarrollar estos microservicios es más sencilla porque, al momento de centrarse en problemas más pequeños, permite que la comprensión sea mejor, se pueden entregar avances de forma continua y se pueden corregir errores a tiempo.
        .col-lg-auto.col-sm-10.hover
          figure
            img(src='@/assets/curso/t2/f21.svg' alt='Libertad tecnológica')
          .tarjeta.tarjeta--gris.onlyHover.p-4.mb-4.mx-auto(style='max-width:100%;clear:both;position:absolute;z-index:1')
            p.mb-0 Son aplicaciones pequeñas, que no siguen una misma arquitectura y pueden ser integradas a la aplicación de todas formas.
        .col-lg-auto.col-sm-10.hover
          figure
            img(src='@/assets/curso/t2/f22.svg' alt='Reutilización del código')
          .tarjeta.tarjeta--gris.onlyHover.p-4.mb-4.mx-auto(style='max-width:100%;clear:both;position:absolute;z-index:1')
            p.mb-0 Los microservicios pueden ser reutilizados en diferentes partes de la aplicación.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Diseño de la arquitectura.

    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f23.svg' alt='')
      .col-lg-6
        .cajon.color-primario.p-5
          p.mb-0 Una arquitectura de<em> software </em>describe los componentes básicos de un sistema de<em> software </em>y su combinación interna. En el marco del desarrollo de software, esta arquitectura es la decisión más temprana del diseño de una aplicación. Determina los criterios de calidad, como la mantenibilidad, modificabilidad, seguridad y rendimiento, además, le permite analizar de forma más clara cómo debe comportarse la aplicación que se va a desarrollar, teniendo en cuenta el acceso a ella y su capacidad.

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Estilos arquitectónicos 

    p Los estilos son un complemento de los patrones de diseño, como los arquitectónicos de software, y lo importante aquí es que se preocupan por los stakeholders. Por lo tanto, los estilos se preocupan por el tratamiento estructural del software.

    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f24.svg' alt='')
      .col-lg-6
        p Cuando se aplican estilos arquitectónicos en el desarrollo de software, se le da un valor distintivo a la calidad del software. Los estilos son un conjunto de componentes, como bases de datos o módulos de cómputo, que son utilizados para realizar una función y, por medio de conectores, permiten la comunicación, coordinación y cooperación entre ellos, “el todo es la suma de sus partes”.
        .cajon.color-primario.p-4
          p.mb-0 Un estilo arquitectónico se define teniendo claros los elementos, la forma y la razón por la cual se seleccionan dichos elementos. Dentro de los elementos, se deben tener en cuenta: el procesamiento, los datos y las conexiones. Entre la forma, se deben tener en cuenta: las propiedades y relaciones que deben tener estos elementos para cumplir con su funcionalidad. Y por último, la razón, que no es más que el análisis mediante el cual se seleccionaron esos elementos para cumplir con lo que necesita el cliente o el desarrollador.

    h3.text-center Hay diferentes tipos de estilos arquitectónicos, algunos de los más conocidos son:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo='Arquitectura centrada en datos')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura centrada en datos.
            p Esta arquitectura se selecciona cuando se quiere resolver una necesidad de transformación de datos en cada filtro de información, y estas transformaciones son independientes de cada filtro. Estos filtros son componentes y las tuberías son los medios de comunicación entre los componentes, como se representa en la siguiente imagen. 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f25.svg' alt='')
      .py-3.py-md-4(titulo='Arquitectura Abstractos de datos y POO')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura Abstractos de datos y POO.
            p Se piensa en esta arquitectura si la necesidad de la solución informática es integrar varias fuentes de datos desde diferentes aplicaciones o sobre la misma.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f26.svg' alt='')
      .py-3.py-md-4(titulo='Arquitectura de llamada y retorno')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura de llamada y retorno.
            p Refleja la estructura del lenguaje de programación. Permite al diseñador del<em> software </em>construir una estructura de programa relativamente fácil de modificar y ajustar a escala. Se basa en la bien conocida abstracción de procedimientos/funciones/métodos.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f27.png' alt='')
      .py-3.py-md-4(titulo='Arquitectura orientada a objetos')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura orientada a objetos.
            p Los componentes de un sistema encapsulan los datos y las operaciones que se deben realizar para manipular los datos. La comunicación y la coordinación entre componentes se consiguen a través del paso de mensaje.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f28.svg' alt='')
      .py-3.py-md-4(titulo='Arquitectura orientada a aspecto')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura orientada a aspecto.
            p El uso de AOP puede aislar las diversas partes de la lógica empresarial, reduciendo así el acoplamiento entre las diversas partes de esta lógica, mejorando la reutilización del programa y mejorando la eficiencia del desarrollo, al mismo tiempo.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f29.svg' alt='')
      .py-3.py-md-4(titulo='Arquitectura orientada a servicios (SOA)')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura orientada a servicios (SOA).
            p La Arquitectura Orientada a Servicios es un estilo de arquitectura de TI que se apoya en la orientación a servicios. Y esta orientación a servicios es una forma de pensar en: servicios, su construcción y sus resultados.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f30.svg' alt='')
      .py-3.py-md-4(titulo='Arquitectura estratificada')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Arquitectura estratificada.
            p Se crean diferentes capas y cada una realiza operaciones que progresivamente se aproximan más al cuadro de instrucciones de la máquina. En la capa externa, los componentes sirven a las operaciones de interfaz de usuario.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f31.svg' alt='')

</template>

<script>
export default {
  name: 'Tema2',
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
