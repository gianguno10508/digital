//img, title, description, button link, number, url, span square
const MainItemCol = ({ data }) => {
    return (
        <>
            {data.square && <div className="square"></div>}
            {data.img && (
                <div className="box-icon">
                    <span>
                        <img src={data.img} />
                    </span>
                </div>
            )}
            {data.number && (
                <div className="number">
                    <p>{data.number}</p>
                </div>
            )}
            {data.title && (
                <div className="title">
                    <p>{data.title}</p>
                </div>
            )}
            {data.description && (
                <div className="description">
                    <p>{data.description}</p>
                </div>
            )}
            {data.button || data.url && (
                <div className="button-link">
                    <a href={data.url} className="button">Learn More</a>
                </div>
            )}
        </>

    )

}
export default MainItemCol;