<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    img(src='@/assets/curso/t2/f1.jpg' alt='imagen relacionada').mb-5

    p 
    p 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 

    p.mb-5 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__texto.p-4
        p.mb-0 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t2/f2.jpg')})`}"
      )

    p 

    .col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span 
      img(src='@/assets/curso/t2/f3.svg' alt='')
      .row
        .col-md-6.p-4
          p.mb-0 
        .col-md-6.p-4
          p 
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | 
            li 
              i.lista-ul__vineta
              | 
            li 
              i.lista-ul__vineta
              | 
            li 
              i.lista-ul__vineta
              | 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 

    p 

    .col-lg-10.mx-auto.mb-5
      LineaTiempoD.color-primario
        .p-4(titulo='' numero='')
          p 
          .row.align-items-center
            .col-lg-4
              p 
              p 
              p 
            .col-lg-8
              figure
                img(src='@/assets/curso/t2/f4.svg' alt='')
        .p-4(titulo='' numero='')
          p 
          .row.align-items-center
            .col-lg-4
              p 
              p 
              p 
            .col-lg-8
              figure
                img(src='@/assets/curso/t2/f5.svg' alt='')
        .p-4(titulo='' numero='')
          p 
          .row.align-items-center
            .col-lg-4
              p 
              p 
              p 
            .col-lg-8
              figure
                img(src='@/assets/curso/t2/controlador.svg' alt='')

    p.mb-5 

    .col-lg-8.mx-auto.mb-5.p-5(style='background-color: #F3F9FF')
      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row.align-items-center 
          .col-md-8
            p.mb-0 
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f6.svg' alt='')
        .row.align-items-center 
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f7.svg' alt='')
          .col-md-8
            p.mb-0 
        .row.align-items-center 
          .col-md-8
            p.mb-0 
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f8.svg' alt='')
        .row.align-items-center 
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f9.svg' alt='')
          .col-md-8
            p.mb-0 
        .row.align-items-center 
          .col-md-8
            p.mb-0 
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f10.svg' alt='')
        .row.align-items-center 
          .col-lg-4.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f11.svg' alt='')
          .col-md-8
            p.mb-0 
        .row.align-items-center.justify-content-center 
          .col-md-12
            p.mb-0 
          .col-lg-10
            figure
              img(src='@/assets/curso/t2/f12.svg' alt='')

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 

    .row.p-4.ofVisible.align-items-center.mb-5(style='background-color:rgba(77,208,225,.15)').pRelative
      .col-lg-9
        p.mb-0 
      .col-lg-3.pAbsolute
        figure
          img(src='@/assets/curso/t2/f13.svg' alt='')

    .col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span 
      tabla

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 

    p.mb-5 

    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-6.mb-4.mb-lg-0
            .bloque-texto-a__texto.p-4
              p 
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f14.svg' alt='')

    #Microservicios.bg2.pRelative.p-5.mb-5
      .cRedondo.fcs.text-white.mx-auto.col-auto.px-5.py-4
        h3.text-center 
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
        .col-lg-auto.col-sm-10
          figure
            img(src='@/assets/curso/t2/f18.svg' alt='')
        .col-lg-auto.col-sm-10
          figure
            img(src='@/assets/curso/t2/f19.svg' alt='')
        .col-lg-auto.col-sm-10
          figure
            img(src='@/assets/curso/t2/f20.svg' alt='')
        .col-lg-auto.col-sm-10
          figure
            img(src='@/assets/curso/t2/f21.svg' alt='')
        .col-lg-auto.col-sm-10
          figure
            img(src='@/assets/curso/t2/f22.svg' alt='')

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 

    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f23.svg' alt='')
      .col-lg-6
        .cajon.color-primario.p-4
          p.mb-0 

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 

    p 

    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f24.svg' alt='')
      .col-lg-6
        p 
        .cajon.color-primario.p-4
          p.mb-0 

    h3.text-center 

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f25.svg' alt='')
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f26.svg' alt='')
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f27.svg' alt='')
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f28.svg' alt='')
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f29.svg' alt='')
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f30.svg' alt='')
      .py-3.py-md-4(titulo='')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 
            p 
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
