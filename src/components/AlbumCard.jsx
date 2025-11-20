// src/components/AlbumCard.jsx
import Card from "react-bootstrap/Card";

function AlbumCard({ album }) {
  return (
    <Card bg="dark" text="light" className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{album.title}</span>
          <span className="text-muted">{album.year}</span>
        </Card.Title>
        {album.mood && (
          <Card.Subtitle className="mb-2 text-warning">
            {album.mood}
          </Card.Subtitle>
        )}
        <Card.Text>{album.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;