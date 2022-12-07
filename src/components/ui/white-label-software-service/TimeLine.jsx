const TimeLine = ({data}) =>{
    return(
        <div className="questions-section">
            <div className="container">
                {data.map((item,index)=>(
                    <div className="question run-line show-content">
                        <div className="item">
                            <span>{item.question}</span>
                        </div>
                    </div>                    
                ))}
            </div>
        </div>
    )
}
export default TimeLine;