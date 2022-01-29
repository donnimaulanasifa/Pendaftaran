const { description } = require('../package')

module.exports = {
  title: 'Panduan Pendaftaran RS Masmitra',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ["link", {
      rel: "'stylesheet",
      href: "/styles/website.css"
    },]
  ],

  base: '/Pendaftaran/',

  watch: {
    $page(newPage, oldPage) {
      if (newPage.key !== oldPage.key) {
        requestAnimationFrame(() => {
          if (this.$route.hash) {
            const element = document.getElementById(this.$route.hash.slice(1));

            if (element && element.scrollIntoView) {
              element.scrollIntoView();
            }
          }
        });
      }
    }
  },

  markdown: {
  extendMarkdown: md => {
    md.use(require('markdown-it-multimd-table'), {
      rowspan: true,
    });
  }
  },
  
  theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
  ],
  
  themeConfig: {
    lastUpdated: true,
    repo: 'https://github.com/donnimsifa',
    editLinks: false,
    editLinkText: '',
    logo: '/RSMasmitra.png',
    nav: [{
        text: 'Direct Message donnimsifa',
        link: 'https://instagram.com/donnimsifa',
      }
    ],
    sidebar: [{
      title: 'Penting',
      collapsable: false,
      sidebarDepth: 1,
      children: [
          '/penting/pembukaan',
          '/penting/pasien',
          '/penting/istilah',
          '/penting/notel',
        ]

    },
    {
        title: 'Tera Medik',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/teramedik/logintera',
            '/teramedik/daftarmenu',
            '/teramedik/panggil',
            '/teramedik/pasienbaru',
            '/teramedik/pasienlama',
            '/teramedik/printantriandanbilling',
            '/teramedik/pasienterdaftar',
            '/teramedik/igd',
            '/teramedik/rawat-inap',
            '/teramedik/datapasien',
        ]
      },
      {
        title: 'Asuransi',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/asuransi/gesek',
            '/asuransi/admedika',
        ]
      },
      {
          title: 'Lain-lain',
          collapsable: false,
          children: [
              '/lainlain/update',
          ]
      },
    ],
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-smooth-scroll',
    ['vuepress-plugin-medium-zoom',
        {
            selector: "img",
            options: {
                background: 'var(--bodyBgColor)'
            }
        }],
    ]
}
