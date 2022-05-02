import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import Header from "./common/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/detail" exact element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
