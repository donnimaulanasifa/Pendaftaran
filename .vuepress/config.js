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
    repo: 'https://donnimsifa.github.io/Pendaftaran',
    editLinks: false,
    editLinkText: '',
    logo: '/RSMasmitra.png',
    nav: [{
        text: 'Panduan',
        link: '/panduan/',
      }
    ],
    sidebar: [{
      title: 'Penting',
      collapsable: false,
      sidebarDepth: 1,
      children: [
          'pembukaan',
          'istilah',
          'notel',
          'logintera',
        ]

    },
    {
        title: 'Panduan',
        collapsable: false,
        sidebarDepth: 2,
        children: [{
            title: 'Mendaftarkan',
            collapsable: true,
            path: '/panduan/',
            sidebarDepth: 1,
            children: [
                '/panduan/loket-a',
                '/panduan/loket-b',
                '/panduan/igd',
            ],
        },
            '/panduan/rawat-inap',
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
