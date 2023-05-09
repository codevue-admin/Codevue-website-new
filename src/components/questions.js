import { useEffect, useRef, useState } from "react";
import styles from "../styles/questions.module.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import SelectTeam from "./SelectTeam";
import { useTheme } from "../hooks/theme";

const questions = [
  "Q. I don't think we've been formally introduced. Hi, I'm Shashank, what's your name?",
  "Q. What is the best way to contact you? We prefer a phone call though?",
  "Q. We have a diverse team with a wide range of skills and knowledge. what would you like to choose?",
];

function Question() {
  let theme = useTheme();
  let [name, setname] = useState("");
  let [phone, setphone] = useState("");
  let [email, setemail] = useState("");
  let [skype, setskype] = useState("");
  let [btn, setbtn] = useState(true);
  const [count, setcount] = useState(0);
  const headRef = useRef(null);
  const inpRef = useRef(null);
  const phRef = useRef(null);
  const emRef = useRef(null);
  const skRef = useRef(null);
  useEffect(() => {
    if (count == 0) {
      if (name.length > 2) {
        setbtn(false);
      } else {
        setbtn(true);
      }
    } else if (count == 1) {
      if (phone.length > 9 || email != "" || skype != "") {
        setbtn(false);
      } else {
        setbtn(true);
      }
    }
  }, [name, phone, email, skype]);
  const handleNext = (e) => {
    setcount((count) => {
      return count + 1;
    });
    setbtn(true);
  };
  const handleClick = (e) => {
    if (count == 0) {
      headRef.current.style.display = "none";
      inpRef.current.style.display = "block";
    } else if (count == 1) {
      let hd = e.target.closest("h4");
      let cls = hd.getAttribute("data-val");
      if (cls == "phoneinp") {
        phRef.current.style.display = "block";
        hd.style.display = "none";
      } else if (cls == "emailinp") {
        hd.style.display = "none";
        emRef.current.style.display = "block";
      } else {
        hd.style.display = "none";
        skRef.current.style.display = "block";
      }
    }
  };
  return (
    <div className={styles.questions}>
      <h1>contact</h1>
      <p>𝐿𝑒𝓉'𝓈 𝓇𝒶𝒾𝓈𝑒 𝒶 𝓋𝒾𝓇𝓉𝓊𝒶𝓁 𝓉𝑜𝒶𝓈𝓉 𝓉𝑜 𝓎𝑜𝓊𝓇 𝒹𝒾𝑔𝒾𝓉𝒶𝓁 𝓈𝓊𝒸𝒸𝑒𝓈𝓈.!</p>
      <p>
        We've had the privilege of helping many of our clients navigate the vast
        landscape of the digital world. We'd like to extend an invitation to you
        too. Let's raise a glass and cheers to new opportunities and exciting
        possibilities.!
      </p>
      <div className={styles.quescont}>
        {count == 0 && (
          <h3 className={styles.ques} ref={headRef} onClick={handleClick}>
            {questions[count]}
          </h3>
        )}
        {count == 1 && (
          <>
            <h3 className={styles.ques}>{questions[count]}</h3>
            <ul className={styles.ul}>
              <li>
                <h4 data-val="phoneinp" onClick={handleClick}>
                  Phone Number
                </h4>
                <input
                  style={{ color: theme.mode.color }}
                  type="number"
                  className={styles.phoneinp}
                  ref={phRef}
                  placeholder="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </li>
              <li>
                <h4 onClick={handleClick} data-val="emailinp">
                  Email ID
                </h4>
                <input
                  style={{ color: theme.mode.color }}
                  className={styles.emailinp}
                  ref={emRef}
                  placeholder="Email ID"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </li>
              <li>
                <h4 onClick={handleClick} data-val="skypeinp">
                  Skype ID
                </h4>
                <input
                  style={{ color: theme.mode.color }}
                  className={styles.skypeinp}
                  ref={skRef}
                  placeholder="Skype ID"
                  name="skype"
                  value={skype}
                  onChange={(e) => setskype(e.target.value)}
                />
              </li>
            </ul>
          </>
        )}
        {count == 2 && (
          <>
            <SelectTeam btn={btn} setbtn={setbtn} />
          </>
        )}
        {count == 0 && (
          <input
            style={{ color: theme.mode.color }}
            className={styles.quesinp}
            ref={inpRef}
            placeholder={questions[count]}
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        )}

        <button
          style={{ color: theme.mode.color }}
          className={styles.btn}
          disabled={btn}
          onClick={handleNext}
        >
          Next <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
}

export default Question;
