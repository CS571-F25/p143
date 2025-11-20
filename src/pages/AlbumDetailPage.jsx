import { useParams, Link } from "react-router";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

// central album data for this page
const albumData = {
  rodeo: {
    title: "Rodeo",
    year: 2015,
    mood: "Dark, cinematic trap",
    description:
      "Rodeo is Travis Scott’s debut studio album, mixing chaotic production, heavy 808s, and experimental structures.",
    tracks: [
      "Pornography",
      "Oh My Dis Side",
      "3500",
      "Wasted",
      "90210",
      "Pray 4 Love",
      "Nightcrawler",
      "Piss On Your Grave",
      "Antidote",
      "Impossible",
    ],
  },
  birds: {
    title: "Birds in the Trap Sing McKnight",
    year: 2016,
    mood: "Atmospheric, melodic",
    description:
      "Birds leans harder into melody and atmosphere, with smooth transitions and some of Travis’s most replayable work.",
    tracks: [
      "the ends",
      "way back",
      "coordinate",
      "through the late night",
      "beibs in the trap",
      "goosebumps",
      "sweet sweet",
      "outside",
      "guidance",
      "wonderful",
    ],
  },
  astroworld: {
    title: "ASTROWORLD",
    year: 2018,
    mood: "Psychedelic carnival",
    description:
      "ASTROWORLD is a full-on theme park experience, inspired by a closed Houston amusement park and packed with wild beat switches.",
    tracks: [
      "STARGAZING",
      "CAROUSEL",
      "SICKO MODE",
      "R.I.P. SCREW",
      "STOP TRYING TO BE GOD",
      "NO BYSTANDERS",
      "SKELETONS",
      "ASTROTHUNDER",
      "YOSEMITE",
      "CAN'T SAY",
    ],
  },
  utopia: {
    title: "UTOPIA",
    year: 2023,
    mood: "Industrial, experimental",
    description:
      "UTOPIA pushes Travis into harsher, more industrial and experimental territory while still keeping big hooks and features.",
    tracks: [
      "HYAENA",
      "THANK GOD",
      "MODERN JAM",
      "MY EYES",
      "GOD'S COUNTRY",
      "FE!N",
      "SIRENS",
      "MELTDOWN",
      "I KNOW ?",
      "TELEKINESIS",
    ],
  },
};

function AlbumDetailPage() {
  const { albumId } = useParams();
  const album = albumData[albumId];

  if (!album) {
    return (
      <div>
        <h1>Album not found</h1>
        <p className="mb-3">
          The album you’re looking for doesn’t exist in this prototype yet.
        </p>
        <Button as={Link} to="/albums" variant="outline-light">
          Back to albums
        </Button>
      </div>
    );
  }

  const handleSongReviewClick = (track) => {
    alert(
      `Placeholder: In the full app, this will let you review the song "${track}" on ${album.title}.`
    );
  };

  return (
    <div>
      <Button
        as={Link}
        to="/albums"
        variant="outline-light"
        size="sm"
        className="mb-3"
      >
        ← Back to albums
      </Button>

      <h1 className="mb-1">{album.title}</h1>
      <p className="text-muted mb-2">
        {album.year} · {album.mood}
      </p>
      <p className="mb-4">{album.description}</p>

      <h2 className="mb-3">Tracklist</h2>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {album.tracks.map((track, idx) => (
            <tr key={track}>
              <td>{idx + 1}</td>
              <td>{track}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleSongReviewClick(track)}
                >
                  Review song
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p className="text-muted">
        Later, these song reviews will feed into the songs leaderboard, while
        album-level reviews from the Albums page will feed into the albums
        leaderboard.
      </p>
    </div>
  );
}

export default AlbumDetailPage;