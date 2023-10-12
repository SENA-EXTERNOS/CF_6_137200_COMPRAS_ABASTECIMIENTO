export default {
  global: {
    componenteFormativo: 'Planes y programas de compras',
    descripcionCurso:
      'Este componente formativo tiene como objetivo que el aprendiz adquiera conocimientos sobre el proceso de compra en función de la adquisición de bienes y servicios más rentables para la organización, conociendo sobre las políticas de compras que se deben llevar a cabo, con una debida planeación y puesta en marcha del plan de compras en la cadena de suministro de cada empresa. ',

    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-princiapal.svg'),
      },
    ],
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
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Orden de pedido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pronósticos de compra',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Verificación de los productos adquiridos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Programación de la compra',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'La compra',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Plan de compras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Cronograma de compras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Cadena de suministro',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Contratación pública',
        desarrolloContenidos: true,
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
      tema: 'Verificación de los productos adquiridos',
      referencia:
        'Antonia Cruz Fernández, (2017). <em>UF0476 Gestión de inventarios</em>. IC Editorial.',
      tipo: 'Manual',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10484',
    },
    {
      tema: 'Contratación pública',
      referencia: 'ICONTEC - Instituto Colombiano de Normas Técnicas. (2018). ',
      tipo: 'Norma',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://e-collection.icontec.org%2fnormavw.aspx%3fID%3d78777',
    },
    {
      tema: 'Contratación pública',
      referencia:
        'Decreto 4170 de 2011. (Departamento Administrativo de Función Pública). Por el cual se crea la Agencia Nacional de Contratación Pública – Colombia Compra Eficinete-, se determinan sus objetivos y estructura. Noviembre 3 de 2011.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44643',
    },
    {
      tema: 'Contratación pública',
      referencia:
        'SIGEPRE. (2022). <i>Instructivo elaboración análisis del sector</i>.',
      tipo: 'PDF',
      link:
        'https://dapre.presidencia.gov.co/dapre/DocumentosSIGEPRE/I-BS-02-instructivo-elaboracion-analisis-sector.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'se conoce como abastecimiento al proceso mediante el cual los proveedores facilitan medios al resto de grupos económicos o individuos, los cuales consiguen un determinado nivel de satisfacción o utilidad (Galán, 2021).',
    },
    {
      termino: 'Cadenas de distribución',
      significado:
        'la definición más sencilla que se puede hacer de este concepto es que se trata de todos los procesos que se realizan a partir del momento en el cual un producto ha sido fabricado, y hasta el momento en el que llega a las manos de los clientes.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'una cadena de suministro es el conjunto de actividades, instalaciones y medios de distribución necesarios para llevar a cabo el proceso de venta de un producto en su totalidad. Esto es, desde la búsqueda de materias primas y su posterior transformación hasta la fabricación, transporte y entrega al consumidor final (Westreicher, 2020).',
    },
    {
      termino: 'Cadena logística',
      significado:
        'la cadena logística comprende la organización y coordinación de todos los movimientos de mercancía, el almacenamiento y la gestión de ubicaciones en almacenes, centros de producción y distribución, así como la sincronización entre operativas de transporte interno y externo de productos.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'los canales de distribución están definidos por las diferentes fases o etapas por las que un producto pasa, de modo que su propiedad va pasando de unas manos a otras: desde el fabricante al consumidor o usuario final (Galán, 2021).',
    },
    {
      termino: 'Demanda',
      significado:
        'la demanda es la solicitud para adquirir algo. En economía, la demanda es la cantidad total de un bien o servicio que la gente desea adquirir (Peiro, 2015).',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'la gestión de inventarios es la administración respecto al ingreso y salida de insumos, productos terminados o semiterminados, bienes auxiliares y herramientas que posee una empresa (Westreicher, 2020).',
    },
    {
      termino: 'Inventario final',
      significado:
        'el inventario final es aquel que se registra al terminar un ejercicio contable, previo control de entradas y salidas de existencias (Llamas, Economipedia, 2020).',
    },
    {
      termino: 'Inventario inicial',
      significado:
        'el inventario inicial es aquel que se registra al comienzo de un ejercicio contable, previo cálculo de variaciones de este al final del ejercicio anterior (Llamas, 2020).',
    },
    {
      termino: 'Orden de compra',
      significado:
        'una orden de compra, también llamada orden de pedido o nota de pedido, es un documento mediante el cual el comprador solicita mercancías al vendedor (Rus, 2020).',
    },
    {
      termino: 'Regulación',
      significado:
        'la regulación consiste en establecer normas o leyes para disponer un determinado orden en un ámbito jurídico concreto. Esto por parte del Estado, a través del ejercicio de la legislación (Trujillo, 2022).',
    },
    {
      termino: 'Sistema de inventario',
      significado:
        'el sistema de inventarios es el grupo de reglas y procesos que implementa una empresa para planificar y supervisar las mercancías y los materiales de los que dispone (Westreicher, 2020).',
    },
    {
      termino: 'Valoración de inventario',
      significado:
        'son técnicas aplicadas para valorar las unidades en almacén en términos monetarios. Esta valoración es especialmente útil cuando las unidades se van adquiriendo a distintos precios (Marco, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenal Laza, C. (2022).<i> Gestión de Proveedores</i>. MF1004. 1. Editorial Tutor Formación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/215982',
    },
    {
      referencia:
        'Dueñas Nogueras, J. (2017). MF1004_3: <i>Gestión de proveedores</i>. IC Editorial.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8747',
    },
    {
      referencia:
        'Escrivá Monzó, J., Martínez García, A., Savall Llidó, V.(2014). <i>Gestión de compras</i>. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5353',
    },
    {
      referencia:
        'Escudero Serrano, M (2019). <i>Gestión de compras</i>, Editorial Paraninfo.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=19079',
    },
    {
      referencia:
        'Gómez Aparicio, J. M. (2014). <i>Gestión logística y comercial</i>. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5256',
    },
    {
      referencia:
        'Johnson, P. F., Flynn, A. E., Leenders, M. R. (2012). <i>Administración de compras y abastecimientos</i>. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=286',
    },
    {
      referencia:
        'Soriano Soriano, C. L. (2012). <i>Compras e inventarios</i>. Ediciones Díaz de Santos.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4971',
    },
    {
      referencia:
        'Sunil, C., Meindel, P., & Pino, R. (2017). <i>Administración de la cadena de suministro</i>. Pearson. Ebooks7-24 (sena.edu.co)',
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
