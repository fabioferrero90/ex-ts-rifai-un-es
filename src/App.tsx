import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import Home from "./Pages/Home";
import ChefBirthday from "./Pages/ChefBirthday";
import Politicians from "./Pages/Politicians";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chef-birthday" element={<ChefBirthday />} />
            <Route path="/politicians" element={<Politicians />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App