import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import ProductTable from "./Pages/ProductTable";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ProductTable />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      return <RouterProvider router={router} />;
    </>
  );
};

export default App;
