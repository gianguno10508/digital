import { Markup } from "interweave";
import ScrollEffect from "./ScrollEffect";

//Img, title, description, button, tag title
const ItemHasBackground = ({ data, onEffectTitle }) => {
  return (
    <div
      className="inner-block"
      style={{ backgroundImage: `url(${data.img})` }}
    >
      {onEffectTitle ? (
        <ScrollEffect
          children={
            data.type_title == "h1" ? (
              <h1>{data.title}</h1>
            ) : data.type_title == "h2" ? (
              <h2>{data.title}</h2>
            ) : (
              <p>{data.title}</p>
            )
          }
        />
      ) : data.type_title == "h1" ? (
        <h1>{data.title}</h1>
      ) : data.type_title == "h2" ? (
        <h2>{data.title}</h2>
      ) : (
        <p>{data.title}</p>
      )}

      <div className="description">
        <Markup content={data.description} />
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
export default ItemHasBackground;
