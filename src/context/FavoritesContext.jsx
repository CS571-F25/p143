// src/context/FavoritesContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

const STORAGE_KEY = "travisHubFavorites_v1";

function loadInitialFavorites() {
  if (typeof window === "undefined") return { albums: [], songs: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { albums: [], songs: [] };
    const parsed = JSON.parse(raw);
    return {
      albums: parsed.albums || [],
      songs: parsed.songs || [],
    };
  } catch {
    return { albums: [], songs: [] };
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteAlbums, setFavoriteAlbums] = useState(
    () => loadInitialFavorites().albums
  );
  const [favoriteSongs, setFavoriteSongs] = useState(
    () => loadInitialFavorites().songs
  );

  // persist to localStorage
  useEffect(() => {
    const data = {
      albums: favoriteAlbums,
      songs: favoriteSongs,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [favoriteAlbums, favoriteSongs]);

  const isAlbumFavorite = (albumId) =>
    favoriteAlbums.some((a) => a.id === albumId);

  const isSongFavorite = (songId) =>
    favoriteSongs.some((s) => s.id === songId);

  const toggleAlbumFavorite = (album) => {
    setFavoriteAlbums((current) => {
      const exists = current.some((a) => a.id === album.id);
      if (exists) {
        return current.filter((a) => a.id !== album.id);
      }
      return [...current, album];
    });
  };

  const toggleSongFavorite = (song) => {
    setFavoriteSongs((current) => {
      const exists = current.some((s) => s.id === song.id);
      if (exists) {
        return current.filter((s) => s.id !== song.id);
      }
      return [...current, song];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteAlbums,
        favoriteSongs,
        isAlbumFavorite,
        isSongFavorite,
        toggleAlbumFavorite,
        toggleSongFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}