import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import ProductTable from "../Pages/ProductTable";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ProductTable />} />
    </Route>
  )
);

export default router;
