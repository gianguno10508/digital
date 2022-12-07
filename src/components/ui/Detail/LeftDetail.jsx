import { Markup } from "interweave";

const LeftDetail = ({ data }) => {
    return (
        <div className="post-content col-md-8 col-12">
            <div className="entry-header">
                <div className="entry-header-inner">
                    {
                        data.title && <h1 className="entry-title">{data.title}</h1>
                    }

                </div>

            </div>
            <div className="post-inner ">
                <div className="entry-content">
                    <Markup content={data.content} />
                </div>
            </div>
        </div>
    )
}
export default LeftDetail;