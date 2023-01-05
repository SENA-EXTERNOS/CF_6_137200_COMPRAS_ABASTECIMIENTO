<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pronósticos de compra

    .row.justify-content-center
      .col-lg-6
        p Los pronósticos de compra son un ejercicio predictivo de la cantidad de compras que se harán en un futuro cercano o lejano, dentro de unas condiciones medibles y que permiten anticiparse a situaciones benéficas o perjudiciales, ya sea para aprovecharlas o evitarlas. Tales pronósticos se realizan, cada vez con más frecuencia, tanto para la venta de productos como para el aprovisionamiento de materias primas y los insumos necesarios para dichas ventas. De esta manera es posible obtener mejores condiciones y traspasar esos beneficios al cliente final.
      .col-lg-6
        img(src='@/assets/curso/temas/tema3/t3-1.svg', alt='').mb-3
      
    h4.my-4 Tipos de pronósticos y sus características

    .row.justify-content-center.mt-5
      p Los tipos de pronósticos pueden darse por:
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema3/t3-2.svg', alt='')        
   
    p.mt-5 Los pronósticos de compras suelen no ser acertados al 100 %, pero aseguran un cumplimiento amplio de sí mismos; por otro lado, los pronósticos pueden ser precisos en la medida en que sean cortos, serán confiables en la medida en que sean técnicos y, finalmente, no tienen carácter generalista:

    .row.justify-content-center.mt-5
      .col-auto
        img(src='@/assets/curso/temas/tema3/t3-3.svg', alt='')  
          
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
