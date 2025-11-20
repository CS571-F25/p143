// src/components/AlbumGridCard.jsx
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function AlbumGridCard({ album }) {
  return (
    <Card bg="dark" text="light" className="mb-4 h-100 shadow-sm">
      {/* Fake cover image area (you can swap for real images later) */}
      <div
        style={{
          height: "180px",
          background:
            "linear-gradient(135deg, #ff6b00, #8b00ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        as={Link}
      >
        {/* Using a Link-wrapped heading instead of Card.Img so we keep full control */}
        <Link
          to={`/albums/${album.id}`}
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.1rem",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          {album.title}
          <br />
          <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
            {album.year}
          </span>
        </Link>
      </div>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-warning">
          {album.mood}
        </Card.Subtitle>
        <Card.Text className="mb-3">
          {album.shortDescription}
        </Card.Text>

        <div className="d-flex justify-content-between">
          <Button
            as={Link}
            to={`/albums/${album.id}`}
            variant="outline-light"
            size="sm"
          >
            See more
          </Button>
          <Button
            variant="warning"
            size="sm"
            onClick={() =>
              alert(
                `Placeholder: In the full app, this will let you review the album "${album.title}".`
              )
            }
          >
            Review album
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AlbumGridCard;