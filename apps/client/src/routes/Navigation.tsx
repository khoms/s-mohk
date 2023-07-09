import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/main/DashboardPage";
import HomePage from "../pages/main/dashboard/HomePage";
import Product from "../pages/main/product/Product";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="" element={<DashboardPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="inventory" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
