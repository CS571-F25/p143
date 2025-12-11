import AlbumTimeline from "../components/AlbumTimeline.jsx";
import IntroSection from "../components/IntroSection.jsx";

const albums = [
  {
    id: "rodeo",
    title: "Rodeo",
    year: 2015,
    mood: "Dark, cinematic trap",
    description:
      "Travis’s breakout studio album, blending heavy 808s with a cinematic, chaotic sound. Features tracks like '3500' and 'Antidote.'",
  },
  {
    id: "birds",
    title: "Birds in the Trap Sing McKnight",
    year: 2016,
    mood: "Atmospheric, melodic",
    description:
      "A more melodic, hypnotic follow-up that leans into atmosphere and catchy hooks. Includes 'goosebumps' and 'Pick Up the Phone.'",
  },
  {
    id: "astroworld",
    title: "ASTROWORLD",
    year: 2018,
    mood: "Psychedelic carnival",
    description:
      "A cultural landmark inspired by a closed-down Houston theme park. Known for its seamless beat switches and tracks like 'SICKO MODE.'",
  },
  {
    id: "utopia",
    title: "UTOPIA",
    year: 2023,
    mood: "Industrial, experimental",
    description:
      "A darker, more experimental project that pushes his sound into industrial, psychedelic territory with dense production and big features.",
  },
];

function HomePage() {
  return (
    <div>
      <IntroSection />

      {/* Biography section */}
      <section className="mb-5">
        <h2 className="mb-3">Who is Travis Scott?</h2>
        <p>
          Travis Scott (Jacques Bermon Webster II) is a rapper, producer, and
          creative from Houston, Texas. Known for his high-energy performances,
          heavy production style, and immersive album concepts, he’s become one
          of the most influential artists in modern hip-hop. His work blends
          trap, psychedelia, and industrial sounds, often tied together by
          strong visual themes and world-building.
        </p>
        <p>
          From early mixtapes to stadium tours, Travis has built a loyal global
          fanbase. The albums below show how his sound has developed over time,
          from gritty, nocturnal trap to full-blown cinematic experiences.
        </p>
      </section>

      {/* Vertical timeline of albums */}
      <AlbumTimeline albums={albums} />
    </div>
  );
}

export default HomePage;