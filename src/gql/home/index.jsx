import base_url from '../api.jsx';
import header_api from '../header_api.jsx';

export const getContentHomePage = async () => {
    const response = await fetch(base_url, {
        ...header_api,
        body: JSON.stringify({
            query: `
            query NewQuery {
                page(id: "cG9zdDozOTU=") {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  homePage {
                    aboutMain {
                      subHeading
                      title
                      subContentSecond
                      description
                    }
                    homeOurServices {
                      top {
                        title
                        subHeading
                        subContentSecond
                        description
                      }
                      listContent {
                        title
                        image {
                          sourceUrl
                        }
                        hover {
                          description
                          title
                          url
                        }
                      }
                    }
                    factsFigures {
                      figures {
                        totalNumber
                        description
                        image {
                          sourceUrl
                        }
                      }
                    }
                    latestNews {
                      description
                      image {
                        sourceUrl
                      }
                    }
                    whyChoose {
                      title
                      description
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