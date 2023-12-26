import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Welcome, {user?`${user.username} to our website`:`to our website`}</p>
            <h1>Why Choose Us?</h1>
            <p>
              I am a seasoned developer with a love for crafting elegant
              solutions. My journey in the digital landscape has equipped me
              with the skills to turn ideas into reality, one line of code at a
              time. Whether it's web development, app creation, or diving into
              the latest technologies, I thrive on challenges that push the
              boundaries of what's possible.
            </p>
            <h1>What I Do</h1>
            <p>
              Web Development: Crafting immersive and responsive websites that
              leave a lasting impression.<br></br> App Development: Transforming
              ideas into user-friendly mobile applications. <br></br> Tech
              Enthusiast: Constantly exploring and embracing the latest
              technologies to stay ahead in the digital game.
            </p>
            <div className="btn btn-group">
              <Link to="/">
                <button className="button">Connect now</button>
              </Link>
              <Link to="/service">
                <button className="button secondary-btn">Learn more</button>
              </Link>
            </div>
          </div>
          {/* hero image */}
          <div className="hero-image">
            <img src="/images/about.png" alt="" width="400" height="500" />
          </div>
        </div>
      </section>
    </main>
  );
};
