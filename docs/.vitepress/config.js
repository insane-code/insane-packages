
/**
 * @type {import('vitepress').UserConfig}
 */

const config = {
    lang: "en-US",
    title: 'Insane Packages',
    description: 'Packages for the atmosphere ecosystem.',
    outlineTitle: 'In hac pagina',
    themeConfig: {
      nav: [
        { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Insane/Journal', link: '/journal/index' },
          { text: 'Insane/Treasurer', link: '/teasurer/index' },
          { text: 'Insane/Atmosphere', link: '/atmosphere/index' }
        ]
      }
      ],
      sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },
            ]
          }
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019-present Evan You'
      }
    }
  }


export default config;