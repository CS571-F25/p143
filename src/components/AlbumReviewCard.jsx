import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";

function AlbumReviewCard({ album }) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this milestone, we just log it. Later this would go to a backend.
    console.log("Mock submit review:", { album: album.title, rating, review });
    alert("This is a placeholder. In a later version, this will save your review.");
  };

  return (
    <Card bg="dark" text="light" className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <Card.Title className="mb-0">{album.title}</Card.Title>
            <Card.Subtitle className="text-muted">
              {album.year} · {album.mood}
            </Card.Subtitle>
          </div>
          <Button
            variant={open ? "outline-warning" : "warning"}
            size="sm"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? "Hide songs" : "View songs & review"}
          </Button>
        </div>

        <Collapse in={open}>
          <div>
            <hr />
            <h6>Tracklist (partial)</h6>
            <ol className="mb-3">
              {album.tracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ol>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId={`rating-${album.id}`}>
                <Form.Label>Rate this album</Form.Label>
                <Form.Select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                >
                  <option value="">Select a rating</option>
                  <option value="5">5 – Masterpiece</option>
                  <option value="4">4 – Great</option>
                  <option value="3">3 – Good</option>
                  <option value="2">2 – Mid</option>
                  <option value="1">1 – Skip</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2" controlId={`review-${album.id}`}>
                <Form.Label>Write a quick review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Share your thoughts on this album (mock only for now)..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" variant="warning" size="sm">
                Submit Review (Placeholder)
              </Button>
            </Form>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default AlbumReviewCard;