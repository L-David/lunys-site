import type { NextPage } from "next";
import { PhoneForwarded, Facebook, Instagram } from "react-feather";
import Image from "next/image";
import Slider from "react-slick";
import LightGallery from "lightgallery/react";

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

  const getGalleryItems = () => {
    return (
      <>
        {[...Array(12)].map((_, index) => (
          <a key={index + 1} href={`/gallery/${index + 1}.png`}>
            <Image
              className="gallery-image"
              src={`/gallery/${index + 1}.png`}
              alt={`Image ${index + 1}`}
              height={370}
              width={310}
            />
          </a>
        ))}
      </>
    );
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="logo">
            <Image className="logo" src="/logo.png" alt="Lunys Pastelería" width={65} height={78} />
          </div>
          <nav>
            <ul>
              <li><a href="#" title="Casa">Casa</a></li>
              <li><a href="#" title="Nostros">Nostros</a></li>
              <li><a href="#" title="Nuestro trabajo">Nuestro trabajo</a></li>
              <li><a href="#" title="Realiza tu pedido">Realiza tu pedido</a></li>
            </ul>
          </nav>
          <div className="contact-information">
            <span className="circle-phone">
              <PhoneForwarded size={22} color="#FFF" />
            </span>
            <span className="phone-number">229 476 3256</span>
          </div>
        </div>
      </header>
      <div className="section custom-slider">
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
      <div className="section history">
        <div
          className="pre-history"
          style={{ backgroundImage: `url(/images/pre-history.jpg)` }}
        >
          <div className="detail-logo">
            <Image
              src="/logo-black.svg"
              alt="Lunys Pastelería"
              width={54}
              height={66}
            />
          </div>
          <div className="container"></div>
        </div>
        <div className="aux-container">
          <div className="container">
            <div className="article top">
              <div className="article-container">
                <div className="detail-logo">
                  <Image
                    src="/logo-gray-article.svg"
                    alt="Lunys Pastelería"
                    width={156}
                    height={193}
                  />
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
                <Image
                  src="/images/article-top.jpg"
                  alt=""
                  width={552}
                  height={710}
                />
              </div>
            </div>
            <div className="article middle">
              <div className="article-image">
                <Image
                  className="article-image"
                  src="/images/article-middle.jpg"
                  alt=""
                  width={640}
                  height={840}
                />
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
                <Image
                  src="/images/article-bottom.jpg"
                  alt=""
                  width={640}
                  height={840}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section gallery">
        <div className="container">
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            {getGalleryItems()}
          </LightGallery>
        </div>
      </div>
      <div className="section call-to-action">
        <div className="container">
          <form className="form">
            <div className="left-content">
              <h3>Qué te parece si te llamamos!</h3>
              <p>Pásame tu número</p>
              <input
                type="tel"
                placeholder="El número aquí"
                name="phone"
                id="phone"
                required
              />
              <button type="button">Llama me!</button>
            </div>
            <div className="right-content">
              <Image
                src="/logo-gray.svg"
                alt="Lunys Pastelería"
                width={195}
                height={168}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="section footer">
        <div className="container">
          <Image
            src="/images/footer.png"
            alt=""
            width={680}
            height={380}
          />
          <p>Descubre más de nosotros</p>
          <ul className="socials">
            <li>
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={35}
                height={35}
              />
            </li>
            <li>
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={35}
                height={35}
              />
            </li>
            <li>
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={32}
                height={36}
              />
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
