import {Route, Routes} from "react-router";

import CalenderPage from "../pages/CalenderPage";
import AboutPage from "../pages/AboutPage";
import FestivalsPage from "../pages/FestivalsPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<CalenderPage/>}/>
            <Route path="festivals" element={<FestivalsPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
        </Routes>
    );
};