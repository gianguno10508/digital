import { Markup } from "interweave";
import ScrollEffect from "./ScrollEffect";

//Img, title, description, button, tag title
const BackgroundItem = ({ data, onEffectTitle }) => {
  // console.log(data);
  return (
    <div className="section-banner">
      <div className="banner-title">
        <div className="container">
          {data.title && onEffectTitle ? (
            <ScrollEffect
              children={<div className="title">{<Markup content={data.title} />}</div>}
            />
          ) : (
            <div className="title">{<Markup content={data.title} />}</div>
          )}
          <Markup content={data.description} />
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
              <img src={data.image.sourceUrl} alt="" className="banner-image" />
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
