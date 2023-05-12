import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "../styles/footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.policy}>
        <Link to={"/policy"}>Privacy Policy</Link> |{" "}
        <Link to={"/terms"}>T&C</Link>
      </div>
      <div className={styles.copyright}>Copyright @2023-24</div>
      <div className={styles.socialicons}>
        <Link to={"#"}>
          <FaInstagram />
        </Link>
        <Link to={"#"}>
          <FaLinkedinIn />
        </Link>
        <Link to={"#"}>
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
