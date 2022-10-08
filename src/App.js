import './App.css';
import {Route, Routes} from "react-router-dom";
import HeaderForm from "./components/Header/HeaderForm";

function App() {
    return (
        <div>
            <HeaderForm/>
            {/*<Routes>*/}
            {/*    <Route path={'/todos'} element={<Todos/>}/>*/}
            {/*    <Route path={'/albums'} element={<Albums/>}/>*/}
            {/*    <Route path={'/posts'} element={<Posts/>}>*/}
            {/*        <Route path={'comments/:id'} element={<Comments/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
