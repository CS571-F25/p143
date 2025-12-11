// src/components/SongRow.jsx
import Button from "react-bootstrap/Button";
import FavoriteButton from "./FavoriteButton.jsx";

function SongRow({ index, song, isFavorite, onToggleFavorite, onReview }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{song.title}</td>
      <td>
        <div className="d-flex gap-2">
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => onReview(song)}
          >
            Review song
          </Button>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(song)}
            label={
              isFavorite
                ? `Remove ${song.title} from favorite songs`
                : `Add ${song.title} to favorite songs`
            }
          />
        </div>
      </td>
    </tr>
  );
}

export default SongRow;