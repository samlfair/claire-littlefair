import * as prismic from '@prismicio/client'

// Repository name
export const repositoryName = 'clairelittlefair'

const defaultParams = {
  fetchLinks: 'theme.color',
}

const routes = [
  {
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'page',
    uid: 'homepage',
    path: '/',
  },
]

export const createClient = ({ request, fetch } = {}) => {
  const client = prismic.createClient(repositoryName, {
    fetch,
    defaultParams,
    routes,
  })

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}
