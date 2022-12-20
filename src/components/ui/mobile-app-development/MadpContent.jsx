const MadpContent = ({ data, step }) => {
    return (
        <div className="madp-col-meta">
            {
                step && <span className="madp-step">Step&nbsp;{step}</span>
            }
            <div className="madp-sttl">
                {
                    data.image && <img src={data.image.sourceUrl} alt=''></img>
                }
                {
                    data.title && <span className="inner-step-title">{data.title}</span>
                }
            </div>
        </div>

    )
}
export default MadpContent;