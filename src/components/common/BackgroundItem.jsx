//Img, title, description, button
const BackgroundItem = ({ data }) => {
    return (
        <div className="background-img" style={{ backgroundImage: `url(${data.img})` }}>
            <div className="title">
                <p>{data.title}</p>
            </div>
            <div className="description">
                <p>{data.description}</p>
            </div>
            {data.button && (
                <div className="button-link">
                    {data.title_button}
                </div>
            )}
        </div>
    )

}
export default BackgroundItem;