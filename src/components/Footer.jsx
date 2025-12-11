import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <small>© {new Date().getFullYear()} Travis Fan Hub</small>
        <div>
          <a
            href="https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
            target="_blank"
            rel="noreferrer"
            className="text-light me-3"
          >
            Spotify
          </a>
          <a
            href="https://music.apple.com/us/artist/travis-scott/549236696"
            target="_blank"
            rel="noreferrer"
            className="text-light me-3"
          >
            Apple Music
          </a>
          <a
            href="https://shop.travisscott.com/"
            target="_blank"
            rel="noreferrer"
            className="text-light me-3"
          >
            Store
          </a>
          <a
            href="https://www.ticketmaster.com/artist/1788754?tm_link=tm_header_search"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            Tickets
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;