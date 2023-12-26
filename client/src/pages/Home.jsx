

export const Home = () => {
  return (
    <>
      <main >
        <section className="section-hero" >
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Passionate Developer | Creative Thinker | Tech Enthusiast</p>
              <h1>CodeWithKhan Unlocking Digital Possibilities</h1>
              <p>
                Welcome to my digital realm, where creativity meets coding and
                innovation knows no bounds. I am Shahbaz Khan, a dedicated
                developer on a journey to redefine digital experiences.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="button">Connect now</button>
                </a>
                <a href="/service">
                  <button className="button secondary-btn">Learn more</button>
                </a>
              </div>
            </div>
            {/*hero image*/}
            <div className="hero-image">
              <img
                src="https://d1rdz15x9x7c4f.cloudfront.net/assets/payload-images/Harnessing-the-Power-of-Blockchain-for-Your-Business.webp"
                alt=""
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/*second section*/}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>10+</h2>
            <p className="para">Project done</p>
          </div>
          <div className="div1">
            <h2>10+</h2>
            <p className="para">Project done</p>
          </div>
          <div className="div1">
            <h2>10+</h2>
            <p className="para">Happy clients</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p className="para">Service</p>
          </div>
        </div>
      </section>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt=""
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Welcome to my digital realm, where creativity meets coding and
              innovation knows no bounds. I am Shahbaz Khan, a dedicated
              developer on a journey to redefine digital experiences.
            </p>
            <div className="btn btn-group">
              <a href="/">
                <button className="button">Connect now</button>
              </a>
              <a href="/service">
                <button className="button secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
          {/*hero image*/}
        </div>
      </section>
    </>
  ); 
};
