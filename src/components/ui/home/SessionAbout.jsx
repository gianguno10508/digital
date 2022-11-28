// round, title, description, subtitle
const SessionAbout = ({...rest}) => {
    <div className="sub-heading">
        <span>{rest.sub-heading}</span>
    </div>
    {    rest.title && (
        <h2>{rest.title}</h2>
    )}
    <div className="description">{rest.description}</div>
    {rest.sub-content-second && (
        <p className="sub-content-second">{rest.sub-content-second}</p>
    )}
}
export default SessionAbout