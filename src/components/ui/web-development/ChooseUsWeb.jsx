import chooseUs from "../../../asset/fakedata/webdevelopment/chooseUs";
import MainItemCol from "../../../components/common/MainItemCol";

const ChooseUsWeb = () =>{
    return (
        <div className="why-choose-us">
            <div className="container">
                <div className="sub-title">
                    Why us
                </div>
                <div className="title">
                    Why choose us
                </div>
                <div className="why-choose-us-list row">
                    {chooseUs.map((item,index)=>(
                        <div key={index} className="item col-sm-12 col-md-6 col-lg-4">
                            <MainItemCol data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ChooseUsWeb;