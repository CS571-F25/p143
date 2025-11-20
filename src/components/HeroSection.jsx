import { Button } from "react-bootstrap";
import { Link } from "react-router";

function HeroSection() {
  return (
    <section
      className="p-4 p-md-5 mb-4 rounded-3"
      style={{
        background:
          "radial-gradient(circle at top, #ff6b00 0, #000000 55%, #000000 100%)",
      }}
    >
      <div className="py-3">
        <h1 className="display-5 fw-bold text-light">Welcome to Travis Hub</h1>
        <p className="col-md-8 fs-6 text-light-50">
          Dive into Travis Scott’s albums, tracklists, and fan opinions. This is
          a fan-built space to rate songs, review albums, and see what the
          community is vibing with.
        </p>
        <Button as={Link} to="/albums" variant="outline-light">
          Explore Albums
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;