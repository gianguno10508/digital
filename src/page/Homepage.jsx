import data from "../asset/fakedata/test";
import SessionAbout from "../components/ui/home/SessionAbout";

function Homepage(){
    return(
        <SessionAbout data = {data}/>
    )
}
export default Homepage;