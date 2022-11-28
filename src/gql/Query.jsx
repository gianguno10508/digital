const base_url = 'http://localhost:828/graphql'

// Request init
const resquest_init = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

}

// Primary Menu Header
export const getMenuHeader = async () => {
    const response = await fetch(base_url, {
        ...resquest_init,
        body: JSON.stringify({
            query: `
				{
                    menus(where: {location: PRIMARY}) {
                        edges {
                          node {
                            menuItems {
                              edges {
                                node {
                                  label
                                  path
                                }
                              }
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