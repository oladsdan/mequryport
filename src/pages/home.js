import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/hero';
import About from '../section/about';
import Blockquote from '../section/blockquote';
import Whatido from '../section/whatido';
import Gallery from '../section/gallery';
import Counter from '../section/counter';
import Blog from '../section/blog';
import Contact from '../section/contact';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import Particle from "../layout/Particle";

const image1 ="./img/background/1.jpg";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

function home() {
  return (
    <>
    <GlobalStyles/>
    <Preloader/>
    <div className="home">

      {/* Navbar */}
      <Navbar />
      

      {/* HERO */}
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={image1} strength={300}>
        <Particle/>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>

      {/* ABOUT */}
      <section id="about" className="pb-0">
        <About/>
        <Blockquote/>
      </section>

      {/* What I DO */}
      <section id="whatido">
        <Whatido/>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery/>
      </section>

      {/* Gallery */}
      <section id="resume" className="pb-0">
        {/* <Resume/> */}
        <Counter/>
      </section>

      {/* Gallery */}
      {/* <section id="blog" className="pb-0">
        <Blog/>
      </section> */}

      {/* contact */}
      <section id="contact" className="pb-0">
        <Contact/>
        <Footer/>
      </section>

      


      <div className="float-text">
          <div className="de_social-icons">
              <a href="https://www.facebook.com/mequrythink?mibextid=LQQJ4d" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/mequrythink?igsh=MWQ4dDdoamV1cGtuNQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/mequrythink?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
              
          </div>
          <span>Follow Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  );
}

export default home;
