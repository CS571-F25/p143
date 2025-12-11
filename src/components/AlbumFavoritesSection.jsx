// src/components/AlbumFavoritesSection.jsx
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumGridCard from "./AlbumGridCard.jsx";

function AlbumFavoritesSection({ albums }) {
  return (
    <section className="mb-5">
      <h2 className="mb-3">Favorite Albums</h2>
      {albums.length === 0 ? (
        <p className="text-muted">
          You haven’t favorited any albums yet. Browse the Albums page and hit
          “Favorite” on a project you love.
        </p>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {albums.map((album) => (
            <Col key={album.id}>
              {/* Just pass the stored object directly */}
              <AlbumGridCard album={album} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}

export default AlbumFavoritesSection;