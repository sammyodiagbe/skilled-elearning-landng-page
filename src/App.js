import IconAnimation from "./components/icon-animation";
import IconBusiness from "./components/icon-business";
import IconDesign from "./components/icon-design";
import IconCrypto from "./components/icon-crypto";
import IconPhotographpy from "./components/icon-photography";
import Image from "./assets/image-hero-mobile.png";
import tabletImage from "./assets/image-hero-tablet.webp";
import desktopImage from "./assets/image-hero-desktop.webp";
function App() {
  return (
    <>
      <div className="container">
        <nav className="navigation">
          <b className="logo">Skilled</b>

          <a href="#get-started" className="get-started">
            Get Started
          </a>
        </nav>
        <header className="jumbotron">
          <aside className="write-up">
            <h1>Maximize Skill, minimize budget</h1>
            <p>
              Our modern courses across a range of in-demand skill willgive you
              the knowledge you need to live the life you want.
            </p>
            <a href="#get-started" className="get-started m">
              Get Started
            </a>
          </aside>
          <aside className="img-container">
            {/* <img src={Image} alt="What we offer" className="offer-image" /> */}
            <img
              src={tabletImage}
              alt="What we offer tablet"
              className="tablet-image "
            />
            <img src={Image} alt="What we offer tablet" className="mobile" />
            <img
              src={desktopImage}
              alt="What we offer tablet"
              className="desktop-image"
            />
          </aside>
        </header>
        <main className="main">
          <section className="item item-1">
            <h2>Check out our most popular courses!</h2>
          </section>
          <section className="item">
            <IconAnimation />

            <h3>Animation</h3>
            <p>
              Learn the latest animation techniques to create stunning motion
              desing and captivate your audience.
            </p>
            <a href="#get-started" className="get-started transparent">
              Get Started
            </a>
          </section>
          <section className="item">
            <IconDesign />
            <h3>Design</h3>
            <p>
              Create beautiful, usable interfacesto help shape the future of how
              the web looks
            </p>
            <a href="#get-started" className="get-started transparent">
              Get Started
            </a>
          </section>
          <section className="item">
            <IconPhotographpy />

            <h3>Photography</h3>
            <p>
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
            <a href="#get-started" className="get-started transparent">
              Get Started
            </a>
          </section>
          <section className="item">
            <IconCrypto />

            <h3>Crypto</h3>
            <p>
              All you need to get starte investing in crypto. Go from beginner
              to advanced with this 54 hour course.
            </p>
            <a href="#get-started" className="get-started transparent">
              Get Started
            </a>
          </section>
          <section className="item">
            <IconBusiness />

            <h3>Business</h3>
            <p>
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment
            </p>
            <a href="#get-started" className="get-started transparent">
              Get Started
            </a>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="container">
          <b className="logo">Skilled</b>

          <a href="#get-started" className="get-started footer-link">
            Get Started
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
