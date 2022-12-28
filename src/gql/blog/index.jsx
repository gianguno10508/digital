import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentBlog = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
      query NewQuery {
        page(id: "cG9zdDo1Njg=") {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
          blog {
            listBlog {
              title
              image {
                sourceUrl
              }
              description
              content
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