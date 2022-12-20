import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentMobileAppDevelopment = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
                    query NewQuery {
                        page(id: "cG9zdDozMTQ=") {
                        title
                        content
                        featuredImage {
                            node {
                            sourceUrl
                            }
                        }
                        mobileAppDevelopment {
                            ourTechnologyStack {
                            title
                            description
                            image {
                                sourceUrl
                            }
                            }
                            appFeatures {
                            bannerTitle {
                                title
                                description
                            }
                            items {
                                square
                                title
                                description
                            }
                            }
                            ourMobile {
                            bannerTitle {
                                title
                                description
                            }
                            items {
                                title
                                image {
                                sourceUrl
                                }
                            }
                            }
                            ourServices {
                            services {
                                title
                                techTitleTitle
                                location
                                description
                                columnLeft
                                image {
                                sourceUrl
                                }
                            }
                            items {
                                title
                                description
                                image {
                                sourceUrl
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