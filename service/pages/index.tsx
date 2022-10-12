import type { NextPage } from "next";
import { PhoneForwarded } from "react-feather";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import LightGallery from "lightgallery/react";
import { Link } from "react-scroll";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Home: NextPage = () => {
  const sliderConfig = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showMenu, setShowMenu] = useState(false);

  const getGalleryItems = () => {
    return (
      <>
        {[...Array(12)].map((_, index) => (
          <a key={index + 1} className={`item-${index + 1}`} href={`/gallery/${index + 1}.jpg`}>
            <img className="gallery-image" src={`/gallery/${index + 1}.jpg`} alt="" />
          </a>
        ))}
      </>
    );
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`burger-button${showMenu ? ' show-menu' : ''}`}
            type="button"
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>
          <div className="logo">
            <img src="/logo.png" alt="Lunys Pastelería" />
          </div>
          <nav className={`${showMenu ? 'show-menu' : ''}`}>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Casa
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="our-work"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Nuestro trabajo
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="place-order"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Realiza tu pedido
                </Link>
              </li>
            </ul>
          </nav>
          <div className="contact-information">
            <span className="circle-phone">
              <PhoneForwarded size={22} color="#FFF" />
            </span>
            <a className="phone-number" href="tel:+12294763256">229 476 3256</a>
          </div>
        </div>
      </header>
      <div id="home" className="section custom-slider">
        <Slider {...sliderConfig}>
          <div className="custom-single-slide">
            <div className="aux-container">
              <div className="container">
                <h2>
                  Dulce y<br />
                  esponjoso día
                </h2>
              </div>
            </div>
          </div>
          <div className="custom-single-slide">
            <div className="aux-container">
              <div className="container">
                <h2>
                  Dulce y<br />
                  esponjoso día
                </h2>
              </div>
            </div>
          </div>
          <div className="custom-single-slide">
            <div className="aux-container">
              <div className="container">
                <h2>
                  Dulce y<br />
                  esponjoso día
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div id="about" className="section history">
        <div
          className="pre-history"
          style={{ backgroundImage: `url(/images/pre-history.jpg)` }}
        >
          <div className="detail-logo">
            <img src="/logo-black.svg" alt="Lunys Pastelería" />
          </div>
          <div className="container">
            <div className="article top">
              <div className="article-image">
                <img src="/images/article-top.jpg" alt="" />
              </div>
              <div className="article-container">
                <div className="article-description">
                  <h3>Te platico mi cuento</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat Leo, dictum nec lacus sed, lacinia porta velit.
                    Aenean in ex eget orci vestibulum molestie id eget velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aux-container">
          <div className="detail-history">
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="container">
            <div className="article top">
              <div className="article-container">
                <div className="detail-logo">
                  <img src="/logo-gray-article.svg" alt="Lunys Pastelería" />
                </div>
                <div className="article-description">
                  <h3>Te platico mi cuento</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat Leo, dictum nec lacus sed, lacinia porta velit.
                    Aenean in ex eget orci vestibulum molestie id eget velit.
                  </p>
                </div>
              </div>
              <div className="article-image">
                <img src="/images/article-top.jpg" alt="" />
              </div>
            </div>
            <div className="article middle">
              <div className="article-image">
                <img src="/images/article-middle.jpg" alt="" />
              </div>
              <div className="article-container">
                <div className="article-description">
                  <h3>Te platico mi cuento</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat Leo, dictum nec lacus sed, lacinia porta velit.
                    Aenean in ex eget orci vestibulum molestie id eget velit.
                  </p>
                </div>
              </div>
            </div>
            <div className="article bottom">
              <div className="article-container">
                <div className="article-description">
                  <h3>Te platico mi cuento</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat Leo, dictum nec lacus sed, lacinia porta velit.
                    Aenean in ex eget orci vestibulum molestie id eget velit.
                  </p>
                </div>
              </div>
              <div className="article-image">
                <img src="/images/article-bottom.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-work" className="section gallery">
        <div className="container">
          <div className="grid-rows-background">
            <div className="grid-row"></div>
            <div className="grid-row"></div>
            <div className="grid-row"></div>
            <div className="grid-row grid-tablet"></div>
          </div>
          <div className="grid-columns-background">
            <div className="grid-column"><span></span></div>
            <div className="grid-column"><span></span></div>
            <div className="grid-column"><span></span></div>
            <div className="grid-column"><span></span></div>
          </div>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            strings={{
              closeGallery: 'Cerrar galería',
              toggleMaximize: 'Maximizar',
              previousSlide: 'Anterior',
              nextSlide: 'Siguiente',
              download: 'Descargar',
              playVideo: 'Reproducir',
            }}
          >
            {getGalleryItems()}
          </LightGallery>
        </div>
      </div>
      <div id="place-order" className="section call-to-action">
        <div className="container">
          <form className="form">
            <div className="row">
              <h3>Qué te parece si te llamamos!</h3>
            </div>
            <div className="row">
              <div className="left-content">
                <p>Pásame tu número</p>
                <input
                  type="tel"
                  placeholder="El número aquí"
                  name="phone"
                  id="phone"
                  required
                />
                <div className="content-button">
                  <button type="button">Llama me!</button>
                </div>
              </div>
              <div className="right-content">
                <img src="/logo-gray.svg" alt="Lunys Pastelería" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="section footer">
        <div className="container">
          <div className="footer-image">
            <div className="aux-image">
              <img src="/images/footer.jpg" alt="" />
            </div>
          </div>
          <p>Descubre más de nosotros</p>
          <ul className="socials">
            <li>
              <a href="#">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={35}
                  height={35}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={35}
                  height={35}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src="/icons/tiktok.svg"
                  alt="TikTok"
                  width={32}
                  height={36}
                />
              </a>
            </li>
          </ul>
          <footer>
            <a href="lunys-pasteleria.cake">lunys-pasteleria.cake</a>
            <Image
              src="/icons/footer.svg"
              alt="Icon footer"
              width={34}
              height={25}
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
