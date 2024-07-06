// src/index.tsx atau src/App.tsx
import { render } from "solid-js/web";
import { Router, Routes, Route } from "@solidjs/router";
import HomePage from "./homepage";
import Login from "./login";
import Register from "./register";
import HomeMain from "./homemain";
import Total from "./total"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" element={<HomeMain />} />
      <Route path="/total" element={<Total/>} />
    </Routes>
  </Router>
);

render(() => <App />, document.getElementById("root") as HTMLElement);
