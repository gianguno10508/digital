import { Link } from "react-router-dom";
import ScrollEffect from "./ScrollEffect";

//img, title, description, button link, number, url, span square
const MainItemCol = ({ data, number, onEffect }) => {
  return (
    <>
      {data.square && (
        <div className="square" style={{ backgroundColor: data.square }}></div>
      )}
      {data.img && (
        <div className="box-icon">
          <span>
            <img src={data.img} />
          </span>
        </div>
      )}
      {number && (
        <div className="number">
          <span>{number}</span>
        </div>
      )}
      {data.title && onEffect ? (
        <ScrollEffect
          children={
            <div className="title">
              {data.type_title == "h1" ? (
                <h1>{data.title}</h1>
              ) : data.type_title == "h2" ? (
                <h2>{data.title}</h2>
              ) : (
                <p>{data.title}</p>
              )}
            </div>
          }
        />
      ) : (
        <div className="title">
          {data.type_title == "h1" ? (
            <h1>{data.title}</h1>
          ) : data.type_title == "h2" ? (
            <h2>{data.title}</h2>
          ) : (
            <p>{data.title}</p>
          )}
        </div>
      )}
      {data.description && (
        <div className="description">
          <p>{data.description}</p>
        </div>
      )}
      {data.url ? (
        <div className="button-link">
          <Link to={`/${data.url}`} className="button">
            {data.button}
          </Link>
        </div>
      ) : (
        <div className="button-link">
          <Link to='/' className="button">
            {data.button}
          </Link>
        </div>
      )}
    </>
  );
};
export default MainItemCol;
