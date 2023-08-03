<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Cadena de suministro

    .row.justify-content-center
      p Una cadena de suministro se describe como la suma de los esfuerzos de todas las áreas de una organización para satisfacer el requerimiento de un cliente. Esta comienza desde los proveedores de materias primas e insumos y pasa por los procesos internos para la transformación y gestión de inventario y bodegaje, hasta llegar al  prestador de servicios logísticos de transporte que lleva el producto o servicio hasta el cliente final.

      
      p.mt-3 Una cadena de suministro debe cumplir con características importantes como: 

    .row.justify-content-center.mt-5
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta.estilo-tarjeta
          h3.text-center Equilibrio                 
          .row.justify-content-center.mb-3   
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/t9-2.svg', alt='')

          p.text-center.text-small Coordinación entre personas y herramientas de control.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta.estilo-tarjeta
          h3.text-center Eficiencia                 
          .row.justify-content-center.mb-3   
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/t9-3.svg', alt='')

          p.text-center.text-small La reducción de uso de recursos es indispensable para que la cadena de suministro cumpla su función de una manera óptima.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta.estilo-tarjeta
          h3.text-center Coordinación                
          .row.justify-content-center.mb-3   
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/t9-4.svg', alt='')

          p.text-center.text-small Todos los componentes de la cadena de suministro debe ser secuencial y cada eslabón se debe comunicar.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta.estilo-tarjeta
          h3.text-center Flexibilidad                 
          .row.justify-content-center.mb-3   
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/t9-5.svg', alt='')

          p.text-center.text-small Las cadenas de suministros se deben adaptar rápidamente a cambios intempestivos en las condiciones de operación de la organización.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta.estilo-tarjeta
          h3.text-center Transparencia                
          .row.justify-content-center.mb-3   
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/t9-6.svg', alt='')

          p.text-center.text-small Se debe contar con información a la mano de la trazabilidad del proceso para resolución de conflictos.


    h4.my-4 Eslabones en la cadena de suministro

    .row.justify-content-center.mt-5
      p En la cadena de suministro pueden presentarse más o menos eslabones, dependiendo quiénes sean los clientes de la organización; por lo tanto, existen dos tipos de eslabones, los internos y los externos. Compréndalos, analizando el esquema que se presenta a continuación:
      .col-auto.mt-5
        img(src='@/assets/curso/temas/tema9/t9-71.svg', alt='').mb-3

    h4.my-4 Regulaciones de los parámetros de planeación

    .row.justify-content-center.mt-5
      p Las cadenas de suministro se ven, de alguna manera, enmarcadas en parámetros que son de obligatorio cumplimiento, como las regulaciones de mercado, legales y técnicas; todas estas son impuestas por entes gubernamentales o supranacionales que regulan, ya sea al comercio o la competencia en el mercado. 

      .col-lg-10.mt-5
        img(src='@/assets/curso/temas/tema9/t9-8.svg', alt='').mb-3
      p.mt-3 Asimismo, encuentra también la demanda y las restricciones de la cadena de suministro.   

    h4.my-4 Demanda y restricciones

    .row.justify-content-center
      .col-lg-3
        img(src='@/assets/curso/temas/tema9/t9-9.svg', alt='').mb-3.img-movil    
      .col-lg-9
        .bloque-texto-3
          .bloque-texto-3__texto
            p.mb-0 Una de las acciones más conocidas en el mercado es la demanda. En el contexto de una cadena de suministro, es esencial entender cómo funciona la demanda en diferentes ciclos económicos; si existe en mayor o menor medida en determinados espacios de tiempo y cómo debe ser el manejo respectivo. Los mercados tienen tendencias de comportamiento de la demanda que están ligadas a las temporadas, ya sea por fenómenos naturales (estaciones climáticas en las que se incrementa la necesidad de algunos bienes) o fenómenos sociales y políticos. Existen también situaciones externas que afectan la demanda, como el rápido avance de la tecnología, el cambio de hábitos de consumo en una población, la oferta de productos sustitutos, las condiciones del mercado global (inflación y recesión económica), las pandemias, entre otros.

    h4.my-4 Canales de distribución

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-cajon-1.p-4
          p.mb-0 Los canales de distribución cumplen la función de acercar los productos desde donde fueron concebidos o producidos hasta el cliente final, para que este tenga la posibilidad de usarlos o consumirlos. Esta sucesión debe medirse y optimizarse a menudo, para ofrecer productos más favorables económicamente a los mercados. En lo que respecta al precio, entre más intermediarios existan en dicha sucesión de distribución, más costoso será el producto, pues cada intermediario requiere cierto margen de utilidad.
      p.mt-3 Los canales de distribución se clasifican de la siguiente manera:
      .col-auto.mt-3
        img(src='@/assets/curso/temas/tema9/t9-10.svg', alt='').mb-3      


</template>

<script>
export default {
  name: 'Tema9',
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
