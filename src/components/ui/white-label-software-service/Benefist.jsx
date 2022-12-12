//img, listUl

const Benefits = ({ data }) => {
    // console.log(data);
    return (
        <div className="row">
            <div className="col-md-12 col-lg-6 section-inner-banner">
                {
                    data.img && <img src={data.img} alt=''></img>
                }

            </div>
            <div className="col-md-12 col-lg-6 section-inner-content">
                {data.title && <h3>{data.title}</h3>}
                <div className="benefits-item">
                    {data.content &&
                        <ul>
                            {data.content.map((item, index) => (
                                <li key={index}>
                                    {item.title}
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