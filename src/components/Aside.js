import styles from "../styles/aside.module.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
function Aside(props) {
  let styl = {
    fontWeight: 700,
    letterSpacing: ".5px",
  };
  if (props.srv == "71" || props.srv == "72" || props.srv == "73") {
    return (
      <div className={styles.aside}>
        <ul className={styles.ul}>
          <Link to={props.backUrl}>
            <li className={styles.item1}>
              <FaRegArrowAltCircleLeft />
            </li>
          </Link>
          <li className={styles.item2}>
            <Link to={"/about"} data-val="1" onClick={props.handleclick}>
              a
            </Link>
          </li>
          <li className={styles.item5}>
            <Link to={"/team"} data-val="2" onClick={props.handleclick}>
              m
            </Link>
          </li>
          <li className={styles.item6}>
            <Link data-val="4" onClick={props.handleclick}>
              c
            </Link>
          </li>
          <li className={styles.item4}>
            <Link to={"/about"} data-val="5" onClick={props.handleclick}>
              t
            </Link>
          </li>
          <li className={styles.item3}>
            <Link to={"/team"} data-val="6" onClick={props.handleclick}>
              o
            </Link>
          </li>
          <li className={styles.item7}>
            <Link data-val="7" onClick={props.handleclick}>
              c
            </Link>
          </li>
        </ul>
        <ul className={styles.ul7}>
          {props.srv == 70 ? (
            <li style={styl}>
              <Link data-val="3" data-srv="70" onClick={props.handleclick}>
                Services
              </Link>
            </li>
          ) : (
            <li>
              <Link data-val="3" data-srv="70" onClick={props.handleclick}>
                Services
              </Link>
            </li>
          )}
          {props.srv == 71 ? (
            <li style={styl}>
              <Link data-val="3" data-srv="71" onClick={props.handleclick}>
                Imagine
              </Link>
            </li>
          ) : (
            <li>
              <Link data-val="3" data-srv="71" onClick={props.handleclick}>
                Imagine
              </Link>
            </li>
          )}
          {props.srv == 72 ? (
            <li style={styl}>
              <Link data-val="3" data-srv="72" onClick={props.handleclick}>
                Design
              </Link>
            </li>
          ) : (
            <li>
              <Link data-val="3" data-srv="72" onClick={props.handleclick}>
                Design
              </Link>
            </li>
          )}
          {props.srv == 73 ? (
            <li style={styl}>
              <Link data-val="3" data-srv="73" onClick={props.handleclick}>
                Develop
              </Link>
            </li>
          ) : (
            <li>
              <Link data-val="3" data-srv="73" onClick={props.handleclick}>
                Develop
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div className={styles.aside}>
        <ul className={styles.ul}>
          <Link to={props.backUrl}>
            <li
              className={styles.item1}
              data-val="-1"
              onClick={props.handleclick}
            >
              <FaRegArrowAltCircleLeft />
            </li>
          </Link>
          <li className={styles.item2}>
            {props.child == 1 ? (
              <Link
                style={styl}
                to={"/about"}
                data-val="1"
                onClick={props.handleclick}
              >
                about CodeVue
              </Link>
            ) : (
              <Link to={"/about"} data-val="1" onClick={props.handleclick}>
                about CodeVue
              </Link>
            )}
          </li>
          <li className={styles.item5}>
            {props.child == 2 ? (
              <Link
                style={styl}
                to={"/team"}
                data-val="2"
                onClick={props.handleclick}
              >
                manifesto
              </Link>
            ) : (
              <Link to={"/team"} data-val="2" onClick={props.handleclick}>
                manifesto
              </Link>
            )}
          </li>
          <li className={styles.item8}>
            {props.child == 3 ? (
              <Link style={styl} data-val="3" onClick={props.handleclick}>
                services
              </Link>
            ) : (
              <Link data-val="3" data-srv="70" onClick={props.handleclick}>
                services
              </Link>
            )}
          </li>
          <li className={styles.item7}>
            {props.child == 4 ? (
              <Link style={styl} data-val="4" onClick={props.handleclick}>
                case study
              </Link>
            ) : (
              <Link data-val="4" onClick={props.handleclick}>
                case study
              </Link>
            )}
          </li>
          <li className={styles.item4}>
            {props.child == 5 ? (
              <Link
                style={styl}
                to={"/about"}
                data-val="5"
                onClick={props.handleclick}
              >
                testimonials
              </Link>
            ) : (
              <Link to={"/about"} data-val="5" onClick={props.handleclick}>
                testimonials
              </Link>
            )}
          </li>
          <li className={styles.item3}>
            {props.child == 6 ? (
              <Link
                style={styl}
                to={"/team"}
                data-val="6"
                onClick={props.handleclick}
              >
                our team
              </Link>
            ) : (
              <Link to={"/team"} data-val="6" onClick={props.handleclick}>
                our team
              </Link>
            )}
          </li>

          <li className={styles.item6}>
            {props.child == 7 ? (
              <Link style={styl} data-val="7" onClick={props.handleclick}>
                contact
              </Link>
            ) : (
              <Link data-val="7" onClick={props.handleclick}>
                contact
              </Link>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default Aside;
