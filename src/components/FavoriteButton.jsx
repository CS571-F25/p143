// src/components/FavoriteButton.jsx
import Button from "react-bootstrap/Button";

function FavoriteButton({ isFavorite, onToggle, label }) {
  return (
    <Button
      variant={isFavorite ? "warning" : "outline-warning"}
      size="sm"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={label}
    >
      {isFavorite ? "★ Favorited" : "☆ Favorite"}
    </Button>
  );
}

export default FavoriteButton;