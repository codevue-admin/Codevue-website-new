import { Navbar, Aside, Nextpage, Footer, Loading } from "../components";
import styles from "../styles/allpage.module.css";
import AboutPage from "./AboutPage";
import TeamPage from "./TeamPage";
import TestimonialPage from "./Testimonialpage.js";
import ManifestoPage from "./Manifestopage";
import ContactPage from "./ContactPage";
import CaseStudyPage from "./caseStudyPage";
import ServicePage from "./ServicePage";
import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/theme";
let scrollIntoView = require("scroll-into-view");

function Allpages(props) {
  const redirect = useNavigate();
  const theme = useTheme();
  const [child, setChild] = useState("1");
  const [service, setservice] = useState(null);
  const [servicetab, settab] = useState("service");
  const [load, setload] = useState(true);
  const back = useRef("0");
  const ref = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialRef = useRef(null);
  const manifestoRef = useRef(null);
  const contactRef = useRef(null);
  const caseStudyRef = useRef(null);
  const serviceRef = useRef(null);
  const allref = {
    1: aboutRef,
    2: manifestoRef,
    3: serviceRef,
    4: caseStudyRef,
    5: testimonialRef,
    6: teamRef,
    7: contactRef,
  };
  let pos = 0;

  useEffect(() => {
    console.log(props.pos);
    if (props.pos) {
      let pos = props.pos;
      scrollIntoView(allref[pos].current, function () {
        setChild(pos);
      });
    }
  }, []);

  const handleClick = (e, num) => {
    e.preventDefault();
    console.log("clicked!");
    let r = e.target.getAttribute("data-val");
    let s = e.target.getAttribute("data-srv");
    setservice(s);
    console.log(r);
    if (r == 3) {
      if (s == "70") {
        settab("service");
      } else if (s == "71") {
        settab("imagine");
      } else if (s == "72") {
        settab("design");
      } else {
        settab("develop");
      }
    }
    if (r == null) {
      const key = back.current[back.current.length - 1];
      console.log(key);
      if (key != 0) {
        if (key == 3) {
          settab("service");
        }
        scrollIntoView(allref[key].current, function () {
          pos = window.scrollY;
          back.current = back.current.slice(0, back.current.length - 1);
          if (key != 0) {
            setChild(key);
          }
        });
      } else {
        console.log("else");
        return redirect("/");
      }
    } else {
      scrollIntoView(allref[r].current, function () {
        pos = window.scrollY;
        if (back.current[back.current.length - 1] != child) {
          back.current = back.current + child;
        }
        setChild(r);
      });
    }
  };

  function loadfn() {
    setload(false);
  }

  return (
    <>
      {load && <Loading loadfn={loadfn} />}
      <div ref={ref} className={styles.maincontent}>
        <Navbar />
        <Aside
          child={child}
          myref={teamRef}
          srv={service}
          handleclick={handleClick}
        />
        <Nextpage child={child} />
        <AboutPage childref={aboutRef} />
        <ManifestoPage childref={manifestoRef} />
        <ServicePage
          childref={serviceRef}
          servicetab={servicetab}
          handleclick={handleClick}
        />
        <CaseStudyPage childref={caseStudyRef} />
        <TestimonialPage childref={testimonialRef} />
        <TeamPage childref={teamRef} />
        <ContactPage childref={contactRef} />
      </div>
    </>
  );
}

export default Allpages;
