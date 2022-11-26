<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mt-5
      .col-lg-3
        img(src='@/assets/curso/temas/intro.svg', alt='Texto que describa la imagen')
      .col-lg-9
        p A continuación, conocerá sobre los planes y programas de compras, un recurso que le permitirá consolidar los requerimientos de productos de acuerdo con el procedimiento interno y la política de compras, así como establecer un plan de compras según requerimientos de la empresa y la política de abastecimiento. Se espera que a futuro pueda elaborar el plan de compras según métodos de programación y presupuesto, y que alcance los conocimientos del proceso de compras para adquirir los bienes y servicios más rentables para la organización, conociendo sobre las políticas de compras que se deben llevar a cabo, con una debida planeación y puesta en marcha del plan de compras en la cadena de suministro de una empresa. 
        p En el siguiente video conocerá la temática a tratar a lo largo del componente formativo.
        p.text-bold ¡Muchos éxitos en este proceso de aprendizaje!

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO  

    .row.justify-content-center.mt-5
      p.text-bold Para ampliar la información descrita anteriormente, veamos lo siguiente.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
