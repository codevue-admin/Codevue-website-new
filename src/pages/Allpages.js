import { Navbar, Aside, Nextpage, Footer } from "../components";
import AboutPage from "./AboutPage";
import TeamPage from "./TeamPage";
import TestimonialPage from "./Testimonialpage.js";
import ManifestoPage from "./Manifestopage";
import ContactPage from "./ContactPage";
import CaseStudyPage from "./caseStudyPage";
import ServicePage from "./ServicePage";
import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
let scrollIntoView = require("scroll-into-view");

function Allpages(props) {
  const redirect = useNavigate();
  const [child, setChild] = useState("1");
  const [service, setservice] = useState(null);
  const [servicetab, settab] = useState("service");
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
  );
}

export default Allpages;
