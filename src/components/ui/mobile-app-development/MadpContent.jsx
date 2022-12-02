const MadpContent = ({ data }) => {
    return (
        <div className="madp-col-meta">
            {
                data.step && <span className="madp-step">Step&nbsp;{data.step}</span>
            }
            <div className="madp-sttl">
                {
                    data.img && <img src={data.img} alt=''></img>
                }
                {
                    data.title && <span className="inner-step-title">{data.title}</span>
                }
            </div>
        </div>

    )
}
export default MadpContent;