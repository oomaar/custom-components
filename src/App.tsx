import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./screens";
import { Layout } from "./layout/layout";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

// <div>
//   <section>
//     <h1 className="section-title">Dropdown</h1>
//     <Dropdown />
//   </section>
// </div>
