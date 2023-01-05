<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Plan de compras

    .t5-bkg
      .row.justify-content-center.mb-5
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
          .bloque-texto-g3__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema7/t7-1.svg')})`}")
          .bloque-texto-g3__texto.p-4
            p El plan de compras es un documento que sirve de herramienta para planificar la gestión de compras dentro de una organización, allí se pueden incluir diversas necesidades, como: materias primas, insumos, maquinarias, tecnologías y los servicios que una empresa pueda requerir y proyectar a futuro. <br><br> Diseñar un plan de compras puede traer ciertas ventajas como mejorar, con el paso del tiempo, en la selección de proveedores, el alcance de calidad en bienes y servicios, el logro de precios más favorables y económicos, mejores condiciones de negociación, entre otras. <br><br> Todas las actividades que se realicen, a partir del plan de compras, mejorarán la rentabilidad de la organización, permitiendo realizar inversiones en proyectos futuros o, incluso, en ofrecer bienes y servicios más favorables a los clientes para fortalecerse en el mercado.

    h4.my-4 Tipos de planes de compra

    .row.justify-content-center.align-items-center
      .col-lg-2
        img(src='@/assets/curso/temas/tema7/t7-2.svg', alt='').img-movil
      .col-lg-10
        p Es necesario conocer varios de los tipos de planes de compras que pueden variar en la función, la necesidad, la oportunidad y, sobre todo, en la economía de la organización. Conozca algunas generalidades de los tipos de planes de compras más comunes, que se mencionan a continuación:

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            p ¿Sabe qué impulsa a sus clientes a comprar?, ¿qué tipo de compras hacen? La respuesta es netamente emocional, por lo tanto, es importante conocer cada tipo de compra y cuáles son las formas de comprar que más se repiten en el mercado.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-3.svg', alt='')

        .row.justify-content-center
          .col-md-8
            p Dentro de las organizaciones, el área de mercadeo analiza al mercado objetivo, logrando validar los diferentes tipos de planes de compras: 
            p #[strong Compras especiales:] estas tienen lugar en adquisiciones de bienes de uso que no tienen relación directa con la transformación, pero que son necesarias para actividades indirectamente relacionadas.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-4.svg', alt='').mt-2

        .row.justify-content-center
          .col-md-8
            p #[strong Compras estacionales:] son compras que se realizan en ciertas temporadas del año, con el fin de aprovechar la demanda estacional de un bien. Se calculan usando histogramas de ventas de períodos anteriores y su proyección de crecimiento.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-5.svg', alt='').mt-2  

        .row.justify-content-center
          .col-md-8
            p #[strong Compras anticipadas:] estas se realizan de manera muy anterior a su uso o consumo, primordialmente en el mediano o largo plazo, y tienen la intención de pagar por productos o servicios con antelación, ya sea como parte de una estrategia competitiva o como protección por una eventual subida de precios. 
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-6.svg', alt='').mt-2   

        .row.justify-content-center
          .col-md-8
            p #[strong Compras rutinarias:] son las que atienden necesidades más comunes, que surgen del día a día y que se caracterizan por ser de pequeñas cantidades y con bajo riesgo en su adquisición, debido a su disponibilidad en el mercado.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-7.svg', alt='').mt-2         

        .row.justify-content-center
          .col-md-8
            p #[strong Compras de oportunidad:] estas compras tienen la particularidad de facilitar la adquisición de bienes necesarios para la organización, de manera muy económica y son aprovechadas porque aumentan el margen de rentabilidad de la operación.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-8.svg', alt='').mt-2   

        .row.justify-content-center
          .col-md-8
            p #[strong Compras de urgencia:] estas se realizan para cubrir una necesidad muy puntual y urgente, por lo que no requieren una planeación de compras como tal y, normalmente, se salen del presupuesto. Este tipo de compras suceden también por cambios intempestivos que obligan a los compradores a realizar ciertas adquisiciones.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-9.svg', alt='').mt-2 

    h4.my-4 Características del plan de compras

    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/temas/tema7/t7-10.svg', alt='').mb-3      
      .col-lg-7
        p <b>El documento que se utilice como plan de compras debe contener:</b> pronósticos, objetivos, políticas, programas, procedimientos, protocolos y presupuestos.

        p <b>Las características del uso de este documento son:</b> contribuir al monitoreo permanente de los inventarios, permitir establecer planes anuales de compras, gestionar con proveedores alguna eventualidad en el proceso, automatizar el área de compras, reducir costos administrativos por reducción de operaciones de compras.
    
    h4.my-4 Presupuesto de compras

    .row.justify-content-center
      .col-lg-7
        p En relación con las compras de la organización, suelen usarse dos tipos de presupuestos:

        p <b>Presupuestos no financieros:</b> que se realizan de una manera proyectiva y solo reflejan necesidades futuras para el año siguiente. Por tanto, se desarrollan finalizando el año, teniendo en cuenta lo que se va a producir.

        p <b>Presupuestos financieros:</b> estos presupuestos son mucho más aterrizados en los costos de adquisición de los bienes y servicios por comprar o por contratar y se apoyan de proyecciones de precios futuros, teniendo en cuenta el aumento de precios por IPC o por inflación.
      .col-lg-5
        img(src='@/assets/curso/temas/tema7/t7-11.svg', alt='').mb-3        
         

</template>

<script>
export default {
  name: 'Tema7',
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
