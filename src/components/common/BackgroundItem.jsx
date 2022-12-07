import { Markup } from "interweave";

//Img, title, description, button, tag title
const BackgroundItem = ({ data }) => {
  // console.log(data.content);
  return (
    <div className="section-banner">
      <div className="banner-title">
        <div className="container">
          {data.title && <div className="title">{data.title}</div>}
          <Markup content={data.content} />
        </div>
      </div>

      <div className="top-banner">
        <div className="image-banner">
          <div className="image">
            <picture>
              {data.img_responsive && (
                <source
                  media="(max-width: 767px)"
                  srcset={data.img_responsive}
                />
              )}
              <img src={data.img} alt="" className="banner-image" />
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
export default BackgroundItem;
