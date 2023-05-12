import { ReactComponent as Icon } from "../images/nexticon.svg";
import styles from "../styles/nextpage.module.css";
import { useTheme } from "../hooks/theme";

function Nextpage(props) {
  let theme = useTheme();
  let obj = {
    1: "About Codevue",
    2: "Manifesto",
    3: "Services",
    4: "Case study",
    5: "Testimonials",
    6: "Our Team",
    7: "Contact",
  };
  let num = parseInt(props.child) + 1;
  if (num < 8) {
    return (
      <div className={styles.icondiv}>
        <Icon fill="none" stroke={theme.mode.color} /> {obj[num]}
      </div>
    );
  }
}

export default Nextpage;
