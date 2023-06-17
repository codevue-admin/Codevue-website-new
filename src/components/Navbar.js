import styles from "../styles/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaPuzzlePiece } from "react-icons/fa";
import { useTheme } from "../hooks/theme";
function Navbar(props) {
  const redirect = useNavigate();
  const theme = useTheme();
  const redirectHandle = (e) => {
    e.preventDefault();
    window.removeEventListener("scroll", props.handleScroll);
    redirect("/");
  };
  return (
    <div
      style={{ backgroundColor: theme.mode.backgroundColor }}
      className={styles.navbar}
    >
      <div className={styles.logo}>
        <Link to={"/"} onClick={redirectHandle}>
          &lt;/&gt;CodeVue
        </Link>
      </div>
      <div>
        <Link to={"/"} onClick={redirectHandle}>
          <FaPuzzlePiece /> Home
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
