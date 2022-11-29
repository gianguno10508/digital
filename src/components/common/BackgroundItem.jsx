import { Markup } from "interweave";

//Img, title, description, button, tag title
const BackgroundItem = ({ data }) => {
  return (
    <div className="section-banner">
      <div className="banner-title">
        <div className="title">
          {data.type_title == 'h1' ? 
          <h1>{data.title}</h1>
          : data.type_title == 'h2' ? 
          <h2>{data.title}</h2> :
          <p>{data.title}</p>
          }
        </div>
        <div className="description">
          <Markup content={data.description} />
        </div>
      </div>
      <div className="top-banner">
        <div className="image-banner">
            <div className="image">
                <picture>
                    {data.img_responsive && <source media="(max-width: 767px)" srcset={data.img_responsive} />}
                    <img src={data.img} alt="" className="banner-image" />
                </picture>
            </div>
        </div>
      </div>
      {data.button && <div className="button-link">{data.title_button}</div>}
    </div>
  );
};
export default BackgroundItem;
