// src/components/SongFavoritesSection.jsx
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function SongFavoritesSection({ songs }) {
  return (
    <section>
      <h2 className="mb-3">Favorite Songs</h2>
      {songs.length === 0 ? (
        <p className="text-muted">
          You haven’t favorited any songs yet. Open an album detail page and use
          the “☆ Favorite” button next to a track.
        </p>
      ) : (
        <Table striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Song</th>
              <th>Album</th>
              <th>Go to album</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, idx) => (
              <tr key={song.id}>
                <td>{idx + 1}</td>
                <td>{song.title}</td>
                <td>{song.albumTitle}</td>
                <td>
                  <Button
                    as={Link}
                    to={`/albums/${song.albumId}`}
                    variant="outline-light"
                    size="sm"
                  >
                    View album
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
}

export default SongFavoritesSection;