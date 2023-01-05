<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Cronograma de compras
    
    .t8-bkg
      .row.justify-content-center
        .col-lg-7
          p El cronograma de compras es un documento impreso o digital que enumera las actividades necesarias para realizar la gestión de las compras. Este debe incluir fechas, fases, responsables, recursos todo desde un inicio de la gestión hasta el final de esta.
          p Tal cronograma se puede desarrollar en una simple tabla de <i>Excel</i> o se puede elaborar con <i>software</i> especial para su desarrollo. Lo realmente importante es el contenido y lo útil que pueda ser para su aplicación.
        .col-lg-5
          img(src='@/assets/curso/temas/tema8/t8-1.svg', alt='').mb-3   

    h4.my-4 Tipos de cronograma de compras

    .row.justify-content-center.mt-5
      p Existen diversos tipos de cronogramas de compras, entre los cuales se pueden resaltar los más utilizados; estos son: 

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            h2 Gráfico de Gantt
            p Existen diversos tipos de cronogramas de compras, entre los cuales se pueden resaltar los más utilizados; estos son: 
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-2.svg', alt='')

        .row.justify-content-center
          .col-md-8
            h2 Diagrama PERT
            p Significa <i>Program Evaluation and Review Technique</i>. Se caracteriza por contener actividades descritas en el tiempo realista y muestra la ruta crítica para la obtención de objetivos operacionales.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-3.svg', alt='').mt-2

        .row.justify-content-center
          .col-md-8
            h2 Cronograma de hitos
            p Es una representación visual de las tareas más importantes para el desarrollo de una actividad o proyecto; los hitos pueden tomarse como puntos de control más amigables y visuales que permiten mostrar avances. Se utilizan en proyectos más grandes y complejos.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-4.svg', alt='').mt-2  

        .row.justify-content-center
          .col-md-8
            h2 #[em Microsoft Project]
            p Es un programa informático que permite gestionar proyectos y sus fases, de una manera clara para la asistencia a administradores de proyectos. En la gestión de compras se puede utilizar cuando el proceso es muy técnico y extenso. La ventaja de este <i>software</i> es que permite crear una ruta crítica, facilitando la nivelación de los recursos y la visibilidad clara de los puntos clave de un plan de compras.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-5.svg', alt='').mt-2   

    h4.my-4 Características de un cronograma de compras 

    .row.justify-content-center
      .cajon.color-cajon-1.p-4.mb-3
        p Para la elaboración del cronograma de adquisición y contratación de terceros, es decir, contratación de proveedores, se procede a describir las actividades y rangos de tiempo para el cumplimiento de los requerimientos. Según las políticas de compras, estos requerimientos parten de la solicitud de información a los proveedores (cotizaciones, ofertas, propuestas, etc.) para proceder, entonces, a elegir quiénes abastecerán las necesidades de compra en la empresa. 

        p.mb-0 Por lo tanto, se consideran varios ítems relacionados con los proveedores, con el fin de velar que se cumplan los acuerdos y responsabilidades contractuales.


    .row.justify-content-center.mt-5
      .col-auto
        .titulo-sexto.color-acento-contenido
          p <b>Figura 1</b> <br> <i>Características de un cronograma de compras</i>      
        img(src='@/assets/curso/temas/tema8/t8-6.svg', alt='')

</template>

<script>
export default {
  name: 'Tema8',
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
