import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentUxUiDesign = async () => {
  const response = await fetch(base_url, {
    ...header_api,
    body: JSON.stringify({
      query: `
            query MyQuery2 {
                page(id: "cG9zdDo0NQ==") {
                  title
                  content
                  featuredImage {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                  uxUiDesign {
                    onextdigital {
                      items {
                        description
                        title
                        image {
                          id
                          uri
                          altText
                          sourceUrl
                        }
                      }
                    }
                    toolsItems {
                      description
                      image {
                        id
                        sourceUrl
                      }
                      title
                    }
                    whyChooseUs {
                      title
                      services {
                        columnLeft
                        description
                        image {
                          id
                          sourceUrl
                        }
                        location
                        techTitleTitle
                        title
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