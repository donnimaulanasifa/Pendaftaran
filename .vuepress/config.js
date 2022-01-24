const { description } = require('../package')

module.exports = {
  title: 'Pendaftaran by Donni',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
    repo: 'https://donnimsifa.github.io/Pendaftaran',
    editLinks: false,
    editLinkText: '',
    lastUpdated: true,
    logo: '/homepage.png',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
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
