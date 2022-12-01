const base_url = 'https://72.arrowhitech.net/tn3/digital/graphql'

// Request init
const resquest_init = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

// Primary Menu Header
export const getMenuHeader = async () => {
    const response = await fetch(base_url, {
        ...resquest_init,
        body: JSON.stringify({
            query: `
            query MyQuery2 {
              page(id: "cG9zdDo0MA==") {
                id
                title
                banner {
                  description
                  title
                }
                webdevelopment {
                  items{
                    title
                    image {
                      id
                      sourceUrl
                    }
                    description
                  }
                  services {
                    description
                    techTitle
                    title
                  }
                  fieldGroupName
                }
              }
            }
			      `
        })
    }).then(res => res.json())
        .then(res => res.data)
    return response;
}