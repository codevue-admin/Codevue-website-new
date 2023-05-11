import { useRef, useState } from "react";
import styles from "../styles/manifesto.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Trust, Quality, Communication } from "./ManifestoTabs";
import { useTheme } from "../hooks/theme";

function Manifesto() {
  let theme = useTheme();
  const [tab, settab] = useState("Trust");
  let trustRef = useRef(null);
  let qualityRef = useRef(null);
  let commRef = useRef(null);
  const handleClick = (e) => {
    let l1 = trustRef.current;
    let l2 = qualityRef.current;
    let l3 = commRef.current;
    if (l1.classList.length > 0) {
      l1.classList.remove(l1.classList[0]);
      if (theme.mode.color === "white") {
        e.target.classList.add(`${styles.tabclick}`);
      } else {
        e.target.classList.add(`${styles.tabclickl}`);
      }
      let t = e.target.getAttribute("data-val");
      settab(t);
    } else if (l2.classList.length > 0) {
      l2.classList.remove(l2.classList[0]);
      if (theme.mode.color === "white") {
        e.target.classList.add(`${styles.tabclick}`);
      } else {
        e.target.classList.add(`${styles.tabclickl}`);
      }
      let t = e.target.getAttribute("data-val");
      settab(t);
    } else {
      l3.classList.remove(l3.classList[0]);
      if (theme.mode.color === "white") {
        e.target.classList.add(`${styles.tabclick}`);
      } else {
        e.target.classList.add(`${styles.tabclickl}`);
      }
      let t = e.target.getAttribute("data-val");
      settab(t);
    }
  };
  return (
    <div className={styles.maindiv}>
      <h1 style={{ color: theme.mode.h1 }} className={styles.h1}>
        manifesto
      </h1>
      <div className={styles.tagline}>
        <i>
          Moral values from our childhood reconceptualized as the manifesto of
          CodeVue.
        </i>
      </div>
      <div className={styles.section}>
        <div className={styles.tabs}>
          <div
            data-val="Trust"
            className={
              theme.mode.color === "white" ? styles.tabclick : styles.tabclickl
            }
            ref={trustRef}
            onClick={handleClick}
          >
            trust & transparency
          </div>
          <div data-val="Quality" ref={qualityRef} onClick={handleClick}>
            quality
          </div>
          <div data-val="Communication" ref={commRef} onClick={handleClick}>
            communication
          </div>
        </div>
        {tab === "Trust" ? <Trust /> : null}
        {tab === "Quality" ? <Quality /> : null}
        {tab === "Communication" ? <Communication /> : null}
      </div>
      <p className={styles.lastp}>
        <FaQuoteLeft className={styles.quotes} />
        we typically overlook things from our childhood except for the moral
        values & one thing that has stayed with us is QCT - Quality,
        communication(circle), and trust and transparency (time).
      </p>
    </div>
  );
}

export default Manifesto;
