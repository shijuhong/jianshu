import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import Header from "./common/Header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Write = lazy(() => import("./pages/Write"));
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/write" exact element={<Write />} />
            <Route path="/detail/:id" exact element={<Detail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
