import MainItemCol from "../../../components/common/MainItemCol";
import sessionBottomWebdevelop from "../../../asset/fakedata/webdevelopment/sessionBottomWebdevelop";

const SessionBottom = () =>{
    return (
        <div className="section-bottom">
            <div className="container">
                <div className="content">
                    <div className="content-left col-sm-12 col-md-8">
                        <MainItemCol data={sessionBottomWebdevelop} />
                    </div>
                    <div className="image-right col-sm-12 col-md-4">
                        <div className="image">
                            <picture>
                                <source media="(max-width:767px)" srcset="https://onextdigital.com/wp-content/uploads/2022/08/Base.png" />
                                <img src="https://onextdigital.com/wp-content/uploads/2022/07/contact-bottom.png" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SessionBottom;