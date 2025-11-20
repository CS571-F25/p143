import Table from "react-bootstrap/Table";

function LeaderboardTable({ items, type }) {
  return (
    <section>
      <h2 className="mb-3">
        Top Rated {type === "albums" ? "Albums" : "Songs"} (Mock Data)
      </h2>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>{type === "albums" ? "Album" : "Song"}</th>
            <th>Average Rating</th>
            <th>Ratings Count</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, idx) => (
            <tr key={row.id}>
              <td>{idx + 1}</td>
              <td>{row.name}</td>
              <td>{row.rating.toFixed(1)}</td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="text-muted">
        Later, clicking a row will take you to its rating & review page.
      </p>
    </section>
  );
}

export default LeaderboardTable;