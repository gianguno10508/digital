import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentWebDevelopment = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
            query MyQuery2 {
              page(id: "cG9zdDo0MA==") {
                title
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                webdevelopment {
                  services {
                    image {
                      sourceUrl
                    }
                    columnLeft
                    description
                    location
                    techTitleTitle
                    title
                  }
                  items {
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