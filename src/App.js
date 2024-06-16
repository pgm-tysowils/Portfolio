import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./routes/routes";
import { Home, Portfolio } from "./pages";
import "./App.css";
import Root from "./layouts/Root";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIOS } from "./graphql/queries";

function App() {
  let {loading, error, data} = useQuery(GET_PORTFOLIOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;
  data = data.projects;
  const homeData = data.slice(0, 3);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route path={routes.home.path} element={<Home portfolios={homeData} />} />
          <Route
            path={routes.portfolio.path}
            element={
              <Portfolio
              portfolios={ data }
              />
            }
          />
        </Route>
      </>
    )
  );
  return (
      <RouterProvider router={router} />
  );
}

export default App;
