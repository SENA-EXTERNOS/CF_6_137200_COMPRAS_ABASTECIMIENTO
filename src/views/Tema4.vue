<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Verificación

    .t4-bkg
      .row.justify-content-center
        .col-lg-2
          img(src='@/assets/curso/temas/tema4/t4-1.svg', alt='Texto que describa la imagen').img-movil
        .col-lg-10
          p La verificación de los productos adquiridos en el proceso de compra se realiza a nivel interno. Consiste en revisar los aspectos relevantes que tienen que ver con las órdenes de pedidos emitidos, donde se revisan las cantidades, calidades y referencias, además de requerimientos técnicos como certificaciones de calidad, empaques, entre otros. 
      
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 4.1 Tipos de verificación   

    .row.justify-content-center.mt-5
      p Existen dos tipos principales de verificaciones, los cuales son:

    .bkg-slyder.px-5.py-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            h2 Verificaciones documentales:
            p En estas se verifican los aspectos documentales, como declaraciones de importación, tarjetas seriales, facturas de compraventa, documentos de transporte, certificaciones de origen, certificaciones ambientales, certificaciones de calidad, entre otras muchas. Estas aplican tanto para mercados internos como para mercados internacionales (importaciones, principalmente).
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema4/t4-2.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-8
            h2 Verificaciones físicas: 
            p En estas se realizan comprobaciones físicas de los elementos adquiridos, en las cuales se pueden requerir conteos, cotejo de referencias, condiciones de entrega, condiciones de empaque y embalaje, fechas y lotes de producción y revisiones de las descripciones de los objetos de compra contra lo recibido por parte del proveedor.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema4/t4-3.svg', alt='Texto que describa la imagen').mt-2

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-cajon-1.p-4
          p Amplíe a continuación la información sobre las características e importancia de la verificación.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 4.2 Características e importancia

    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='Texto que describa la imagen').mb-3    
      .col-lg-7
        .bloque-texto-2
          .bloque-texto-2__texto
            p.mb-0 Una buena gestión de verificación busca generar valor, ya que si las organizaciones son cuidadosas con las condiciones de entrega, se propende por la reducción de reprocesos por productos no conformes con la calidad ofrecida a los clientes, además de evitar devoluciones tanto de materias primas adquiridas a diversos proveedores, como de productos terminados a los clientes de la organización. Los reprocesos afectan significativamente por la pérdida de recursos en logística por concepto de transporte, almacenaje, distribución física, y el más indeseable: pérdida de imagen en la organización.

    .row.justify-content-center.mt-2
      .col-lg-8
        .cajon.color-cajon-1.p-4
          p Pasemos ahora a la programación que se requiere para hacer el proceso de compra.

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
