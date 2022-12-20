import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentHireDevelopers = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
            query NewQuery {
                page(id: "cG9zdDo0OQ==") {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  hireDevelopers {
                    listItems {
                      title
                      image {
                        sourceUrl
                      }
                      description
                      caption
                      location
                      columnLeft
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