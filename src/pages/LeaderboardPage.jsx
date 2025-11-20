import LeaderboardTable from "../components/LeaderboardTable.jsx";

const mockAlbumLeaderboard = [
  { id: "astroworld", name: "ASTROWORLD", rating: 4.9, count: 1289 },
  { id: "utopia", name: "UTOPIA", rating: 4.7, count: 954 },
  { id: "rodeo", name: "Rodeo", rating: 4.6, count: 721 },
  { id: "birds", name: "Birds in the Trap Sing McKnight", rating: 4.5, count: 655 },
];

const mockSongLeaderboard = [
  { id: "sickomode", name: "SICKO MODE", rating: 4.9, count: 2000 },
  { id: "fein", name: "FE!N", rating: 4.8, count: 1590 },
  { id: "goosebumps", name: "goosebumps", rating: 4.8, count: 1800 },
  { id: "stargazing", name: "STARGAZING", rating: 4.7, count: 1400 },
  { id: "90210", name: "90210", rating: 4.7, count: 1200 },
];

function LeaderboardPage() {
  return (
    <div>
      <h1 className="mb-3">Leaderboards</h1>
      <p className="mb-4">
        This page currently shows mock data for how the community might rank
        Travis Scott’s albums and songs. In a later version, ratings and
        reviews from logged-in users will drive both leaderboards in real time.
      </p>

      <section className="mb-5">
        <LeaderboardTable items={mockAlbumLeaderboard} type="albums" />
      </section>

      <section>
        <LeaderboardTable items={mockSongLeaderboard} type="songs" />
      </section>
    </div>
  );
}

export default LeaderboardPage;