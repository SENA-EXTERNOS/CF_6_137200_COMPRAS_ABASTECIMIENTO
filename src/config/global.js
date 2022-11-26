export default {
  global: {
    componenteFormativo: 'Planes y programas de compras',
    descripcionCurso:
      'Este componente formativo tiene como objetivo que el aprendiz adquiera conocimientos sobre el proceso de compra para adquirir bienes y servicios más rentables para la organización, conociendo sobre las políticas de compras que se deben llevar a cabo, con una debida planeación y puesta en marcha del plan de compras en la cadena de suministro de cada empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Disponibilidad de producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Orden de pedido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de pronósticos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Validaciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pronósticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de pronósticos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de verificación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características e importancia',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de programación',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Metodologías',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Alcance',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Compras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Política de compras',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Procedimiento',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Protocolos',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Flujo de proceso',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Contingencias',
            hash: 't_6_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.6',
            titulo: 'Principios éticos',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Plan de compras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Tipos de plan de compras',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Características',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Presupuesto',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Cronograma',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Tipos de cronograma',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Características de cronograma',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Tipos de eslabones',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Regulaciones de los parámetros de planeación',
            hash: 't_9_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.3',
            titulo: 'Demanda y restricciones',
            hash: 't_9_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.4',
            titulo: 'Canales de distribución',
            hash: 't_9_4',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Contratación pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Estudios del sector',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Plan anual de adquisiciones',
            hash: 't_10_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.3',
            titulo: 'Modalidades de selección',
            hash: 't_10_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.4',
            titulo: 'Sistema electrónico de contratación pública (SECOP)',
            hash: 't_10_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.5',
            titulo: 'Normativa',
            hash: 't_10_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión de inventarios',
      referencia:
        'Antonia Cruz Fernández, (2017). <em>UF0476 Gestión de inventarios.</em>',
      tipo: 'Manual',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10484',
    },
    {
      tema: 'ISO 31000 Gestión del riesgo. Directrices',
      referencia: 'ICONTEC - Instituto Colombiano de Normas Técnicas, 2018 ',
      tipo: 'Norma NTC 31000',
      link: '',
    },
    {
      tema:
        'Decreto 4170 de 2011, “Por el cual se crea la Agencia Nacional de Contratación Pública -Colombia Compra Eficiente-, se determinan sus objetivos y estructura.”',
      referencia:
        'Departamento Administrativo de la Función Pública, (2011), Decreto 4170 de 2011',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=44643',
    },
    {
      tema: 'I-BS-02-instructivo-elaboracion-analisis-sector.pdf',
      referencia:
        'Presidencia de la República, (2020), I-BS-02-instructivo-elaboracion-analisis-sector.',
      tipo: 'PDF',
      link:
        'https://dapre.presidencia.gov.co/dapre/DocumentosSIGEPRE/I-BS-02-instructivo-elaboracion-analisis-sector.pdf',
    },
    {
      tema: 'Guía para la Elaboración de Estudios de Sector',
      referencia:
        'Colombia compra eficiente, (2020) Guía para la Elaboración de Estudios de Sector',
      tipo: 'PDF',
      link:
        'http://www.nuevalegislacion.com/files/susc/cdj/doct/guia_es_14.pdf',
    },
    {
      tema: 'DAPRE-Plan-Anual-Adquisiciones-2022',
      referencia:
        'Presidencia de la República, (2022), DAPRE-Plan-Anual-Adquisiciones-2022.',
      tipo: 'PDF',
      link:
        'https://dapre.presidencia.gov.co/dapre/DocumentosPresupuesto/DAPRE-Plan-Anual-Adquisiciones-2022.pdf',
    },
    {
      tema: 'Demanda',
      referencia: 'Peiro, A. (2015). <em>Demanda</em>. Economipedia.',
      tipo: 'Página',
      link: 'https://economipedia.com/definiciones/demanda.html',
    },
    {
      tema: 'Cadena de suministro',
      referencia: 'Westreicher, G. (2020). Suministro. <em>Economipedia.</em>',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/suministro.html',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'se conoce como abastecimiento al proceso mediante el cual los proveedores facilitan medios al resto de grupos económicos o individuos, los cuales consiguen un determinado nivel de satisfacción o utilidad. (Galán, 2021).',
    },
    {
      termino: 'Cadenas de distribución',
      significado:
        'la definición más sencilla que se puede hacer de este concepto es que se trata de todos los procesos que se realizan a partir del momento en el cual un producto ha sido fabricado, y hasta el momento en el que llega a las manos de los clientes.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'una cadena de suministro es el conjunto de actividades, instalaciones y medios de distribución necesarios para llevar a cabo el proceso de venta de un producto en su totalidad. Esto es, desde la búsqueda de materias primas y su posterior transformación hasta la fabricación, transporte y entrega al consumidor final. (Westreicher, 2020).',
    },
    {
      termino: 'Cadena logística',
      significado:
        'la cadena logística comprende la organización y coordinación de todos los movimientos de mercancía, el almacenamiento y la gestión de ubicaciones en almacenes, centros de producción y distribución, así como la sincronización entre operativas de transporte interno y externo de productos.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'los canales de distribución están definidos por las diferentes fases o etapas por las que un producto pasa, de modo que su propiedad va pasando de unas manos a otras: desde el fabricante al consumidor o usuario final. (Galán, 2021).',
    },
    {
      termino: 'Demanda',
      significado:
        'la demanda es la solicitud para adquirir algo. En economía, la demanda es la cantidad total de un bien o servicio que la gente desea adquirir. (Peiro, 2015).',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'la gestión de inventarios es la administración respecto al ingreso y salida de insumos, productos terminados o semiterminados, bienes auxiliares y herramientas que posee una empresa. (Westreicher, 2020).',
    },
    {
      termino: 'Inventario final',
      significado:
        'el inventario final es aquel que se registra al terminar un ejercicio contable, previo control de entradas y salidas de existencias. (Llamas, Economipedia, 2020).',
    },
    {
      termino: 'Inventario inicial',
      significado:
        'el inventario inicial es aquel que se registra al comienzo de un ejercicio contable, previo cálculo de variaciones de este al final del ejercicio anterior. (Llamas, 2020).',
    },
    {
      termino: 'Orden de compra',
      significado:
        'una orden de compra, también llamada orden de pedido o nota de pedido, es un documento mediante el cual el comprador solicita mercancías al vendedor. (Rus, 2020).',
    },
    {
      termino: 'Regulación',
      significado:
        'la regulación consiste en establecer normas o leyes para disponer un determinado orden en un ámbito jurídico concreto. Esto por parte del Estado, a través del ejercicio de la legislación. (Trujillo, 2022).',
    },
    {
      termino: 'Sistema de inventario',
      significado:
        'el sistema de inventarios es el grupo de reglas y procesos que implementa una empresa para planificar y supervisar las mercancías y los materiales de los que dispone. (Westreicher, 2020).',
    },
    {
      termino: 'Valoración de inventario',
      significado:
        'son técnicas aplicadas para valorar las unidades en almacén en términos monetarios. Esta valoración es especialmente útil cuando las unidades se van adquiriendo a distintos precios. (Marco, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenal Laza, C. (2022). Gestión de Proveedores. MF1004. 1. Editorial Tutor Formación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/215982',
    },
    {
      referencia:
        'Dueñas Nogueras, J. (2017). MF1004_3: Gestión de proveedores. IC Editorial.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8747',
    },
    {
      referencia:
        'Escrivá Monzó, J., Martínez García, A., Savall Llidó, V.(2014). Gestión de compras. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5353',
    },
    {
      referencia:
        'Escudero Serrano, M (2019). Gestión de compras, Editorial Paraninfo.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=19079',
    },
    {
      referencia:
        'Gómez Aparicio, J. M. (2014). Gestión logística y comercial. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5256',
    },
    {
      referencia:
        'Johnson, P. F., Flynn, A. E., Leenders, M. R. (2012). Administración de compras y abastecimientos. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=286',
    },
    {
      referencia:
        'Soriano Soriano, C. L. (2012). Compras e inventarios. Ediciones Díaz de Santos.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4971',
    },
    {
      referencia:
        'Sunil Chopra, Meindel Peter, Pino Ricardo, Administración de la cadena de suministro. Pearson educación de Perú, 2017.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
