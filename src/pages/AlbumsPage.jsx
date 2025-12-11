import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumGridCard from "../components/AlbumGridCard.jsx";

// import images
import rodeoCover from "../assets/albums/rodeo.jpg";
import birdsCover from "../assets/albums/birds.jpg";
import astroworldCover from "../assets/albums/astroworld.jpg";
import utopiaCover from "../assets/albums/utopia.jpg";

const albums = [
  {
    id: "rodeo",
    title: "Rodeo",
    year: 2015,
    mood: "Dark, cinematic trap",
    shortDescription:
      "Travis’s breakout studio album with heavy, chaotic production and early classics.",
    cover: rodeoCover,
    coverAlt: "Album cover for Rodeo by Travis Scott",
  },
  {
    id: "birds",
    title: "Birds in the Trap Sing McKnight",
    year: 2016,
    mood: "Atmospheric, melodic",
    shortDescription:
      "A smoother, hypnotic follow-up leaning into melodies and replay value.",
    cover: birdsCover,
    coverAlt: "Album cover for Birds in the Trap Sing McKnight by Travis Scott",
  },
  {
    id: "astroworld",
    title: "ASTROWORLD",
    year: 2018,
    mood: "Psychedelic carnival",
    shortDescription:
      "A carnival-themed, culture-shifting album with huge features and beat switches.",
    cover: astroworldCover,
    coverAlt: "Album cover for ASTROWORLD by Travis Scott",
  },
  {
    id: "utopia",
    title: "UTOPIA",
    year: 2023,
    mood: "Industrial, experimental",
    shortDescription:
      "A darker, more industrial and experimental version of Travis’s world-building.",
    cover: utopiaCover,
    coverAlt: "Album cover for UTOPIA by Travis Scott",
  },
];

function AlbumsPage() {
  return (
    <div>
      <h1 className="mb-3">Albums</h1>
      <p className="mb-4">
        Browse Travis Scott’s main albums. Click a cover or “See more” to open
        that album’s page with a full tracklist and song review buttons. Use the
        “Favorite” button to save projects you love.
      </p>

      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {albums.map((album) => (
          <Col key={album.id}>
            <AlbumGridCard album={album} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AlbumsPage;