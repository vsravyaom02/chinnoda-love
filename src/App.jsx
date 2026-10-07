import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  Music2,
  Pause,
} from "lucide-react";

const reasons = [
  {
    icon: "🫶🏻",
    title: "You understand me.",
    text: "You somehow understand the things I don't always know how to explain."
  },
  {
    icon: "🤍",
    title: "You respect me.",
    text: "You make me feel heard, valued, and comfortable being exactly who I am."
  },
  {
    icon: "🍳",
    title: "You cook for me.",
    text: "And somehow food tastes even better when I know you made it for me. ❤️"
  },
  {
    icon: "✨",
    title: "You remember everything.",
    text: "The tiny details I mention once and forget about... you remember them."
  },
  {
    icon: "👀",
    title: "You notice everything.",
    text: "You notice little changes, little moods, and the things I don't say out loud."
  },
  {
    icon: "💗",
    title: "You make me feel cared for.",
    text: "Maybe that is what slowly made my heart stop being unsure."
  },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function FloatingHearts() {
  const hearts = Array.from({ length: 22 });

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 8) * 0.8}s`,
            animationDuration: `${7 + (i % 5)}s`,
            fontSize: `${12 + (i % 5) * 5}px`,
          }}
        >
          {["♡", "♥", "❤", "💕", "✦"][i % 5]}
        </span>
      ))}
    </div>
  );
}

function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: `${(i * 43) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animationDelay: `${(i % 7) * 0.4}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

function HeartExplosion() {
  return (
    <div className="heart-explosion" aria-hidden="true">
      {Array.from({ length: 70 }).map((_, i) => (
        <span
          key={i}
          style={{
            "--x": `${Math.cos((i / 70) * Math.PI * 2) * (90 + (i % 5) * 28)}px`,
            "--y": `${Math.sin((i / 70) * Math.PI * 2) * (90 + (i % 5) * 28)}px`,
            "--delay": `${(i % 8) * 0.025}s`,
          }}
        >
          {["❤️", "💗", "💕", "💖", "♡"][i % 5]}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <FloatingHearts />

      <div className="hero-content">
        <p className="eyebrow">A little answer, from my heart</p>

        <h1>
          For my
          <em>Chinnoda</em>
        </h1>

        <p className="hero-text">
          You asked me a question.
          <br />
          I took my time before answering...
          <br />
          because I wanted my answer to be something
          <br />
          I could give you with my whole heart.
        </p>

        <button className="primary-button" onClick={() => scrollToId("why")}>
          I have something to tell you
          <Heart size={17} fill="currentColor" />
        </button>
      </div>

      <button className="scroll-hint" onClick={() => scrollToId("why")}>
        SCROLL WITH ME
        <ArrowDown size={15} />
      </button>
    </section>
  );
}

function WhyIWaited() {
  return (
    <section className="section white-section" id="why">
      <div className="soft-card reveal-card">
        <p className="eyebrow">Why I waited</p>

        <h2>I wasn't saying no.</h2>

        <p className="large-copy">
          I just wanted to understand what my heart was saying before I gave
          you an answer.
        </p>

        <p className="small-copy">
          And somewhere between all the little conversations, all the things
          you remember, and all the ways you care for me... I realized that I
          already knew.
        </p>

        <button
          className="outline-button"
          onClick={() => scrollToId("things")}
        >
          What made me realize?
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

function ThingsILove() {
  return (
    <section className="section things-section" id="things">
      <div className="content-width">
        <div className="section-heading">
          <p className="eyebrow">It's the little things</p>
          <h2>The things I love about you</h2>
        </div>

        <div className="reason-grid">
          {reasons.map((reason, i) => (
            <article
              className="reason-card"
              key={reason.title}
              style={{ "--delay": `${i * 90}ms` }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>

        <div className="center-button">
          <button className="primary-button" onClick={() => scrollToId("answer")}>
            So here's my answer...
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

function AnswerReveal() {
  const [revealed, setRevealed] = useState(false);

  function reveal() {
    setRevealed(true);
  }

  return (
    <section className={`answer-section ${revealed ? "is-revealed" : ""}`} id="answer">
      <Sparkles />

      <div className="answer-content">
        <p className="eyebrow light">Chinnoda, you waited long enough.</p>

        {!revealed && (
          <>
            <h2>Do you know what my answer is?</h2>
            <button className="primary-button reveal-button" onClick={reveal}>
              Open my answer
              <Heart size={17} fill="currentColor" />
            </button>
          </>
        )}

        {revealed && (
          <>
            <HeartExplosion />
            <p className="count-text">I finally have my answer...</p>
            <div className="yes-text">YES</div>
            <div className="love-reveal">
              I love you, Chinnoda.
              <Heart size={25} fill="currentColor" />
            </div>

            <button
              className="primary-button continue-button"
              onClick={() => scrollToId("letter")}
            >
              There is more...
              <ArrowRight size={17} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

function LoveLetter() {
  return (
    <section className="section letter-section" id="letter">
      <div className="letter">
        <p className="eyebrow">To my Chinnoda</p>

        <h2>My answer is yes.</h2>

        <p>
          I took my time because you matter to me enough that I didn't want to
          say something just because the moment was beautiful. I wanted to know
          that I meant it.
        </p>

        <p>And now I do.</p>

        <p>
          I love the way you understand me. I love the respect you give me. I
          love that you remember the smallest things about me, notice things I
          don't even notice, and somehow always find little ways to make me
          feel cared for.
        </p>

        <p>
          And yes... I absolutely love being spoiled with your delicious food
          too. 🥹❤️
        </p>

        <p>
          So if you were still waiting for my answer...
          <br />
          <strong>here it is, finally.</strong>
        </p>

        <div className="signature">Yes, Chinnoda. It's you. ❤️</div>

        <button className="primary-button" onClick={() => scrollToId("forever")}>
          Keep this forever
          <Heart size={17} fill="currentColor" />
        </button>
      </div>
    </section>
  );
}

function Forever() {
  return (
    <section className="forever-section" id="forever">
      <div className="night-stars">
        {Array.from({ length: 75 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 47) % 100}%`,
              top: `${(i * 31) % 100}%`,
              animationDelay: `${(i % 9) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="forever-content">
        <Sparkles />
        <p className="eyebrow light">And this is only the beginning</p>

        <h2>
          Our story
          <em>starts here.</em>
        </h2>

        <p className="forever-copy">
          There are so many memories we haven't made yet, so many little
          moments waiting for us, and so many pages left to write.
        </p>

        <p className="forever-small">But one thing is written already.</p>

        <div className="choose-you">
          I choose you.
          <Heart size={29} fill="currentColor" />
        </div>

        <p className="made-with-love">
          Made with love · For my Chinnoda
        </p>
      </div>
    </section>
  );
}

function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const music = new Audio("/music.mp3");

    music.loop = true;
    music.volume = 0.55;
    music.preload = "auto";

    setAudio(music);

    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  const toggleMusic = async () => {
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Music playback error:", error);
    }
  };

  return (
    <button
      className={`music-button ${playing ? "playing" : ""}`}
      onClick={toggleMusic}
      aria-label={playing ? "Pause music" : "Play music"}
      title={playing ? "Pause music" : "Play music"}
    >
      {playing ? <Pause size={19} /> : <Music2 size={19} />}
    </button>
  );
}

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <main>
        <Hero />
        <WhyIWaited />
        <ThingsILove />
        <AnswerReveal />
        <LoveLetter />
        <Forever />
      </main>
      <MusicButton />
    </>
  );
}