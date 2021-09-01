import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Scroll from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMusic,
  faBolt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./../css/scroll-btn-animation.css";
import "./../css/lpage.css";

const ScrollLink = Scroll.ScrollLink;

const featureList = [
  {
    title: "Metus aliquam",
    icon: faMusic,
    txt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  {
    title: "Eget egestas",
    icon: faBolt,
    txt:
      "Quis blandit turpis cursus in hac. Dapibus ultrices in iaculis nunc. Risus ultricies tristique nulla aliquet.",
  },
];

const Lpage = () => {
  return (
    <>
      <Head></Head>
      <Features></Features>
      <Mechanism></Mechanism>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
};

const Head = () => {
  return (
    <>
      <header>
        <div className="container">
          <h5>ADIPISCING ELIT</h5>
          <h1>Landing X</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <button className="btn">
            Purchase Now{" "}
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
          <div
            className="scroll-btn"
            onClick={() => (window.location = "#features")}
          ></div>
          <span></span>
        </div>
      </header>
    </>
  );
};

const Features = () => {
  return (
    <>
      <section className="features" id="features">
        <div className="container">
          <h5>LACINIA QUIS</h5>
          <h2>Features</h2>
          <p>
            Sem et tortor consequat id porta. Egestas dui id ornare arcu odio ut
            sem. Laoreet id donec ultrices tincidunt arcu non sodales neque.
          </p>
          <main>
            {featureList.map((e, i) => {
              return (
                <>
                  <article>
                    <div className="ftur">
                      <FontAwesomeIcon icon={e.icon}></FontAwesomeIcon>
                    </div>
                    <h4>{e.title}</h4>
                    <p>{e.txt}</p>
                  </article>
                </>
              );
            })}
          </main>
        </div>
      </section>
    </>
  );
};

const Mechanism = () => {
  return (
    <>
      <section className="mecha">
        <div className="container">
          <h5>ETIAM DIGNISSIM</h5>
          <h2>How it works</h2>
          <p>
            Aenean sed adipiscing diam donec adipiscing tristique risus nec.
            Fermentum posuere urna nec tincidunt praesent.
          </p>
        </div>
        <main>
          <img
            src={require("./../img/mechanism.svg").default}
            alt="Mechanism"
          ></img>
          <div>
            <h3>Vestibulum mattis</h3>
            <p>
              Sed blandit libero volutpat sed. Eget dolor morbi non arcu risus
              quis varius quam. Viverra tellus in hac habitasse platea dictumst.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <div className="container">
          <h5>LOBORTIS SCELERISQUE</h5>
          <h2>Pricing X</h2>
          <p>
            Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
            Sit amet justo donec enim.
          </p>
        </div>
        <main>
          <article>
            <h5>Basic</h5>
            <h2>$49</h2>
            <p>
              Vel elit scelerisque mauris pellentesque pulvinar pellentesque.
              Bibendum ut tristique et egestas quis. Integer malesuada nunc vel
              risus.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon
                  className="check"
                  icon={faCheck}
                ></FontAwesomeIcon>
                <p>Sociis natoque penatibus et magnis dis parturient.</p>
              </li>
              <li>
                <FontAwesomeIcon
                  className="check"
                  icon={faCheck}
                ></FontAwesomeIcon>
                <p>Neque volutpat ac tincidunt vitae.</p>
              </li>
            </ul>
            <button>Buy this</button>
          </article>

          <span className="line"></span>
          <article>
            <h5>Pro Plan</h5>
            <h2>$79</h2>
            <p>
              Tincidunt praesent semper feugiat nibh. Ultrices tincidunt arcu
              non sodales neque sodales. Magna ac placerat vestibulum lectus
              mauris ultrices.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon
                  className="check"
                  icon={faCheck}
                ></FontAwesomeIcon>
                <p>Sociis natoque penatibus et magnis dis parturient.</p>
              </li>
              <li>
                <FontAwesomeIcon
                  className="check"
                  icon={faCheck}
                ></FontAwesomeIcon>
                <p>Neque volutpat ac tincidunt vitae.</p>
              </li>
            </ul>
            <button>
              Buy this {""}{" "}
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
          </article>
        </main>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <section className="footer">
        <h5>© All rights reserved.</h5>
      </section>
    </>
  );
};

export default Lpage;
