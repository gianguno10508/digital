//img, title, description, button link, number, url, span square
const MainItemCol = ({...rest}) =>{
    rest.square && <div className="square"></div>;
    rest.img && (
        <div className="box-icon">
            <span>
                <img src={rest.img} />
            </span>
        </div>
    )
    rest.number && (
        <div className="number">
            <p>{rest.number}</p>
        </div>
    )
    rest.title && (
        <div className="title">
            <p>{rest.title}</p>
        </div>
    )
    rest.description && (
        <div className="description">
            <p>{rest.description}</p>
        </div>
    )
    rest.button && (
        <div className="button-link">
            <a href={rest.url} className="button"></a>
        </div>
    )
}
export default MainItemCol;