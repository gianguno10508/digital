import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentOurSolution = async () => {
  const response = await fetch(base_url, {
    ...header_api,
    body: JSON.stringify({
      query: `
            query NewQuery {
              page(id: "cG9zdDo1MzI=") {
                title
                content
                ourSolution {
                  introduce
                  listImage {
                    plaform1 {
                      sourceUrl
                    }
                    plaform2 {
                      sourceUrl
                    }
                    plaform3 {
                      sourceUrl
                    }
                  }
                  scrollTime {
                    title
                    description
                    image {
                      sourceUrl
                    }
                    columnLeft
                    location
                  }
                }
              }
            }
			      `
    })
  }).then(res => res.json())
    .then(res => res.data)
  return response;
}