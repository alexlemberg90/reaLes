import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
            </Routes>

        </div>
    );
}

export default App;
