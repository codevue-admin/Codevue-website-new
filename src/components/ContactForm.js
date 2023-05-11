import { useEffect, useState } from "react";
import styles from "../styles/contactform.module.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useTheme } from "../hooks/theme";

function ContactForm() {
  let theme = useTheme();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [btn, setbtn] = useState(true);
  useEffect(() => {
    if (email != "" || phone != "") {
      setbtn(false);
    } else {
      setbtn(true);
    }
  }, [email, phone]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    setemail("");
    setname("");
    setphone("");
    setmessage("");
  };
  return (
    <div className={styles.contactform}>
      <h1 className={styles.h1}>contact</h1>
      <div className={styles.tagline}>
        <p>Let's raise a virtual toast to ypur digital success.!</p>
      </div>
      <div className={styles.formdiv}>
        <p>We would love to hear from you</p>
        <div className={styles.form}>
          <h3>Fill the form </h3>
          <form className={styles.myform}>
            <input
              style={{ color: theme.mode.color }}
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              style={{ color: theme.mode.color }}
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              style={{ color: theme.mode.color }}
              type="number"
              placeholder="phone number"
              name="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              style={{ color: theme.mode.color }}
              placeholder="message"
              name="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <button
              style={{ color: theme.mode.color }}
              className={styles.btn}
              type="submit"
              onClick={handleSubmit}
              disabled={btn}
            >
              Submit <FaRegArrowAltCircleRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
