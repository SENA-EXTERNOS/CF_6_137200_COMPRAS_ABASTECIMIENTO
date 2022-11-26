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
          p La disponibilidad de producto refleja la cantidad del producto terminado que la organización tiene disponible para su comercialización, y es muy importante que se encuentre actualizada de manera permanente. Todas las organizaciones deben tener un orden muy estricto en cuanto a los inventarios o stock de productos, pues esto permite acceder a la oferta real y con confianza de los artículos que los posibles compradores requieran, así como mantener el flujo de información que se maneja en los inventarios y su necesaria evaluación, lo que manifiesta las cantidades y los valores almacenados en las bodegas de la organización.
      
      p.mt-5 Ahora bien, no basta con tener la disponibilidad del producto. Veamos las características y los métodos usados.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 1.1  Características

    .row.justify-content-center
      p Las características de la disponibilidad del producto están dadas por su organización y su gestión de inventario, por ello podemos caracterizarlos por sus elementos esenciales, como son:      
      
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema1/t1-3.svg', alt='Texto que describa la imagen')
      
      p.mt-5 De acuerdo con lo anterior, en el siguiente gráfico encontrará los métodos utilizados.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 1.2 Métodos

    .row.justify-content-center.mt-5
      .col-lg-2
        img(src='@/assets/curso/temas/tema1/t1-2.svg', alt='Texto que describa la imagen').img-movil
      .col-lg-10
        p Los métodos para disponibilidad de productos están ligados a las políticas de la organización y a la disponibilidad de su inventario. Esto refleja el estado de los productos ante los usuarios en función de cuántos productos tiene en stock disponibles para su comercialización inmediata, y los métodos de disponibilidad buscan que no existan fallas o productos con insuficiente cantidad de inventarios. 

    .row.justify-content-center.mt-5
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema1/t1-4.svg', alt='Texto que describa la imagen')
      
      p.text-bold Una vez conocido lo que caracteriza a la disponibilidad de un producto, ¿qué sigue?

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
