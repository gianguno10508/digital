import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentCaseStudies = async () => {
  const response = await fetch(base_url, {
    ...header_api,
    body: JSON.stringify({
      query: `
      query NewQuery {
        page(id: "cG9zdDo0NDc=") {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          caseStudies {
            caseList {
              title
              category
              content
              image {
                sourceUrl
              }
            }
            listCategory {
              list {
                title
                image {
                  sourceUrl
                }
                description
                content
              }
              category
            }
            lastestNews {
              title
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