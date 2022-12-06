<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Compras

    .t6-bkg
      .row.justify-content-center
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
          .bloque-texto-g1__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6-1.png')})`}")
          .bloque-texto-g1__texto.p-4
            p Las compras son unos de los procesos compuestos de acciones y decisiones indispensables dentro de las organizaciones, ya que desde este proceso se pueden establecer los rasgos diferenciadores de la empresa frente a la competencia, los cuales generan ventajas competitivas, que son las características por las cuales los clientes las prefieren frente a sus rivales comerciales.
            p Este proceso consiste en contar con nexos comerciales con los mejores proveedores, que faciliten las mejores materias primas, insumos, productos y servicios a la disposición de la organización, además de los mejores términos para las empresas. Las compras en las cadenas de distribución y cadenas logísticas mejoran la probabilidad de éxito al alcanzar metas y objetivos de crecimiento previamente planteados.
        
        p.mt-5 En este proceso debemos definir muy bien los siguientes aspectos:

      .row.justify-content-center
        img(src='@/assets/curso/temas/tema6/t6-2.svg', alt='Texto que describa la imagen').mb-3

      .row.justify-content-center.mt-5
        .col-lg-8
          .cajon.color-cajon-1.p-4
            p Las políticas de compras son pautas que definen a las organizaciones y que sirven de marco interno para el proceso. Son de obligatorio análisis y cumplimiento en la gestión de compras de la empresa en sus operaciones habituales, con el fin de optimizar y estandarizar las adquisiciones, dándoles transparencia, pluralidad, agilidad y buscando economía para la empresa.       

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 6.1 Política de compras

    .row.justify-content-center.mb-5.mt-5
      p Algunas de las pautas para desarrollar las políticas de compras en una empresa son:
      TabsB.color-primario.mt-3
        .py-3(titulo="Transparencia")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-3.svg', alt='Texto que describa la imagen')          
            .col-lg-8
              p Sin más intenciones que el intercambio comercial entre las partes.

        
        .py-3(titulo="Pluralidad")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-4.svg', alt='Texto que describa la imagen')          
            .col-lg-8
              p Cualquier proveedor puede tener la oportunidad de realizar intercambio comercial con la organización.
        
        .py-3(titulo="Oportunidad")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-5.svg', alt='Texto que describa la imagen')          
            .col-lg-8
              p La gestión de compras se realiza de manera oportuna para la operación de la organización, con el fin de evitar desabastecimientos y cuellos de botella.
        
        
        .py-3(titulo="Análisis de costos")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-6.svg', alt='Texto que describa la imagen')          
            .col-lg-8
              p Contraste de todas las cotizaciones hecho por los proveedores para analizar y escoger la opción más viable, económicamente, para la organización.
        
        .py-3(titulo="Calidad real" )
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-7.svg', alt='Texto que describa la imagen')          
            .col-lg-8
              p Uno de los criterios que serán evaluados de manera sistemática y planificada para evaluar la conveniencia de la relación comercial con un proveedor.
        
        .py-3(titulo="Mejora continua" )
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-8.svg', alt='Texto que describa la imagen')          
            .col-lg-8
              p Las relaciones comerciales comprometen a ambas partes a realizar mejoras en productos, servicios y valores agregados con el fin de alcanzar un crecimiento mutuo.
      
      p.mt-5 Podrá profundizar más sobre el tema con el Anexo 2 - Políticas de compras. A partir de lo anterior, ¿qué tiene que hacer una vez identifique las políticas de compra?

    .row.justify-content-around.align-items-center.mt-5
      .col-11
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema6/t6-16.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco  Anexo 2 - Políticas de compras
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo 2. Políticas de compras.docx')" target="_blank")
                    span Ver más
                    i.fas.fa-file-download

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 6.2 Procedimiento

    .row.justify-content-center.mt-5
      p El procedimiento o protocolo de compras dentro de la organización está descrito por el conjunto de pasos sistemáticos que nos permite estandarizar con éxito la adquisición de materias primas, insumos y demás para una organización, en pro de mayores beneficios.

    .row.justify-content-center.mt-5
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/t6-9.svg', alt='', style='')

          .tarjeta.color-acento-botones.p-4(x="28.4%" y="7%" numero="1" style='')
            h5.mb-3 Solicitud de compra:
            p.mb-0 Se da cuando cualquier departamento detecta la necesidad de un bien requerido para su normal funcionamiento dentro de la organización.

          .tarjeta.color-acento-botones.p-4(x="62%" y="7%" numero="2" style='')
            h5.mb-3 Evaluación y selección de proveedor:
            p.mb-0 El departamento de compras recibe la solicitud y evalúa cuál de los proveedores que trabajan con la organización es más conveniente para realizar el pedido, y solicita cotizaciones a distintos proveedores.

          .tarjeta.color-acento-botones.p-4(x="95.5%" y="7%" numero="3" style='')
            h5.mb-3 Negociación de las condiciones de compra:
            p.mb-0 Una vez seleccionada una cotización enviada por los proveedores, se hace el contacto para acordar condiciones en la compra y llegar a un acuerdo mutuamente beneficioso.
          
          .tarjeta.color-acento-botones.p-4(x="28%" y="57%" numero="4" style='')
            h5.mb-3 Seguimiento del pedido:
            p.mb-0 Una vez terminada la negociación y hecho el envío del pedido al proveedor, se debe realizar un seguimiento de la orden de compra, ya sea con uso de las tecnologías o no, con el fin de que el pedido llegue en fechas ideales y no genere cuellos de botella por desabastecimiento.

          .tarjeta.color-acento-botones.p-4(x="62%" y="57%" numero="5" style='')
            h5.mb-3 Recepción de la mercancía:
            p.mb-0 Una vez que el pedido llegue a las instalaciones de la organización, se procede a realizar una inspección a profundidad de lo que se va a recibir; esto incluye calidad, cantidad, referencias y precios de lo que se recibe. Si existen discordancias, es esencial notificarlas inmediatamente al proveedor para decidir si aceptarlas o realizar devolución.

          .tarjeta.color-acento-botones.p-4(x="95.5%" y="57%" numero="6" style='')
            h5.mb-3 Recepción de la factura:
            p.mb-0 Una vez verificada la recepción de la mercancía, la organización finalizará el ciclo de pedido con la recepción de la factura, que deberá contener también coincidencia con la orden de pedido y la recepción en físico recibida, además debe contener carácter legal, con el fin de que la organización genere procesos contables internos y realizar el pago de esta dentro de los compromisos adquiridos con el proveedor sin ningún tipo de retraso.

    .row.justify-content-center.mt-5
      p Ya conoció las compras ahora, #[strong ¿de qué manera las hará?]

    separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 6.3 Protocolos

    .row.justify-content-center
      .col-lg-4
        img(src='@/assets/curso/temas/tema6/t6-10.svg', alt='Texto que describa la imagen').mb-3        
      .col-lg-8
        p El protocolo de compras es el detalle del procedimiento que sirve para la gestión documental en la empresa. En este se detallan aspectos como los responsables de cada actividad, documentos de soporte que se utilizan o se encuentran depositados en un lugar accesible para cualquier colaborador que esté relacionado con el proceso de compras, además de un ítem muy importante: la forma como se debe interactuar con el cliente o el proveedor, por medio de la comunicación y el lenguaje que utiliza la empresa, según el área de comunicaciones.  El protocolo de compras debe ser comprensible, contar con suficiente información y resolver las dudas de los clientes internos y externos.
        p ¿Y en cuanto al flujo de proceso?

    separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 6.4 Flujo de proceso

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
        .bloque-texto-g2__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6-11.svg')})`}")
        .bloque-texto-g2__texto.p-4
          p.text-bold Para ilustrar de una manera más técnica el procedimiento del Plan Anual de Adquisiciones dentro de una organización, a continuación se muestra un ejemplo del flujograma que se usaría para hacer la representación gráfica de los pasos, que están en amarillo, los puntos de control, en color rosa y los puntos de decisión, representados con rombos naranja, hasta llevar a feliz término el procedimiento.

    .row.justify-content-center.mt-5
      .col-auto
        img(src='@/assets/curso/temas/tema6/t6-12.svg', alt='Texto que describa la imagen')
      
      p.mt-5 Revise ahora lo pertinente frente a las contingencias que se pueden presentar en las compras.

    separador

    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 6.5 Contingencias

    .row.justify-content-center
      .col-lg-4
        img(src='@/assets/curso/temas/tema6/t6-13.svg', alt='Texto que describa la imagen').mb-3    
      .col-lg-8
        p Para reaccionar frente a situaciones críticas presentadas en cadenas de suministro para sus compras, las organizaciones manejan conceptos sencillos, como #[em stock] de seguridad o #[em stock] mínimo, los cuales consisten en tener una base de reserva de materias primas e insumos en caso de emergencias o contingencias, con el fin de autoabastecerse mientras se encuentran opciones para solucionar la problemática. El principal objetivo de un plan de contingencia es tomar acciones preventivas ante situaciones que pongan en riesgo el abastecimiento de bienes que la organización requiere para su normal funcionamiento.
        p.text-bold No olvide algo muy importante.

    separador

    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 6.6 Principios éticos

    .row.justify-content-center
      .col-lg-7
        p.parrafo-color.p-3 Una vez definidas las políticas (compromisos hacia la gestión de compras) que la organización quiere establecer, también se deben redoblar esfuerzos para que los principios éticos de las organizaciones estén reflejados en su gestión de compras. De la mano con las políticas deben ir los compromisos éticos de cada individuo, los cuales redundan en la obtención de las mejores materias primas, insumos y servicios que generan productos y precios destacados. Así serán mejor percibidos por los clientes y también obtendrán una ventaja competitiva en el mercado.
        p.text-bold Dentro de esos principios éticos encontramos:
      .col-lg-5
        img(src='@/assets/curso/temas/tema6/t6-14.svg', alt='Texto que describa la imagen').mb-3           

    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-7
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Cooperación")
                p.mb-0 La capacidad de los individuos para lograr los objetivos trazados en el departamento de compras.
              .row(titulo="Diligencia")
                p.mb-0 Apropiarse de la responsabilidad en su rol individual dentro del departamento de compras.
              .row(titulo="Honestidad")
                p.mb-0 Desempeñar las tareas de forma honesta, con el convencimiento de la sinergia de equipo y entregando sus mejores esfuerzos.
              .row(titulo="Democracia")
                p.mb-0 Participación en la toma de decisiones dentro de la gestión de compras, como individuo particular que hace parte de un todo.
              .row(titulo="Transparencia")
                p.mb-0 Realizar las actividades sin preferencias, ni esperando retribución alguna diferente de la satisfacción del deber cumplido.
          .col-lg-5
              img(src='@/assets/curso/temas/tema6/t6-15.svg', alt='Texto que describa la imagen')   

        .row.justify.mt-3
          .col-lg-7
            .cajon.color-cajon-1.p-4
              p Para ampliar la información descrita anteriormente, veamos lo siguiente.

</template>

<script>
export default {
  name: 'Tema6',
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
