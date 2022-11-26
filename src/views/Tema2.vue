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
        img(src='@/assets/curso/temas/tema2/t2-1.svg', alt='Texto que describa la imagen').mb-3
      .col-lg-6
        .bloque-texto-1
          .bloque-texto-1__texto
            p.mb-0 Hay un aspecto muy importante: la orden de pedido, también conocida como orden de compra. Estas son un tipo de documento que tiene la función principal de hacer un requerimiento de mercancía a un proveedor o vendedor; se realizan de manera regular y se espera que coincidan con las facturas emitidas por el proveedor de la mercancía. La orden de pedido es usada tanto en comercio regular como en comercio internacional (factura proforma).

      p.mt-5.text-bold ¿Qué características tiene la orden de pedido?

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 2.1 Características 

    .row.justify-content-center.mt-5
      p.text-bold En una orden de compra legítima son necesarias las siguientes características:
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema2/t2-2.svg', alt='Texto que describa la imagen')      
      
      p.mt-5.text-bold ¿Y qué validaciones necesita la orden de pedido? 

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 2.2 Validaciones 

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO   

      p.mt-5.text-bold Profundicemos más sobre esta teoría.       

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
