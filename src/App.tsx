import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";
import CoursesPage from "./pages/CoursesPage";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import JoinUsPage from "./pages/JoinUsPage";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/join" element={<JoinUsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
