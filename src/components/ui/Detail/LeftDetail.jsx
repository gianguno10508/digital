import { Markup } from "interweave";

const LeftDetail = ({ data, dataLastestNew, filteredArray, thisListItems }) => {
    // console.log(dataLastestNew);
    return (
        <div className="post-content col-md-8 col-12">
            <div className="entry-header">
                <div className="entry-header-inner">
                    {
                        data.title &&
                        <h1 className="entry-title">{data.title}</h1>
                    }
                    {
                        dataLastestNew.title &&
                        <h1 className="entry-title">{dataLastestNew.title}</h1>
                    }

                    {
                        filteredArray &&
                        filteredArray.map((p, index) => (
                            p.list.map((item, i) => (
                                <h1 className="entry-title">{item.title}</h1>
                            ))
                        ))
                    }
                    {
                        thisListItems.title &&
                        <h1 className="entry-title">{thisListItems.title}</h1>
                    }
                </div>

            </div>
            <div className="post-inner ">
                <div className="entry-content">
                    {
                        data.content && <Markup content={data.content} />
                    }
                    {
                        dataLastestNew.content && <Markup content={dataLastestNew.content} />
                    }
                    {
                        filteredArray &&
                        filteredArray.map((p, index) => (
                            p.list.map((item, i) => (
                                <Markup key={i} content={item.content} />
                            ))
                        ))
                    }
                    {
                        thisListItems.content && <Markup content={thisListItems.content} />
                    }
                </div>
            </div>
        </div>
    )
}
export default LeftDetail;