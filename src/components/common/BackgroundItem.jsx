//Img, title, description, button
const BackgroundItem = ({...rest}) => {
    <div className="background-img" style={{backgroundImage: `url(${rest.img})`}}>
        <div className="title">
            <p>{rest.title}</p>
        </div>
        <div className="description">
            <p>{rest.description}</p>
        </div>
        {rest.button && (
            <div className="button-link">
                {rest.title-button}
            </div>
        )}
    </div>
}
export default BackgroundItem