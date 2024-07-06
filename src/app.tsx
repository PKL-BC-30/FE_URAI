// App.tsx
import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import homepage from "./homepage";
import Register from './register';
import HomeMain from './homemain';
import Total from './total';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={App} />
      <Route path="/homepage" component={homepage} />
      <Route path="/register" component={Register} />
      <Route path="/homemain" component={HomeMain} />
      <Route path="/total" component={Total} />
    </Routes>
  );
};

export default App;
