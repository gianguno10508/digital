import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentWebDevelopment = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
            query MyQuery2 {
              page(id: "cG9zdDoy") {
                id
                content
              }
            }
			      `
        })
    }).then(res => res.json())
        .then(res => res.data)
    return response;
}