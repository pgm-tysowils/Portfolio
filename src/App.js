import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./routes/routes";
import { Home, Portfolio, Detail } from "./pages";
import "./App.css";
import Root from "./layouts/Root";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route path={routes.home.path} element={<Home />} />
          <Route
            path={routes.portfolio.path}
            element={
              <Portfolio
              // portfolio={{ dataPortfolio }}
              />
            }
          />
          {/* <Route
            path="/:type/:title"
            element={
              <Detail
                portfolio={{ dataPortfolio, setSorting }}
                blog={{ dataBlog }}
              />
            }
          /> */}
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
