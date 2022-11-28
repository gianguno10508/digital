// round, title, description, subtitle
const SessionAbout = ({ data }) => {
    return (
        <>
            <div className="sub-heading">
                <span>{data.sub_heading}</span>
            </div>
            {data.title && <h2>{data.title}</h2>}
            <div className="description">{data.description}</div>
            {data.sub_content_second && (
                <p className="sub-content-second">{data.sub_content_second}</p>
            )}
        </>
    )
}
export default SessionAbout;
