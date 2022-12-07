import { Markup } from "interweave";

const MainItemCol1 = ({ data, number }) => {
    return (
        <>
            {data.square && <div className="square" style={{ backgroundColor: data.square }}></div>}
            {data.image && (
                <div className="box-icon">
                    <span>
                        <img src={data.image.sourceUrl} alt='' />
                    </span>
                </div>
            )}
            {number && (
                <div className="number">
                    <span>{number}</span>
                </div>
            )}
            <div className="totalNumber">
                {
                    data.totalNumber && <h3>{data.totalNumber}</h3>
                }
            </div>
            <div className="content-title">
                {data.title && (
                    <div className="title">
                        <Markup content={data.title} />
                    </div>
                )}
                {data.description && (
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                )}
            </div>

            {data.url && (
                <div className="button-link">
                    <a href={data.url} className="button">{data.button}</a>
                </div>
            )}
        </>

    )

}
export default MainItemCol1;