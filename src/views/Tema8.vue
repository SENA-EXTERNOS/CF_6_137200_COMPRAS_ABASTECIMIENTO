<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Cronograma
    
    .t8-bkg
      .row.justify-content-center
        .col-lg-7
          p El cronograma de compras es un documento impreso o digital que nos enumera las actividades necesarias para realizar la gestión de las compras este debe incluir fechas, fases, responsables, recursos todo desde un inicio de la gestión hasta el final de esta.
          p Este cronograma se puede desarrollar en una simple tabla de Excel o se puede elaborar con #[em software] especial para su desarrollo lo realmente importante es el contenido y lo útil que pueda ser para su aplicación.
          p En la siguiente información encontrará los tipos de cronograma.

        .col-lg-5
          img(src='@/assets/curso/temas/tema8/t8-1.svg', alt='Texto que describa la imagen').mb-3   

    separador

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 8.1 Tipos de cronograma

    .row.justify-content-center.mt-5
      p Existen diversos tipos de cronogramas, entre los cuales podemos resaltar los más utilizados para la gestión de compras:

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            h2 Gráfico de Gantt:
            p Es una herramienta de gestión que nos permite realizar planeación de actividades; está compuesta por dos secciones: la de la derecha nos describe las fechas y la de la izquierda las actividades.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-2.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-8
            h2 Diagrama PERT:
            p Significa #[em Program Evaluation and Review Technique.] Se caracteriza por contener actividades descritas en el tiempo realista y nos muestra la ruta crítica para la obtención de objetivos operacionales.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-3.svg', alt='Texto que describa la imagen').mt-2

        .row.justify-content-center
          .col-md-8
            h2 Cronograma de hitos:
            p Es una representación visual de las tareas más importantes para el desarrollo de una actividad o proyecto; los hitos pueden tomarse como puntos de control más amigables y visuales, que permiten mostrar avances. Se utilizan en proyectos más grandes y complejos.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-4.svg', alt='Texto que describa la imagen').mt-2  

        .row.justify-content-center
          .col-md-8
            h2 #[em Microsoft Project:]
            p Es un programa informático que permite gestionar proyectos y sus fases de una manera clara, para la asistencia a administradores de proyectos. En la gestión de compras se puede utilizar cuando el proceso es muy técnico y extenso. La ventaja de este software es que permite crear una ruta crítica, facilitando la nivelación de los recursos y la visibilidad clara de los puntos clave de un plan de compras.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema8/t8-5.svg', alt='Texto que describa la imagen').mt-2   

    .row.justify-content-center.mt-5
      p Mire también las características del cronograma a continuación.

    separador

    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 8.2 Características de cronograma

    .row.justify-content-center
      .cajon.color-cajon-1.p-4.mb-3
        p Para la elaboración del cronograma de adquisición y contratación de terceros, es decir, proveedores, se procede a describir las actividades y rangos de tiempo para el cumplimiento de los requerimientos. Según las políticas de compras, estos parten de la solicitud de información a los proveedores, como cotizaciones, ofertas, propuestas, etc., para proceder a elegir quiénes abastecerán las necesidades de compra en la empresa. Por lo tanto, se consideran varios ítems relacionados con los proveedores, con el fin de velar que se cumplan los acuerdos y responsabilidades contractuales.

    .row.justify-content-center.mt-5
      .col-auto
        img(src='@/assets/curso/temas/tema8/t8-6.svg', alt='Texto que describa la imagen')
      
      p.text-bold.mt-5 Se ilustrará a continuación qué es la cadena de suministro en el plan de compras.

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
