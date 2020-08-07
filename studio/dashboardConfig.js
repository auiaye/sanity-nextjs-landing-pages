export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2ccd095019378e3f93f18b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p8wg52iy',
                  apiId: 'ac7678c3-9362-464e-ac20-08c794a5629c'
                },
                {
                  buildHookId: '5f2ccd09953e720910ce5d04',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4kdg2j25',
                  apiId: '99c3ed60-28c0-462e-a975-54638afbbd3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/auiaye/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4kdg2j25.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
