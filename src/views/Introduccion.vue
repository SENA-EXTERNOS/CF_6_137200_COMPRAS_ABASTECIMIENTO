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
        img(src='@/assets/curso/temas/intro.svg', alt='')
      .col-lg-9
        p Apreciado aprendiz, bienvenido a este componente formativo, donde usted conocerá sobre los planes y programas de compras; un recurso que le permitirá consolidar los requerimientos de productos de acuerdo con el procedimiento interno y la política de compras, así como establecer un plan de compras según requerimientos de la empresa y la política de abastecimiento. 
        p Conviértase en todo un experto en la elaboración de planes de compras y aplique los métodos de programación y presupuesto debidos para tal fin. Afiance sus saberes y habilidades para la adquisición de bienes y servicios rentables para usted y su organización y sepa elaborar y aplicar el plan de compras que se debe llevar a cabo.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
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
