import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import ProductTable from "../Pages/ProductTable";
import CartTable from "../Pages/CartTable";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ProductTable />} />
      <Route path="/cart" element={<CartTable/>} />
    </Route>
  )
);

export default router;
