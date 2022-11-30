//img, listUl

const Benefits = ({ data }) => {
    return (
        <div className="section-content">
            <div className="section-inner-banner">
                {
                    data.img && <img src={data.img} alt=''></img>
                }

            </div>
            <div className="section-inner-content">
                {data.title && <h3>{data.title}</h3>}
                <div className="benefits-item">
                    {data.content &&
                        <ul>
                            {data.content.map((item, index) => (
                                <li key={index}>
                                    {item.title_content}
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}
export default Benefits;