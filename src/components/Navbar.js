import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { FaPuzzlePiece } from "react-icons/fa";
import { useTheme } from "../hooks/theme";
function Navbar() {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.mode.backgroundColor }}
      className={styles.navbar}
    >
      <div className={styles.logo}>
        <Link to={"/"}>&lt;/&gt;CodeVue</Link>
      </div>
      <div>
        <Link to={"/"}>
          <FaPuzzlePiece /> Home
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
