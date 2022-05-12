import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import FrontLayout from "../layouts/FrontLayout"

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/admin/*" element={<AdminLayout />} />
                {/* Front-end Routes */}
                <Route path="*" element={<FrontLayout />} />
                {/* Admin Routes */}

            </Routes>
        </>

    )
}

export default Router