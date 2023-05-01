import styles from "../styles/servicepage.module.css";
import { Service } from "../components";

function ServicePage(props) {
  return (
    <div ref={props.childref} className={styles.servicepage}>
      <Service tab={props.servicetab} />
    </div>
  );
}

export default ServicePage;
