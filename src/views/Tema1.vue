<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t1/f1.jpg' alt='Laptop')
      .col-lg-7
        p 
        .col-lg-8.mx-auto
          hr
          .row.align-items-center.mb-3
            .col-auto
              img(src='@/assets/curso/t1/f2.svg' alt='1' style='max-width:55px')
            .col
              p.mb-0 
          hr
          .row.align-items-center.mb-3
            .col-auto
              img(src='@/assets/curso/t1/f3.svg' alt='2' style='max-width:55px')
            .col
              p.mb-0 
          hr

    p.text-center 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t1/f4.svg' alt='imagen relacionada')
      .col-lg-6
        ul.lista-ul--color
          li 
            i.lista-ul__vineta.cac
            | 
          li 
            i.lista-ul__vineta.cac
            | 
          li 
            i.lista-ul__vineta.cac
            | 
          li 
            i.lista-ul__vineta.cac
            | 
          li 
            i.lista-ul__vineta.cac
            | 
          li 
            i.lista-ul__vineta.cac
            | 

    p.mb-5 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t1/f5.png', alt='Patrones GOF')
      .p-4(y="46.2%" x="7.4%" numero="")
        p bla bla bla
      .p-4(y="55.05%" x="7.4%" numero="")
        p bla bla bla
      .p-4(y="63.94%" x="7.4%" numero="")
        p bla bla bla
      .p-4(y="72.8%" x="7.4%" numero="")
        p bla bla bla
      .p-4(y="80.7%" x="7.4%" numero="")
        p bla bla bla
      .p-4(y="46.2%" x="34.97%" numero="")
        p bla bla bla
      .p-4(y="55.05%" x="34.97%" numero="")
        p bla bla bla
      .p-4(y="63.94%" x="34.97%" numero="")
        p bla bla bla
      .p-4(y="72.8%" x="34.97%" numero="")
        p bla bla bla
      .p-4(y="80.7%" x="34.97%" numero="")
        p bla bla bla
      .p-4(y="45.94%" x="64.1%" numero="")
        p bla bla bla
      .p-4(y="61.5%" x="64.1%" numero="")
        p bla bla bla
      .p-4(y="70.25%" x="64.1%" numero="")
        p bla bla bla
      .p-4(y="79.45%" x="64.1%" numero="")
        p bla bla bla
      .p-4(y="88.55%" x="64.1%" numero="")
        p bla bla bla
      .p-4(y="97%" x="64.1%" numero="")
        p bla bla bla
      .p-4(y="45.85%" x="95.09%" numero="")
        p bla bla bla
      .p-4(y="54.78%" x="95.09%" numero="")
        p bla bla bla
      .p-4(y="63.55%" x="95.09%" numero="")
        p bla bla bla
      .p-4(y="72.8%" x="95.09%" numero="")
        p bla bla bla
      .p-4(y="84.45%" x="95.09%" numero="")
        p bla bla bla

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
