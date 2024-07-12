// src/index.tsx atau src/App.tsx
import { render } from "solid-js/web";
import { Router, Routes, Route } from "@solidjs/router";
import HomePage from "./homepage";
import Login from "./login";
import Register from "./register";
import HomeMain from "./homemain";
import Total from "./total"
import Organik from './hitung/organik';
import Electric from './hitung/electric';
import Anorganik from './hitung/anorganik';
import AgGridSolid from "./admin/ag-grid";
import homeA from "./homeA";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" element={<HomeMain />} />
      <Route path="/total" element={<Total/>} />
      <Route path="/organik" component={Organik} />
      <Route path="/electric" component={Electric} />
      <Route path="/anorganik" component={Anorganik} />
      <Route path="/ag-grid" component={AgGridSolid} />
      <Route path="/homeA" component={homeA} />
    </Routes>
  </Router>
);

render(() => <App />, document.getElementById("root") as HTMLElement);
