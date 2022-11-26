<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pronósticos

    .row.justify-content-center
      .col-lg-6
        p En cuanto a los pronósticos de una compra, son la predicción de la cantidad de compras que se harán en un futuro cercano o lejano, dentro de unas condiciones medibles y que nos permitan anticiparnos ante situaciones benéficas o perjudiciales, ya sea para aprovecharlas o evitarlas. Estos pronósticos se realizan cada vez con más frecuencia, tanto para la venta de productos como para el aprovisionamiento de materias primas y los insumos necesarios para dichas ventas. De esta manera, podemos obtener mejores condiciones y traspasar esos beneficios al cliente final. Veamos a continuación los tipos y sus características.
        p Mire a continuación los tipos de pronósticos
      .col-lg-6
        img(src='@/assets/curso/temas/tema3/t3-1.svg', alt='Texto que describa la imagen').mb-3
      
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 3.1 Tipos de pronósticos

    .row.justify-content-center.mt-5
      p Los tipos de pronósticos pueden darse por:
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema3/t3-2.svg', alt='Texto que describa la imagen')        

      p.mt-5.text-bold Para ampliar la información descrita anteriormente, veamos lo siguiente.
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 3.2 Características   

    .row.justify-content-center.mt-5
      p Entre sus características podemos destacar:
      .col-auto.mt-2
        img(src='@/assets/curso/temas/tema3/t3-3.svg', alt='Texto que describa la imagen')  

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-cajon-1.p-4
          p Ya sabemos sobre los pronósticos, ahora es necesario saber sobre la verificación de los productos adquiridos.
          
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
