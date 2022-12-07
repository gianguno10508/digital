import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentAboutUs = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
      query NewQuery {
        page(id: "cG9zdDoyMw==") {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          aboutUs {
            figures {
              description
              totalNumber
              image {
                sourceUrl
              }
            }
            items {
              description
              title
              image {
                sourceUrl
              }
            }
            ourTeam {
              sourceUrl
            }
            ourVision {
              description
              title
              image {
                sourceUrl
              }
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