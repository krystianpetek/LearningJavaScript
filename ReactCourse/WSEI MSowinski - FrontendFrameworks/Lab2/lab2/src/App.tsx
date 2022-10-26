import { FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./components/routes/home/home";
import { Posts } from "./components/routes/posts/posts";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <>{console.log("test")}</>
        <Link to="/">Home</Link>
        <Link to="posts">Posts</Link>
      </div>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}