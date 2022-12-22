import ReactLoading from "react-loading";
const Loading = ({arrayCheck, children}) => {
    return(
        Array.isArray(arrayCheck) && arrayCheck.length == 0 ?
        <ReactLoading className="loading" type={"spin"} color="black" />
        :
        children
    )
}
export default Loading;