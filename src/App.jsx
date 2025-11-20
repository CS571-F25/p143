import { Routes, Route } from "react-router";
import Container from "react-bootstrap/Container";

import SiteNavbar from "./components/SiteNavbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import AlbumsPage from "./pages/AlbumsPage.jsx";
import AlbumDetailPage from "./pages/AlbumDetailPage.jsx"; // NEW
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#050508",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SiteNavbar />

      <div style={{ flex: 1 }}>
        <main style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/albums" element={<AlbumsPage />} />
              <Route path="/albums/:albumId" element={<AlbumDetailPage />} /> {/* NEW */}
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </Container>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;