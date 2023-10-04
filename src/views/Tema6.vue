<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 La compra

    .t6-bkg
      .row.justify-content-center
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
          .bloque-texto-g1__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6-1.png')})`}")
          .bloque-texto-g1__texto.p-4
            p Las compras son un proceso indispensable en las organizaciones, compuesto de acciones y decisiones, desde el cual se pueden establecer los rasgos diferenciadores de la empresa frente a la competencia. Tales rasgos de diferenciación pueden generar ventajas competitivas, que son las características por las cuales los clientes las prefieren, frente a sus rivales comerciales.
            p Este proceso consiste en contar con nexos comerciales con los proveedores más calificados, que faciliten las mejores materias primas, insumos, productos y servicios a la disposición de la organización. Las compras en las cadenas de distribución y cadenas logísticas favorecen la probabilidad de éxito, al alcanzar metas y objetivos de crecimiento, previamente planteados.
        
        p.mt-5 Previo al y durante el proceso de compra, se deben tener en cuanta y responder criteriosamente, interrogantes como los que se mencionan enseguida:

      .row.justify-content-center
        img(src='@/assets/curso/temas/tema6/t6-2.svg', alt='').mb-3

      .row.justify-content-center.mt-5
        .col-lg-8
          .cajon.color-cajon-1.p-4
            p.mb-0 En el proceso de compra se vincula, además, el concepto de <b>Política de compras</b>, que son las pautas que sirven de marco interno para el desarrollo del proceso. Estas políticas son de obligatorio análisis y cumplimiento en toda la gestión de compras de la organización, de modo que se alcance una estandarización de adquisiciones dotadas de transparencia, pluralidad, agilidad y economía.   

    .row.justify-content-center.mb-5.mt-5
      p Algunas de las pautas para desarrollar las políticas de compras en una empresa son:
      TabsB.color-primario.mt-3
        .py-3(titulo="Transparencia")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-3.svg', alt='')          
            .col-lg-8
              p No deben existir más intenciones que el intercambio comercial entre las partes.

        
        .py-3(titulo="Pluralidad")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-4.svg', alt='')          
            .col-lg-8
              p Cualquier proveedor puede tener la oportunidad de realizar intercambio comercial con la organización.
        
        .py-3(titulo="Oportunidad")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-5.svg', alt='')          
            .col-lg-8
              p La gestión de compras se realiza de manera oportuna para la operación de la organización, con el fin de evitar desabastecimientos y cuellos de botella.
        
        
        .py-3(titulo="Análisis de costos")
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-6.svg', alt='')          
            .col-lg-8
              p Contraste de todas las cotizaciones realizadas por los proveedores para analizar y escoger la opción económica, más viable, para la organización.
        
        .py-3(titulo="Calidad real" )
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-7.svg', alt='')          
            .col-lg-8
              p Esta será uno de los criterios que serán evaluados de manera sistemática y planificada para evaluar la conveniencia de la relación comercial con un proveedor.
        
        .py-3(titulo="Mejora continua" )
          .row.p-5
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/t6-8.svg', alt='')          
            .col-lg-8
              p Las relaciones comerciales comprometen a ambas partes a realizar mejoras en productos, servicios y valores agregados, con el fin de alcanzar un crecimiento mutuo.
      
      p.mt-5 Profundice en los aspectos clave de las políticas de compras, explorando el Anexo “Políticas de compras”. Procure llevar registro de lo más destacado en su libreta personal de apuntes. <b>¡Adelante!</b>

    .row.justify-content-around.align-items-center.mt-5
      .col-10
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema6/t6-16.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.texto-blanco.mb-0  Anexo 1
                  p.texto-blanco Políticas de compras
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Politicas_de_compras.pdf')" target="_blank")
                    span Ver más
                    i.fas.fa-file-download

    h4.my-4 Procedimiento o protocolo de compras

    .row.justify-content-center.mt-5
      p El procedimiento o protocolo de compras, dentro de la organización, está descrito por el conjunto de pasos sistemáticos que permiten estandarizar con éxito la adquisición de materias primas, insumos y demás, en pro de mayores beneficios.

    .row.justify-content-center.mt-5
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/t6-9.svg', alt='', style='')

          .tarjeta.color-acento-botones.p-4(x="28.4%" y="7%" numero="1" style='')
            h5.mb-3 Solicitud de compra:
            p.mb-0 se da cuando cualquier departamento detecta la necesidad de un bien requerido para su normal funcionamiento dentro de la organización.

          .tarjeta.color-acento-botones.p-4(x="62%" y="7%" numero="2" style='')
            h5.mb-3 Evaluación y selección de proveedor: 
            p.mb-0 el departamento de compras recibe la solicitud y evalúa cuál de los proveedores que trabajan con la organización es más conveniente para realizar el pedido y solicita cotizaciones a distintos proveedores.

          .tarjeta.color-acento-botones.p-4(x="95.5%" y="7%" numero="3" style='')
            h5.mb-3 Negociación de las condiciones de compra:
            p.mb-0 una vez seleccionada una cotización enviada por los proveedores, se hace el contacto para acordar condiciones en la compra y llegar a un acuerdo mutuamente beneficioso.
          
          .tarjeta.color-acento-botones.p-4(x="28%" y="57%" numero="4" style='')
            h5.mb-3 Seguimiento del pedido:
            p.mb-0 una vez terminada la negociación y hecho el envío del pedido al proveedor, se debe realizar un seguimiento de la orden de compra, ya sea con uso de las tecnologías o no, con el fin de que el pedido llegue en fechas ideales y no genere cuellos de botella por desabastecimiento.

          .tarjeta.color-acento-botones.p-4(x="62%" y="57%" numero="5" style='')
            h5.mb-3 Recepción de la mercancía:
            p.mb-0 una vez que el pedido llegue a las instalaciones de la organización se procede a realizar una inspección a profundidad de lo que se va a recibir; esto incluye calidad, cantidad, referencias y precios de lo que se recibe. Si existen discordancias es esencial notificarlas inmediatamente al proveedor para decidir si aceptarlas o realizar devolución.

          .tarjeta.color-acento-botones.p-4(x="95.5%" y="57%" numero="6" style='')
            h5.mb-3 Recepción de la factura:
            p.mb-0 una vez verificada la recepción de la mercancía, la organización finalizará el ciclo de pedido con la recepción de la factura, que deberá contener también coincidencia con la orden de pedido y la recepción en físico; además, debe contener carácter legal, con el fin de que la organización genere procesos contables internos y realizar el pago de esta dentro de los compromisos adquiridos con el proveedor, sin ningún tipo de retraso.

    h4.my-4  Protocolo de compras

    .t6-bkg2
      .row.justify-content-center
        .col-lg-4
          img(src='@/assets/curso/temas/tema6/t6-10.svg', alt='').mb-3        
        .col-lg-8
          p El protocolo de compras es el detalle del procedimiento que sirve para la gestión documental en la empresa. En este se detallan los responsables de cada actividad y los documentos de soporte que se utilizan o se encuentran depositados en un lugar accesible para cualquier colaborador que esté relacionado con el proceso de compras.

          p Detalla, también, la forma como se debe interactuar con el cliente o el proveedor:  por medio de la comunicación y el lenguaje que utiliza la empresa, según el área de comunicaciones.  El protocolo de compras debe ser comprensible, contar con suficiente información y resolver las dudas de los clientes internos y externos.

    h4.my-4 Flujo de proceso

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
        .bloque-texto-g2__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6-11.svg')})`}")
        .bloque-texto-g2__texto.p-4
          p.mb-0 En este punto, se ilustrará el proceso de compras del plan anual de adquisiciones en una organización. Analice el flujograma de ejemplo que se muestra a continuación; este, hace una representación gráfica de los pasos, los puntos de control y los puntos de decisión, hasta llevar a feliz término el procedimiento.

    .row.justify-content-center.mt-5
      .col-auto
        img(src='@/assets/curso/temas/tema6/t6-12.svg', alt='')

    h4.my-4  Plan de contingencias

    .row.justify-content-center
      .col-lg-4
        img(src='@/assets/curso/temas/tema6/t6-13.svg', alt='').mb-3    
      .col-lg-8
        p Para reaccionar frente a situaciones críticas presentadas en cadenas de suministro para sus compras, las organizaciones manejan conceptos sencillos, como <i>stock</i> de seguridad o <i>stock</i> mínimo, los cuales consisten en tener una base de reserva de materias primas e insumos en caso de emergencias o contingencias, con el fin de autoabastecerse mientras se encuentran opciones para solucionar la problemática. El principal objetivo de un plan de contingencia es tomar acciones preventivas ante situaciones que pongan en riesgo el abastecimiento de bienes que la organización requiere para su normal funcionamiento.

    h4.my-4 Principios éticos en la gestión de compras

    .row.justify-content-center
      .col-lg-7
        p.parrafo-color.p-3 Una vez definidas las políticas (compromisos hacia la gestión de compras) que la organización quiere establecer, también se deben redoblar esfuerzos para que los <b>principios éticos de las organizaciones</b> estén reflejados en su gestión de compras. De la mano con las políticas deben ir los compromisos y responsabilidades éticas de cada individuo, las cuales orientan el buen actuar de quienes alimentan el proceso de compras y procuran la obtención responsable y criteriosa de las mejores materias primas, insumos y servicios que generan productos y precios destacados. Una organización con personal que se rige por principios éticos será más y mejor percibida por sus clientes y sus competidores. Ello favorecerá que obtenga relativas ventajas competitivas en el mercado.
      .col-lg-5
        img(src='@/assets/curso/temas/tema6/t6-14.svg', alt='').mb-3           
    p.mt-5 Dentro de esos principios éticos más destacables, se encuentran:
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
              img(src='@/assets/curso/temas/tema6/t6-15.svg', alt='')   


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
