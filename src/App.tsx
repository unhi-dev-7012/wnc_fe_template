import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import CommentPage from "./pages/CommentPage";
import AddCommnentPage from "./pages/AddCommentPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/post/:postId/comments" element={<CommentPage />} />
        <Route
          path="/post/:postId/comments/new"
          element={<AddCommnentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
