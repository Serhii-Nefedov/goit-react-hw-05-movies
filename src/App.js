import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar";

const HomeView = lazy(() =>
  import("./components/views/HomeView" /* webpackChunkName: "HomeView" */)
);

const MoviesView = lazy(() =>
  import("./components/views/MoviesView" /* webpackChunkName: "MoviesView" */)
);

const MoviesDetailsView = lazy(() =>
  import(
    "./components/views/MoviesDetailsView" /* webpackChunkName: "MoviesDetailsView" */
  )
);

const NotFoundView = lazy(() =>
  import(
    "./components/views/NotFoundView" /* webpackChunkName: "NotFoundView" */
  )
);

const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies/:movieId">
            <MoviesDetailsView />
          </Route>

          <Route path="/movies">
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
