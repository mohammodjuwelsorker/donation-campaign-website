import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Roots = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <Header/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Roots;