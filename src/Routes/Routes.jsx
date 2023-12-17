import { Route,Routes } from "react-router";
import Wrapper from "../Components/Wrapper";
import NewsPage from "../Components/NewsPage";


function AppRoutes (){
    return(
        <Routes>
            <Route path="/" element = {<Wrapper/>}/>
            <Route path="/news/:news_id" element = {<NewsPage/>}/>
        </Routes>
    )
}

export default AppRoutes