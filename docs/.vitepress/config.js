
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
        text: 'Packages',
        items: [
          { text: 'Journal', link: '/journal/index' },
          { text: 'Treasurer', link: '/teasurer/index' },
          { text: 'Atmosphere', link: '/atmosphere/index' }
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
    },
    base: "/<REPO>"
  }


export default config;