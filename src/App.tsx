import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { DropdownFeature, Home } from "./screens";
import { Layout } from "./layout/layout";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dropdown" element={<DropdownFeature />} />
        </Route>
      </Routes>
    </Router>
  );
};
