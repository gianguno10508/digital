import { Markup } from "interweave";

//Img, title, description, button, tag title
const Background1 = ({ data }) => {
    // console.log(data);
    return (
        <div className="section-banner">
            <div className="banner-title">
                <div className="container">
                    <div className="title">
                        <Markup content={data.title} />
                    </div>

                    <div className="content">
                        <Markup content={data.content || data.description} />
                    </div>


                </div>
            </div>

            <div className="top-banner">
                <div className="image-banner">
                    <div className="image">
                        <picture>
                            {data.img_responsive && (
                                <source
                                    media="(max-width: 767px)"
                                    srcSet={data.img_responsive}
                                />
                            )}
                            {
                                data.image && <img src={data.image.sourceUrl} alt="" className="banner-image" />
                            }

                        </picture>
                    </div>
                </div>
            </div>
            {data.url && (
                <div className="button-link">
                    <a href={data.url} className="button">
                        {data.button}
                    </a>
                </div>
            )}
        </div>
    );
};
export default Background1;
