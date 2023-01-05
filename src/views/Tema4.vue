<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Verificación de los productos adquiridos

    .t4-bkg
      .row.justify-content-center
        .col-lg-2
          img(src='@/assets/curso/temas/tema4/t4-1.svg', alt='').img-movil.img
        .col-lg-10
          p La verificación de los productos adquiridos en el proceso de compra se realiza a nivel interno. Consiste en revisar los aspectos relevantes que tienen que ver con las órdenes de pedidos emitidos, donde se revisan las cantidades, calidades y referencias, además de requerimientos técnicos como certificaciones de calidad, empaques, entre otros. 
      
    h4.my-4 Tipos de verificación de productos adquiridos

    .row.justify-content-center.mt-5.mb-4
      p Estos son los tipos principales de verificación de productos adquiridos:

    .bkg-slyder.px-5.py-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            h2 Verificaciones documentales de los productos:
            p Es la verificación que se hace de elementos, tipo documento, como declaraciones de importación, tarjetas seriales, facturas de compraventa, documentos de transporte, certificaciones de origen, certificaciones ambientales, certificaciones de calidad, entre otras muchas. 
            p Las verificaciones documentales aplican para mercados internos y para mercados internacionales (importaciones, principalmente).

          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema4/t4-2.svg', alt='')

        .row.justify-content-center
          .col-md-8
            h2 Verificaciones físicas de los productos:
            p En estas se realizan comprobaciones físicas de los elementos adquiridos, en las cuales se pueden requerir conteos, cotejo de referencias, condiciones de entrega, condiciones de empaque y embalaje, fechas y lotes de producción y revisiones de las descripciones de los objetos de compra, contra lo recibido por parte del proveedor.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema4/t4-3.svg', alt='').mt-2

    h4.my-4 Características e importancia de las verificaciones de productos adquiridos

    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='').mb-3    
      .col-lg-7
        .bloque-texto-2
          .bloque-texto-2__texto
            p.mb-0 Una buena gestión de verificación busca generar valor, ya que, si las organizaciones son cuidadosas con las condiciones de entrega, podrán evitar reprocesos debidos a los productos no conformes con la calidad ofrecida a los clientes. Además, evitan devoluciones de materias primas adquiridas a diversos proveedores, como de productos terminados a los clientes de la organización. Los reprocesos se afectan significativamente por la pérdida de recursos en logística por concepto de transporte, almacenaje, distribución física y, el más indeseable, la pérdida de imagen en la organización.

</template>

<script>
export default {
  name: 'Tema4',
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
