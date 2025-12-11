// src/pages/AlbumDetailPage.jsx
import { useParams, Link } from "react-router";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useFavorites } from "../context/FavoritesContext.jsx";
import SongRow from "../components/SongRow.jsx";

const albumData = {
  rodeo: {
    id: "rodeo",
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
      "Maria I'm Drunk",
      "Flying High",
      "I Can Tell",
      "Apple Pie",
    ],
  },
  birds: {
    id: "birds",
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
      "sdp interlude",
      "sweet sweet",
      "outside",
      "goosebumps",
      "first take",
      "pick up the phone",
      "lose",
      "guidance",
      "wonderful",
    ],
  },
  astroworld: {
    id: "astroworld",
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
      "WAKE UP",
      "5% TINT",
      "NC-17",
      "ASTROTHUNDER",
      "YOSEMITE",
      "CAN'T SAY",
      "WHO? WHAT!",
      "BUTTERFLY EFFECT",
      "HOUSTONFORNICATION",
      "COFFEE BEAN",
    ],
  },
  utopia: {
    id: "utopia",
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
      "SIRENS",
      "MELTDOWN",
      "FE!N",
      "DELRESTO",
      "I KNOW ?",
      "TOPIA TWINS",
      "CIRCUS MAXIMUS",
      "PARASAIL",
      "SKITZO",
      "LOST FOREVER",
      "LOOOVE",
      "K-POP",
      "TELEKINESIS",
      "TIL FURTHER NOTICE",
    ],
  },
};

function AlbumDetailPage() {
  const { albumId } = useParams();
  const album = albumData[albumId];
  const {
    isSongFavorite,
    toggleSongFavorite,
  } = useFavorites();

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

  const songs = album.tracks.map((title, idx) => ({
    id: `${album.id}-${idx}`,
    title,
    albumId: album.id,
    albumTitle: album.title,
  }));

  const handleSongReviewClick = (song) => {
    alert(
      `Placeholder: In the full app, this will open a review form for "${song.title}" on ${album.title}.`
    );
  };

  const handleToggleSongFavorite = (song) => {
    toggleSongFavorite(song);
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <SongRow
              key={song.id}
              index={index}
              song={song}
              isFavorite={isSongFavorite(song.id)}
              onToggleFavorite={handleToggleSongFavorite}
              onReview={handleSongReviewClick}
            />
          ))}
        </tbody>
      </Table>

      <p className="text-muted">
        Song favorites here will show up on your Favorites page and connect to
        the songs leaderboard conceptually.
      </p>
    </div>
  );
}

export default AlbumDetailPage;