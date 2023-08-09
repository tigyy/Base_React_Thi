import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
// import About from "./pages/About";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/update";
import Dashboard from "./pages/admin/dasboard";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    {/* <Route path="about" element={<About />} /> */}
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="product" element={<AdminProduct />} />
                    <Route path="product/add" element={<AdminProductAdd />} />
                    <Route path="product/:idProduct/edit" element={<AdminProductEdit />} />
                </Route>
            </Routes>
        </div>
    );
};
export default App;
