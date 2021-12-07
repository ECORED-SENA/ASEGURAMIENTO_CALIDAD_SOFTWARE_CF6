export default {
  global: {
    componenteFormativo: 'Patrones de diseño de <em>software</em>',
    descripcionCurso:
      'Los patrones de diseño de <em>software</em> surgen a partir de experiencias desarrolladas en la industria y representan un conjunto de formas estandarizadas, probadas y repetibles, que permiten resolver uno o varios problemas particulares que se presentan en el diseño del <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.svg'),
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
        titulo: 'Conceptos GOF',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Patrones de arquitectura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Patrón multicapa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Patrón Modelo Vista Controlador',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Arquitectura monolítica',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Microservicios',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Diseño de la arquitectura',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Estilos arquitectónicos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Patrones comportamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estrategia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Comando',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Iterator</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Patrones creacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<em>Singleton</em>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fábrica abstracta',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Patrones estructurales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Fachada',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '<em>Delegate</em>',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Vistas estáticas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Diagrama de despliegue',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Diagrama de componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Síntesis',
            hash: 'Sintesis',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        '<em>Amazon Web Services</em> [AWS]. (s. f.). Microservicios.',
      link: 'https://aws.amazon.com/es/microservices',
    },
    {
      referencia:
        'Blancarte, O. (2020). Arquitectura Monolítica. Reactive Programming.',
      link:
        'https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/monolitico',
    },
    {
      referencia:
        'Cinergix Pty. Ltd. (2021). La Guía Fácil de los Diagramas de Despliegue UML. Blog de Creately.',
      link:
        'https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-despliegue',
    },
    {
      referencia: 'Diagramas UML. (2019). Diagrama de componentes.',
      link: 'https://diagramasuml.com/componentes',
    },
    {
      referencia: 'EcuRed. (s. f.). Patrones Gof.',
      link: 'https://www.ecured.cu/Patrones_Gof',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R., Vlissides, J. y Booch, G. (1994). <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley Professional.',
    },
    {
      referencia:
        'ITCA-FEPADE. (s. f.). Análisis y diseño de sistemas. 2.2.2 Diagramas UML estáticos.',
      link:
        'https://virtual.itca.edu.sv/Mediadores/ads/222_diagramas_uml_estticos.html',
    },
    {
      referencia:
        'Landa, N. [nicosiored]. (2018c). Patrones de Diseño de <em>Software</em> [Video]. YouTube.',
      link:
        'https://www.youtube.com/playlist?list=PLM-p96nOrGcbqbL_A29b0z3KUXdq2_fpn',
    },
    {
      referencia:
        'Landeta_P. (2013). 2 2 estilos arquitectónicos. <em>Slideshare</em>.',
      link: 'https://es.slideshare.net/landeta_p/2-2-estilos-arquitectonicos',
    },
    {
      referencia:
        'Novoseltseva, E. (2020). Los 5 principales patrones de Arquitectura de <em>Software. Apiumhub.</em>',
      link:
        'https://apiumhub.com/es/tech-blog-barcelona/principales-patrones-arquitectura-software',
    },
    {
      referencia:
        'Universidad de Alicante. (s. f.). Modelo Vista Controlador (MVC). Servicio de Informática ASP.NET MVC 3 <em>Framework</em>.',
      link:
        'https://si.ua.es/es/documentacion/asp-net-mvc-3/1-dia/modelo-vista-controlador-mvc.html',
    },
  ],
  glosario: [
    {
      termino: 'Acoplamiento',
      significado:
        'El acoplamiento es la forma y nivel de interdependencia entre módulos de <em>software</em>; una medida de qué tan cercanamente conectados están dos rutinas o módulos de software.',
    },
    {
      termino: 'API',
      significado:
        'Una API es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones. API significa interfaz de programación de aplicaciones. Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados.',
    },
    {
      termino: 'Aplicación',
      significado:
        'Una aplicación es un programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Una base de datos es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: '<em>Browser</em>',
      significado:
        'es el término inglés que se utiliza para identificar a un navegador web o navegador de Internet. Consiste en un software, programa o incluso aplicación que ofrece al usuario el acceso a la red.',
    },
    {
      termino: 'Delegar',
      significado:
        'Dar [una persona o un organismo] un poder, una función o una responsabilidad a alguien para que los ejerza en su lugar o para obrar en representación suya.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Capacidad de adaptación y respuesta de un sistema con respecto al rendimiento del mismo a medida que aumentan de forma significativa el número de usuarios del mismo.',
    },
    {
      termino: 'Ícono ',
      significado:
        'Signo que representa un objeto o una idea con los que guarda una relación de identidad o semejanza formal.',
    },
    {
      termino: 'Implementación',
      significado:
        'Poner en funcionamiento o aplicar métodos, medidas, etc., para llevar algo a cabo.',
    },
    {
      termino: 'Interfaz',
      significado:
        'Como interfaz se designa, en informática, la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz.',
    },
    {
      termino: 'Patrón',
      significado:
        'Quitar de una cosa lo malo, lo que es extraño o lo que no sirve, para dejarla pura. Los Patrones de diseño (Design Patterns) son una solución general, reutilizable y aplicable a diferentes problemas de diseño de software.',
    },
    {
      termino: 'Servidor',
      significado:
        'Un servidor es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Según su definición, la sintaxis es la “parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que éstas forman para expresar significados, así como las relaciones que se establecen entre todas esas unidades”.',
    },
    {
      termino: 'Sitio web',
      significado:
        'Un sitio web es un conjunto de páginas web accesibles a través de Internet, convenientemente enlazadas y con una finalidad concreta.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'Los <em>stakeholders</em> se relacionan con las entidades clave de los proyectos de desarrollo: requerimientos, actividades y resultados.',
    },
    {
      termino: 'UML',
      significado:
        'Lenguaje unificado de modelado. Relaciona un conjunto de diagramas estandarizados para la representación de sistemas de información desde diferentes tipos de vista.',
    },
    {
      termino: 'Web',
      significado:
        'Conjunto de información que se encuentra en una dirección determinada de Internet.',
    },
  ],
  complementario: [
    {
      nombre:
        'Leiva, A. [DevExperto]. (2020). Patrones de diseño software: Repaso completo en 10 minutos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/6BHOeDL8vls',
    },
    {
      nombre:
        'Landa, N. [nicosiored]. (2018b). Diagrama de Despliegue - 22 - Tutorial UML en español [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/NSB0ATJUavA',
    },
    {
      nombre:
        'Landa, N. [nicosiored]. (2018a). Diagrama de Componentes I - 20- Tutorial UML en español [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/oOycG_n1ARs',
    },
    {
      nombre:
        'Garrido, A. [Universitat Politècnica de València – UPV]. (2017). Arquitectura del <em>software</em> multicapa [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/kHvxX1E9vIU',
    },
    {
      nombre:
        'Fazt. (2017). ¿What is the MVC Pattern?, <em>Simple explanation</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/ANQDmqBYwns',
    },
    {
      nombre:
        '<em>Lazy Loading</em>. (2021). Arquitectura monolítica vs microservicios [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/99YMeCBk3jw',
    },
    {
      nombre:
        '<em>Mercury</em> 7w7. (2020). Estilos de Arquitectura de <em>Software</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PK9TTcTosTw',
    },
    {
      nombre:
        '<em>MegaPractical</em>. (2016). Arquitectura Orientada a Servicios (SOA), <em>Enterprise Service Bus</em> TIBCO en español [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/o_Br2vZ4uQY',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'David Eduardo Lozada Cerón',
        cargo: 'Experto temático ',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Márquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
