import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentWhiteLabelSoftware = async () => {
  const response = await fetch(base_url, {
    ...header_api,
    body: JSON.stringify({
      query: `
      query NewQuery {
        page(id: "cG9zdDo0Mw==") {
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          whiteLabelSoftwareService {
            ourServices {
              image {
                sourceUrl
              }
              items {
                title
                description
                image{
                  sourceUrl
                }
              }
              listImage {
                sourceUrl
              }
            }
            digital {
              title
              image {
                sourceUrl
              }
              digital {
                title
              }
            }
            whyChooseUs {
              image {
                sourceUrl
              }
              items {
                description
                title
                image {
                  sourceUrl
                }
              }
            }
            timeLine {
              listTimeLine {
                title
              }
              timeLineResult
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