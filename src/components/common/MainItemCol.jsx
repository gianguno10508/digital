//img, title, description, button link, number, url, span square
const MainItemCol = ({ data }) => {
    return (
        <>
            {data.square && <div className="square" style={{ backgroundColor: data.square }}></div>}
            {data.img && (
                <div className="box-icon">
                    <span>
                        <img src={data.img} />
                    </span>
                </div>
            )}
            {data.number && (
                <div className="number">
                    <span>{data.number}</span>
                </div>
            )}
            {data.title && (
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
            {data.url && (
                <div className="button-link">
                    <a href={data.url} className="button">{data.button}</a>
                </div>
            )}
        </>

    )

}
export default MainItemCol;