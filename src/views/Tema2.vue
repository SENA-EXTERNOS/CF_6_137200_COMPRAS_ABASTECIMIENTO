<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Orden de pedido

    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/temas/tema2/t2-1.svg', alt='').mb-3
      .col-lg-6
        .bloque-texto-1
          .bloque-texto-1__texto
            p.mb-0 Posterior a la caracterización de la disponibilidad de productos, hay un aspecto muy importante: la <b>orden de pedido</b>, también conocida como <b>orden de compra</b>. Ambas son un tipo de documento que tiene la función principal de hacer un requerimiento de mercancía a un proveedor o vendedor; se realizan de manera regular y se espera que coincidan con las facturas emitidas por el proveedor de la mercancía. La orden de pedido es usada, tanto en comercio regular como en comercio internacional (factura proforma).

    h4.my-4 Características de la orden de pedido

    .row.justify-content-center.mt-5
      p.text-bold En una orden de compra legítima son necesarias las siguientes características:
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema2/t2-2.svg', alt='')      

    h4.my-4 Validaciones de las órdenes de pedido
    p Las órdenes de pedido u órdenes de compra, deben contar con ciertas validaciones para que su uso y funcionalidad sean efectivas. Conozca en detalle sobre tales validaciones, visualizando con atención el siguiente video. Procure llevar registro de lo más destacado en su libreta personal de apuntes.
    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  

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
