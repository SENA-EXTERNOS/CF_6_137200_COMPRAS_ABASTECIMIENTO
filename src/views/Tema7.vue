<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Plan de compras

    .t5-bkg
      .row.justify-content-center
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
          .bloque-texto-g3__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema7/t7-1.svg')})`}")
          .bloque-texto-g3__texto.p-4
            p El plan de compras es un documento que sirve de herramienta para planificar la gestión de compras dentro de una organización, allí podemos incluir diversas necesidades, como son materias primas, insumos, maquinarias, tecnologías y los servicios que una empresa pueda requerir y proyectar a futuro. Las ventajas de diseñar un plan de compras están en la obtención al pasar el tiempo de mejores proveedores nacionales o internacionales, mejores calidades en bienes y mejores precios por comprar al por mayor (economía de escala); también se pueden obtener mejores condiciones en las negociaciones (valores agregados, soporte, logística, etc.). Todas las actividades que se realicen mejorarán la rentabilidad de la organización, permitiendo realizar inversiones en proyectos futuros, o incluso, en ofrecer bienes y servicios más favorables a los clientes para fortalecerse en el mercado.
       
        p.text-bold.mt-5 Para ver los tipos de plan de compras, veamos lo siguiente.

      separador

      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2.mt-3 7.1 Tipos de plan de compras

    .row.justify-content-center
      .col-lg-2
        img(src='@/assets/curso/temas/tema7/t7-2.svg', alt='Texto que describa la imagen').img-movil
      .col-lg-10
        p Conociendo el concepto y la importancia del plan de compras en una organización, y cómo este aporta valor al proceso de abastecimiento, es necesario conocer varios de los tipos de planes de compras que pueden variar en la función, la necesidad, la oportunidad y sobre todo, en la economía de la organización. Se mencionan a continuación algunos de los más relevantes.  

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            p ¿Sabe qué impulsa a sus clientes a comprar?, ¿qué tipo de compras hacen? La respuesta es netamente emocional, por lo tanto, es importante conocer cada tipo de compra y cuáles son las formas de comprar que más se repiten en el mercado.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-3.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-8
            p Dentro de las organizaciones, el área de mercadeo analiza al mercado objetivo, logrando validar los diferentes tipos de planes de compras que se mencionan a continuación:
            p #[strong Compras especiales:] estas tienen lugar en adquisiciones de bienes de uso que no tienen relación directa con la transformación, pero que son necesaria para actividades indirectamente relacionadas.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-4.svg', alt='Texto que describa la imagen').mt-2

        .row.justify-content-center
          .col-md-8
            p #[strong Compras estacionales:] son compras que se realizan en ciertas temporadas del año, con el fin de aprovechar la demanda estacional de un bien. Se calculan usando histogramas de ventas de períodos anteriores y su proyección de crecimiento.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-5.svg', alt='Texto que describa la imagen').mt-2  

        .row.justify-content-center
          .col-md-8
            p #[strong Compras anticipadas:] estas se realizan de manera muy anterior a su uso o consumo, primordialmente en el mediano o largo plazo, y tienen la intención de pagar por productos o servicios con antelación, ya sea como parte de una estrategia competitiva o como protección por una eventual subida de precios. 
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-6.svg', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-8
            p #[strong Compras rutinarias:] son las que atienden necesidades más comunes, que surgen del día a día y que se caracterizan por ser de pequeñas cantidades y con bajo riesgo en su adquisición, debido a su disponibilidad en el mercado.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-7.svg', alt='Texto que describa la imagen').mt-2         

        .row.justify-content-center
          .col-md-8
            p #[strong Compras de oportunidad:] estas compras tienen la particularidad de que facilitan la adquisición de bienes necesarios para la organización, de manera muy económica, y son aprovechadas porque aumentan el margen de rentabilidad de la operación. 
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-8.svg', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-8
            p #[strong Compras de urgencia:] estas se realizan para cubrir una necesidad muy puntual y urgente, por lo que no requieren una planeación de compras como tal, y normalmente se salen del presupuesto. Este tipo de compras suceden también por cambios intempestivos que obligan a los compradores a realizar ciertas adquisiciones. 
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema7/t7-9.svg', alt='Texto que describa la imagen').mt-2                                                


    .row.justify-content-center.mt-5
      p Ya vio los tipos de plan de compras, ahora encontrará las características de este plan.

    separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 7.2 Características

    .row.justify-content-center
      .col-lg-5
        img(src='@/assets/curso/temas/tema7/t7-10.svg', alt='Texto que describa la imagen').mb-3      
      .col-lg-7
        p El documento que se utilice como plan de compras debe contener: Pronósticos, objetivos, políticas, programas, procedimientos, protocolos y presupuestos.  Y las características del uso de este documento son: contribuir al monitoreo permanente de los inventarios, permitir establecer planes anuales de compras, gestionar con proveedores alguna eventualidad en el proceso, automatizar el área de compras, reducir costos administrativos, por reducción de operaciones de compras.
        .cajon.color-cajon-1.p-4
          p Asimismo, es importante que tenga en cuenta el presupuesto.
    
    separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 7.3 Presupuesto

    .row.justify-content-center
      .col-lg-7
        p Existen dos tipos de presupuestos:
        p #[strong Presupuestos no financieros:] que se realizan de una manera proyectiva y solo reflejan necesidades futuras para el año siguiente, por ello, se desarrollan finalizando el año, teniendo en cuenta lo que se va a producir.
        p #[strong Presupuestos financieros:] estos presupuestos son mucho más aterrizados en los costos de adquisición de los bienes y servicios a comprar o a contratar, y se apoya de proyecciones de precios futuros, teniendo en cuenta el aumento de precios por IPC o por inflación.

        .cajon.color-cajon-1.p-4.mb-3
          p De acuerdo con lo anterior, observe a continuación, la información referente al cronograma de compras.
      .col-lg-5
        img(src='@/assets/curso/temas/tema7/t7-11.svg', alt='Texto que describa la imagen').mb-3        
         

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
