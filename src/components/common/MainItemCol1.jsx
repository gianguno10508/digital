import { Markup } from "interweave";
import NumberRun from "./NumberRun";

const MainItemCol1 = ({ data, number }) => {
    if (data.totalNumber) {
        var leng = data.totalNumber.length;
    }

    return (
        <>
            {data.square && <div className="square" style={{ backgroundColor: data.square }}></div>}
            {
                data.image && <div className="box-icon">
                    <span>
                        <img src={data.image.sourceUrl} alt='' />
                    </span>
                </div>
            }

            {
                data.sourceUrl && <div className="box-icon">
                    <span>
                        <img src={data.sourceUrl} alt='' />
                    </span>
                </div>
            }
            {number && (
                <div className="number">
                    <span>{number}</span>
                </div>
            )}
            <div className="totalNumber">
                {
                    data.totalNumber &&
                        data.totalNumber[leng - 1] == "%" ?
                        <h3><NumberRun number={data.totalNumber.slice(0, leng - 1)} />%</h3>
                        : data.totalNumber && data.totalNumber[0] == "+" ?
                            <h3>+<NumberRun number={data.totalNumber.slice(1)} /></h3>
                            : null
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

            {
                data.url && (
                    <div className="button-link">
                        <a href={data.url} className="button">{data.button}</a>
                    </div>
                )
            }
        </>

    )

}
export default MainItemCol1;