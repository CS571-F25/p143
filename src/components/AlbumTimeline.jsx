// src/components/AlbumTimeline.jsx
import AlbumCard from "./AlbumCard.jsx";

function AlbumTimeline({ albums }) {
  return (
    <section className="mb-4">
      <h2 className="mb-3">Album Timeline</h2>
      <p className="mb-4">
        Scroll down to follow Travis Scott’s major albums in chronological
        order, from his breakout studio debut to his most recent project.
      </p>

      <div
        style={{
          position: "relative",
          marginLeft: "1.5rem",
          paddingLeft: "1.5rem",
          borderLeft: "2px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {albums.map((album, index) => (
          <div
            key={album.id}
            style={{
              position: "relative",
              marginBottom: "2rem",
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-1.05rem",
                top: "0.75rem",
                width: "0.8rem",
                height: "0.8rem",
                borderRadius: "50%",
                backgroundColor: index === albums.length - 1 ? "#f3a93b" : "#888",
                boxShadow:
                  index === albums.length - 1
                    ? "0 0 12px rgba(243, 169, 59, 0.8)"
                    : "none",
              }}
            ></div>

            {/* Album content */}
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AlbumTimeline;