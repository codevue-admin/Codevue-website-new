import { useEffect, useRef } from "react";
import styles from "../styles/service.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/theme";

function Service(props) {
  let theme = useTheme();
  let links = useRef(null);
  const handleTabClick = (e) => {
    let team = e.target.closest(`.${styles.tabs}`);
    console.log(team);
    let types = team.children;
    for (let i = 0; i < types.length; i++) {
      let x = types[i];
      if (x.classList.length > 0) {
        x.classList.remove(x.classList[0]);
      }
    }
    e.target.classList.add("selecttype");
  };
  return (
    <div className={styles.service}>
      {props.tab == "service" && (
        <div className={styles.section1}>
          <h1 style={{ color: theme.mode.h1 }} className={styles.h1}>
            Service
          </h1>
          <div className={styles.tagline}>
            <i>Imagine. Design. Build. Launch.</i>
          </div>
          <p>
            The market is rapidly changing and businesses are struggling to keep
            up with evolving trends. Codevue his packed up with a team of highly
            skilled developers to help your clients set their business
            strategies and build the top notch mobile app that brings a change.
            We support you to deliver extraordinary and quality apps, with our
            services to make the world digital.
          </p>
          <h2 className={styles.links} ref={links}>
            <Link>Imagine</Link> , <Link>Design</Link>, <Link>Develop</Link>
          </h2>
        </div>
      )}
      {props.tab == "imagine" && (
        <div className={styles.section2}>
          <h1 style={{ color: theme.mode.h1 }} className={styles.h1}>
            Imagine
          </h1>
          <div className={styles.tagline}>
            <i>The flight of transformation and success take off.!</i>
          </div>
          <p>
            Join us in the journey with our tech experts in an immersive session
            to define your product idea's scope of work. Our team will take a
            deep dive into your business needs, analyze your competition, and
            develop bespoke solutions to propel your success. Together, we'll
            create a roadmap that aligns with your vision and delivers a product
            that exceeds your expectations. Get ready to bring your vision to
            life with our tailored expertise.
          </p>
          <div className={styles.tabdiv}>
            <div className={styles.tabs}>
              <h3
                className="selecttype"
                onClick={handleTabClick}
                data-val="scoping"
              >
                Scoping sessions
              </h3>
              <h3 data-val="business" onClick={handleTabClick}>
                Business analysis
              </h3>
            </div>
            <div className={styles.myteam}></div>
          </div>
        </div>
      )}
      {props.tab == "design" && (
        <div className={styles.section3}>
          <h1 style={{ color: theme.mode.h1 }} className={styles.h1}>
            Design
          </h1>
          <div className={styles.tagline}>
            <i>Get ready to experience excellence.!</i>
          </div>
          <p>
            Want to create a seamless user experience and make a lasting
            impression on your customers? Our team of skilled professionals
            specializes in both UI/UX design and graphic design, ensuring that
            your website and app not only look stunning but also function
            flawlessly. By combining best-in-class web design, sophisticated UI
            elements, and intuitive paths to purchase, we drive user engagement
            and conversion. And with our expertise in blending visual elements
            and text, we can effectively communicate your business idea and
            vision, giving your brand the momentum it needs to thrive and
            connect with your customers on a deeper level.
          </p>
          <div className={styles.tabdiv}>
            <div className={styles.tabs}>
              <h3
                className="selecttype"
                onClick={handleTabClick}
                data-val="scoping"
              >
                UI-UX
              </h3>
              <h3 data-val="business" onClick={handleTabClick}>
                Graphic-Design
              </h3>
            </div>
            <div className={styles.myteam}></div>
          </div>
        </div>
      )}
      {props.tab == "develop" && (
        <div className={styles.section4}>
          <h1 style={{ color: theme.mode.h1 }} className={styles.h1}>
            Develop
          </h1>
          <div className={styles.tagline}>
            <i>This is were the magic and fun happens.!</i>
          </div>
          <p>
            We understand that your website and app are a reflection of your
            brand and play a vital role in engaging your customers. That's why
            we start by analyzing your business needs and creating a tailor-made
            plan that not only showcases your brand's goals and initiatives but
            also ensures user-friendliness and functionality. We believe that a
            beautiful design alone is not enough, which is why we prioritize
            easy management and an intuitive user interface. Whether you're
            looking for a WOW project or a simple corporate website, our team of
            creative experts will work with you to deliver a website and app
            that exceeds your expectations and drives your success.
          </p>
          <div className={styles.tabdiv}>
            <div className={styles.tabs}>
              <h3
                className="selecttype"
                onClick={handleTabClick}
                data-val="scoping"
              >
                Web-development
              </h3>
              <h3 data-val="business" onClick={handleTabClick}>
                App-development
              </h3>
              <h3 data-val="business" onClick={handleTabClick}>
                Testing
              </h3>
              <h3 data-val="business" onClick={handleTabClick}>
                Collaborative tools
              </h3>
            </div>
            <div className={styles.myteam}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;
