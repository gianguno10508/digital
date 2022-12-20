import { Link } from "react-router-dom";

const MainItems = ({ data }) => {
    return (

        <div className="case-studies-inner">
            <div className="case-studies-image">
                <div className="image">
                    <picture>
                        {data.image_responsive && (
                            <source
                                media="(max-width: 767px)"
                                srcset={data.image_responsive.sourceUrl}
                            />
                        )}
                        {data.image && <img src={data.image.sourceUrl} alt="" />}
                    </picture>
                </div>

            </div>

            {
                data.category && <div className="category">{data.category}</div>
            }
            <div className="infor">
                {
                    data.title && <Link to={`/${data.title}`}><h4 className="title">{data.title}</h4></Link>
                }
            </div>
        </div>

    )
}
export default MainItems;