import * as prismic from '@prismicio/client'

// Repository name
export const repositoryName = 'clairelittlefair'

const defaultParams = {
  fetchLinks: 'theme.color',
}

export const createClient = ({ request, fetch } = {}) => {
  const client = prismic.createClient(repositoryName, { fetch, defaultParams })

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    if (doc.uid === 'homepage') return '/'
    return '/' + doc.uid
  }
  return '/'
}
