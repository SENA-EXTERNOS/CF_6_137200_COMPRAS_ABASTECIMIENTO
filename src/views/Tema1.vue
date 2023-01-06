<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Disponibilidad de producto

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
        .bloque-texto-g1__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1-1.svg')})`}")
        .bloque-texto-g1__texto.p-4
          p La disponibilidad de producto refleja la <b>cantidad</b> del producto terminado, que la organización tiene disponible para su comercialización; es muy importante que se encuentre actualizada de manera permanente. Todas las organizaciones deben tener un orden muy estricto en cuanto a los inventarios o <em>stock</em> de productos, pues esto permite acceder a la oferta real, y con confianza, de los artículos que los posibles compradores requieran, así como mantener el flujo de información que se maneja en los inventarios y su necesaria evaluación, lo que manifiesta las cantidades y los valores almacenados en las bodegas de la organización.
   
    h4.my-4 Características de la disponibilidad del producto

    .row.justify-content-center
      p Las características de la disponibilidad del producto están dadas por su organización y su gestión de inventario. Hacen referencia a las particularidades tenidas en cuenta para clasificar los productos disponibles según sus elementos esenciales como, por ejemplo:     
      
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema1/t1-3.svg', alt='')
      
    h4.my-4 Métodos de disposición de productos

    .row.justify-content-center.mt-5
      .col-lg-2
        img(src='@/assets/curso/temas/tema1/t1-2.svg', alt='').img-movil
      .col-lg-10
        p Los métodos para disponer los productos están ligados a las políticas de la organización y a la disponibilidad de su inventario. Esto refleja el estado de los productos ante los usuarios, en función de cuántos productos tiene la empresa en <em>stock</em>, disponibles para su comercialización inmediata. Los métodos de disponibilidad buscan que no existan fallas o productos con insuficiente cantidad de inventarios.  

    .row.justify-content-center.mt-5
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema1/t1-4.svg', alt='')

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
