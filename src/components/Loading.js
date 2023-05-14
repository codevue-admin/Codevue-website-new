import { useEffect, useState } from "react";
import styles from "../styles/loading.module.css";
import { useTheme } from "../hooks/theme";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { ReactComponent as Phone } from "../images/phone.svg";

function Loading(props) {
  const [per, setper] = useState(0);
  const theme = useTheme();
  let inter;

  useEffect(() => {
    if (per < 100) {
      setTimeout(() => {
        setper((per) => per + 1);
      }, 25);
    } else {
      props.loadfn();
    }
  }, [per]);
  return (
    <div
      style={{ backgroundColor: theme.mode.backgroundColor }}
      className={styles.loading}
    >
      <div>This one's heavy. Hold on to it! </div>
      <div>
        CodeVue{" "}
        {per > 20 && <FaMobileAlt style={{ color: theme.mode.color }} />}{" "}
        {per > 45 && <FaLaptop style={{ color: theme.mode.color }} />}{" "}
        {per > 80 && <FaTabletAlt style={{ color: theme.mode.color }} />}
      </div>
      <div>Loading...{per}% </div>
    </div>
  );
}

export default Loading;
