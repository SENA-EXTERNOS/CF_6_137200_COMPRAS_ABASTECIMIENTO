<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Programación
    
    .t5-bkg
      .row.justify-content-center
        .col-lg-7
          p La programación consiste en un calendario que determina el conjunto de actividades que se deben realizar en un período de tiempo para proveer lo necesario a la cadena de producción de manera planificada, esta debe generar la información para: 
          .row
            ol.lista-ul
              li 
                i.fas.fa-check.color-vineta1
                | Realizar adquisiciones teniendo en cuenta las necesidades de cada área.
              li 
                i.fas.fa-check.color-vineta1
                | Administración y control de inventarios teniendo en cuenta materias primas.
              li 
                i.fas.fa-check.color-vineta1
                | La optimización de costos de compras por medio de negociaciones benéficas para la organización.
              li 
                i.fas.fa-check.color-vineta1
                | La realización de una buena selección de proveedores que puedan proporcionar la calidad requerida en el proceso productivo.  
          p.mb-5 Ahora bien, #[strong ¿qué es necesario saber de la programación?]

        .col-lg-5
          img(src='@/assets/curso/temas/tema5/t5-1.svg', alt='Texto que describa la imagen').mb-3

      separador


      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2.mt-3 5.1 Tipos de programación 
    
    .row.justify-content-center
      .col-lg-8
        TabsA.color-primario.mt-3
          .tarjeta.color-acento-contenido.p-3(style="background-color:#fffceb" titulo="Programación tipo <em>Push</em>")
            .row.justify-content-center.p-3
              p Consiste en una lista de necesidades identificadas en el tiempo, que genera a su vez un sistema de planificación y que se gestiona para su adquisición por parte del departamento de compras. Contienen una previsión a largo plazo y órdenes reales a corto plazo.
          
          .tarjeta.color-acento-contenido.p-3(style="background-color:#fffceb" titulo="Programación tipo <em>Pull</em>")
            .row.justify-content-center.p-3
              p Consiste en una lista de necesidades que son identificadas por la organización, pero que son ofrecidas con anterioridad a que se generen las órdenes de compra por parte de los proveedores, quienes ya conocen las frecuencias de uso o consumo de los bienes que normalmente requiere la organización. 
      .col-lg-4
        img(src='@/assets/curso/temas/tema5/t5-2.svg', alt='Texto que describa la imagen')
      
      p.text-bold.mt-3 Ya vio los tipos de programación, analice ahora las características.

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 5.2 Características

    p Dentro de las características de la programación de compras encontramos:  

    .row.justify-content-center.mt-5
      .col-lg-4
          img(src='@/assets/curso/temas/tema5/t5-3.svg', alt='Texto que describa la imagen')         
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Planeación estratégica")
            p.mb-0 La programación de la compra sirve de objeto de planeación estratégica de los recursos de la organización, priorizando los de mayor importancia en las necesidades internas de la empresa.
          .row(titulo="Participación")
            p.mb-0 La participación de las áreas en la construcción de la programación se hace de forma activa y obedece a las necesidades priorizadas de cada área de la empresa.
          .row(titulo="Sistematicidad")
            p.mb-0 Este concepto obedece a que la gestión de la programación de compras tiene y requiere de la gestión de diversas áreas, las cuales son conscientes de su rol en un buen proceso de compras con los mejores resultados.
          .row(titulo="Principios de economía")
            p.mb-0 Obtener los mejores precios de mercado cumpliendo con las exigencias y necesidades de la organización es un fin de la programación de compras.
          .row(titulo="Optimización de tiempos de entrega")
            p.mb-0 La ejecución del programa de compras busca que se agilicen la adquisición y recepción de lo que se compra.
          .row(titulo="Reducción de devoluciones")
            p.mb-0 La buena gestión del programa de compras debe redundar en la reducción de devoluciones por compras mal hechas o productos no coincidentes con las órdenes de compra.                                                 
    
    p.mt-3 A continuación, encontrará las metodologías utilizadas en la programación.

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 5.3 Metodologías

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-cajon-1.p-4
          p Cada organización genera su propia metodología, teniendo en cuenta la naturaleza, tipo de organización y los puntos críticos en su construcción, pero en general, todas redundan en estos 8 factores:

    .row.justify-content-center.mt-5
      .col-auto
        img(src='@/assets/curso/temas/tema5/t5-4.svg', alt='Texto que describa la imagen') 
    

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 5.4 Alcance

    .row.justify-content-center
      .col-lg-2
        img(src='@/assets/curso/temas/tema5/t5-5.svg', alt='Texto que describa la imagen').img-movil
      .col-lg-10
        .t5-bkg-inf
          p La programación de compras es un insumo que abarca las necesidades de todos los procesos de la organización, por ello se diseña teniendo en cuenta la participación de los representantes en su construcción, con el fin de incluir todas sus necesidades. Es importante que la democratización y contribución de todas las áreas estén presentes en la construcción de la programación de compras. 
          p.text-bold Ya sabiendo qué es la verificación, es necesario conocer en qué consiste potencializar las compras. 


</template>

<script>
export default {
  name: 'Tema5',
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
