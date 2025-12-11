import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import { useFavorites } from "../context/FavoritesContext.jsx";
import FavoriteButton from "./FavoriteButton.jsx";

function AlbumGridCard({ album }) {
  const { isAlbumFavorite, toggleAlbumFavorite } = useFavorites();
  const favorite = isAlbumFavorite(album.id);

  return (
    <Card bg="dark" text="light" className="mb-4 h-100 shadow-sm">
      {/* Album cover image */}
      {album.cover ? (
        <Link to={`/albums/${album.id}`}>
          <Card.Img
            variant="top"
            src={album.cover}
            alt={album.coverAlt || `Album cover for ${album.title}`}
            className="album-cover"
          />
        </Link>
      ) : (
        // fallback if we ever don't pass a cover (e.g., in favorites)
        <div
          style={{
            height: "180px",
            background: "linear-gradient(135deg, #ff6b00, #8b00ff)",
          }}
          aria-hidden="true"
        />
      )}

      <Card.Body>
        {/* Title + year now in the card, like Amazon */}
        <Card.Title className="mb-1">{album.title}</Card.Title>
        <Card.Subtitle className="mb-2">
          {album.year} · <span className="text-warning">{album.mood}</span>
        </Card.Subtitle>

        {album.shortDescription && (
          <Card.Text className="mb-3">{album.shortDescription}</Card.Text>
        )}

        <div className="d-flex justify-content-between align-items-center">
          <Button
            as={Link}
            to={`/albums/${album.id}`}
            variant="outline-light"
            size="sm"
          >
            See more
          </Button>

          <Button
            className="btn-travis"
            size="sm"
            onClick={() =>
            alert(
              `Placeholder: In a full version, this would open a form to review the album "${album.title}".`
            )
            }
          >
          Review Album
          </Button>

          <FavoriteButton
            isFavorite={favorite}
            onToggle={() =>
              toggleAlbumFavorite({
                id: album.id,
                title: album.title,
                year: album.year,
                mood: album.mood,
                // store cover info too if you want it on Favorites page later
                cover: album.cover,
                coverAlt: album.coverAlt,
              })
            }
            label={
              favorite
                ? `Remove ${album.title} from favorite albums`
                : `Add ${album.title} to favorite albums`
            }
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AlbumGridCard;