<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Contratación pública

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
        .bloque-texto-g1__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema10/t10-1.svg')})`}")
        .bloque-texto-g1__texto.p-4
          p El Gobierno colombiano reconoce que la contratación pública, para todo lo que tiene que ver con compras para empresas del estado, es estratégica y debe estar centralizada; por lo tanto, se creó la Agencia Nacional de Contratación Pública - Colombia Compra Eficiente, por medio del Decreto Ley 4170 del 3 de noviembre de 2011. El decreto reconoce la necesidad de: (a) crear políticas unificadas que sirvan de guía a los administradores de compras y que permitan monitorear y evaluar el desempeño del Sistema, generando mayor transparencia en las compras y (b) tener una entidad rectora que provea un soporte adecuado para ejecutar el Plan de Desarrollo.
          p En el Decreto Ley 4170 podrá profundizar en el mandato del Gobierno central frente al tema de cómo se ofrecen servicios al sector público.
      p.mt-5 Es importante también tener en cuenta que se deben realizar estudios del sector.

    separador
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 10.1 Estudios del sector

    .row.justify-content-center
      .col-lg-7
        p El análisis del sector ofrece herramientas para establecer el contexto del proceso de contratación, entre las cuales están: identificar algunos de los riesgos, determinar los requisitos habilitantes y la forma de evaluar las ofertas. Este análisis debe revisar en las empresas o personas naturales proponentes la capacidad jurídica, financiera, organizacional y experiencia de cada una de estas. El Gobierno tiene su propio procedimiento para realizar esta actividad, y todas las empresas estatales deben seguirlo, así que lo invitamos a conocerlo en el material complementario que encontrará al finalizar este módulo.
        p Igualmente, es necesario que conozca la teoría acerca del Plan anual de adquisiciones.

      .col-lg-5
        img(src='@/assets/curso/temas/tema10/t10-2.svg', alt='Texto que describa la imagen').mb-3        

    separador
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 10.2 Plan anual de adquisiciones

    .row.justify-content-center
      .col-lg-2
        img(src='@/assets/curso/temas/tema10/t10-3.svg', alt='Texto que describa la imagen').img-movil
      .col-lg-10
        .t10-bkg
          p El Plan Anual de Adquisiciones, de acuerdo con el artículo 3 del Decreto 1510 de 2013, compilado en el Decreto 1082 de 2015, es un instrumento de planeación para las empresas o entidades del estado, que permite identificar, registrar, programar y divulgar sus necesidades de bienes y servicios, a través de la plataforma de Colombia Compra Eficiente, para que, de manera transparente, todos los proveedores que cumplan los requisitos se puedan presentar y participen de las adquisiciones que hace el Estado (Departamento Nacional de Planeación, 2020).
          p No debe olvidar también que existen unas modalidades de selección particulares en la contratación pública.      

    separador
    #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 10.3 Modalidades de selección

    .row.justify-content-center
      .col-lg-8
        p Las entidades estatales deben escoger a sus contratistas (proveedores) a través de alguna de las modalidades de selección previstas en la Ley 1150 de 2007. Podrá profundizar en estas modalidades por medio del Anexo 1 - Modalidades de Selección del Contratista.
        p Y al igual que las modalidades de selección, debe tener presente el sistema electrónico de contratación pública (SECOP).
        .row
          .col-lg-8
            .tarjeta.color-descarga.p-4
              .row.justify-content-around.align-items-center
                .col-4.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/tema10/t10-5.svg").icono
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.texto-blanco  Anexo 2 - Políticas de compras
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo 2. Políticas de compras.docx')" target="_blank")
                        span Ver más
                        i.fas.fa-file-download
        p.mt-5 Y al igual que las modalidades de selección, debe tener presente el sistema electrónico de contratación pública (SECOP).

      .col-lg-4
        img(src='@/assets/curso/temas/tema10/t10-4.svg', alt='Texto que describa la imagen').mb-3.mt-1

    separador
    #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 10.4 Sistema electrónico de contratación pública (SECOP)

    .row.justify-content-center
      p El Sistema Electrónico para la Contratación Pública (SECOP) es el medio digital de información de toda la contratación realizada con dinero público, siendo este el único medio para ingresar la información para las entidades que contratan con recursos públicos. Son componentes del Sistema Electrónico de Contratación las siguientes plataformas, administradas por Colombia Compra Eficiente:

      .tarjeta--container.row
        .col-md.tarjeta.color1.p-4.texto-blanco
          .row.justify-content-center
            .col-6
              figure
                img(src='@/assets/curso/temas/tema10/t10-6.svg', alt='Texto que describa la imagen').mb-2
          h3.text-center.mb-2 SECOP I:
          p.text-center Plataforma exclusivamente de publicidad, en la cual las entidades que contratan con cargo a recursos públicos realizan las publicaciones de los documentos del proceso.
          p.text-center SECOP II: Plataforma transaccional para gestionar en línea todos los procesos de contratación, con cuentas para entidades y proveedores, y vista pública para cualquier tercero interesado en hacer seguimiento a la contratación pública.
        
        .col-md.tarjeta.color2.p-4.texto-blanco
          .row.justify-content-center
            .col-6
              figure
                img(src='@/assets/curso/temas/tema10/t10-7.svg', alt='Texto que describa la imagen').mb-2
          h3.text-center.mb-2 Tienda Virtual del Estado Colombiano:
          p.text-center Plataforma transaccional a través de la cual las entidades compradoras adquieren:
          p.text-center Bienes y servicios a través de los Acuerdos Marco de Precios.
          p.text-center Bienes y servicios dentro de los Contratos de Agregación de Demanda.
          p.text-center Bienes en la modalidad de Mínima Cuantía en Grandes Superficies.
    
    p.mt-5 Por último, revise lo pertinente a la normativa de la contratación pública.
 
     separador
    #t_10_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 10.5 Normativa

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
        .bloque-texto-g3__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema10/t10-8.svg')})`}")
        .bloque-texto-g3__texto.p-4
          p Las entidades estatales deben escoger a sus contratistas (proveedores) a través de alguna de las modalidades de selección previstas en la Ley 1150 de 2007: (i) licitación pública; (ii) selección abreviada; (iii) concurso de méritos; (iv) contratación directa; (v) mínima cuantía (Función Pública, 2018).  En el Anexo 1 - Modalidades de Selección del Contratista se amplía esta información.
      p.mt-5 De acuerdo con lo anterior, a continuación se presenta la síntesis de este componente formativo.


</template>

<script>
export default {
  name: 'Tema10',
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
