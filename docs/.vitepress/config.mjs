import { defineConfig } from 'vitepress'
import enhanceAppGA from './enhanceAppGA.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CellAgent",
  // description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '',
    logo: '/logo.png',
    nav: [
      { text: 'Research', link: '#' },
      { text: 'CellAgent', link: 'http://cell.agent4science.cn/start/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '#' }
    ]
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-38HM5BF06F' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-38HM5BF06F');
    `]
  ]
})
