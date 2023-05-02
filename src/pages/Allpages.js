import { Navbar, Aside, Nextpage } from "../components";
import AboutPage from "./AboutPage";
import TeamPage from "./TeamPage";
import TestimonialPage from "./Testimonialpage.js";
import ManifestoPage from "./Manifestopage";
import ContactPage from "./ContactPage";
import CaseStudyPage from "./caseStudyPage";
import ServicePage from "./ServicePage";
import { useEffect, useRef, useState, useMemo } from "react";

let scrollIntoView = require("scroll-into-view");

function Allpages() {
  const [child, setChild] = useState("1");
  const [service, setservice] = useState(70);
  const [servicetab, settab] = useState("service");
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

  // useEffect(() => {
  //   window.addEventListener("scroll", handlescroll);
  //   return () => {
  //     window.removeEventListener("scroll", handlescroll);
  //   };
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // window.removeEventListener("scroll", handlescroll);
    console.log("clicked!");
    let r = e.target.getAttribute("data-val");
    console.log(r);
    if (r == 3) {
      let s = e.target.getAttribute("data-srv");
      if (s != null) {
        setservice(s);
      }
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
    console.log(allref[r].current);
    scrollIntoView(allref[r].current, function () {
      pos = window.scrollY;
      console.log("pos:", pos);
      setChild(r);
      // window.addEventListener("scroll", handlescroll);
    });
  };

  const handlescroll = (e) => {
    let newPos = window.scrollY;
    let dir = null;
    if (pos - newPos < 0) {
      dir = "down";
    } else if (pos - newPos > 0) {
      dir = "up";
    }
    if (dir == "up") {
      if (pos == 0) {
        scrollIntoView(aboutRef.current, function () {
          pos = window.scrollY;
        });
      } else if (pos == window.innerHeight) {
        scrollIntoView(aboutRef.current, function () {
          pos = window.scrollY;
          console.log("pos:", pos);
          setChild(1);
        });
      }
    } else if (dir == "down") {
      if (pos == 0) {
        let num = parseInt(child) + 1;
        let st = num.toString();
        scrollIntoView(allref[st].current, function () {
          pos = window.scrollY;
          console.log("pos:", pos);
          setChild(2);
        });
      } else if (pos == window.innerHeight) {
        scrollIntoView(teamRef.current, function () {
          pos = window.scrollY;
        });
      }
    }
  };
  return (
    <div ref={ref}>
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
      <ServicePage childref={serviceRef} servicetab={servicetab} />
      <CaseStudyPage childref={caseStudyRef} />
      <TestimonialPage childref={testimonialRef} />
      <TeamPage childref={teamRef} />
      <ContactPage childref={contactRef} />
    </div>
  );
}

export default Allpages;
