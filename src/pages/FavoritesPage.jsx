// src/pages/FavoritesPage.jsx
import { useFavorites } from "../context/FavoritesContext.jsx";
import AlbumFavoritesSection from "../components/AlbumFavoritesSection.jsx";
import SongFavoritesSection from "../components/SongFavoritesSection.jsx";

function FavoritesPage() {
  const { favoriteAlbums, favoriteSongs } = useFavorites();

  return (
    <div>
      <h1 className="mb-3">Your Favorites</h1>
      <p className="mb-4">
        This page shows the albums and songs you’ve favorited across Travis
        Hub. Favorites are stored in your browser only (no login required) and
        can be updated from the Albums and album detail pages.
      </p>

      <AlbumFavoritesSection albums={favoriteAlbums} />
      <SongFavoritesSection songs={favoriteSongs} />
    </div>
  );
}

export default FavoritesPage;