import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowPlayer from "./pages/ShowPlayer";
import CreatePlayer from "./pages/CreatePlayer";
import DeletePlayer from "./pages/DeletePlayer";
import EditPlayer from "./pages/EditPlayer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players/create" element={<CreatePlayer />} />
      <Route path="/players/details/:id" element={<ShowPlayer />} />
      <Route path="/players/edit/:id" element={<EditPlayer />} />
      <Route path="/players/delete/:id" element={<DeletePlayer />} />
    </Routes>
  );
};

export default App;
