import styles from "../styles/termsandcoditions.module.css";
import { useRef } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Navbar, Footer } from "../components";
import { useTheme } from "../hooks/theme";

let scrollIntoView = require("scroll-into-view");

function TermsAndConditions() {
  const theme = useTheme();
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  let ref4 = useRef(null);
  let ref5 = useRef(null);
  let ref6 = useRef(null);
  let ref7 = useRef(null);
  let ref8 = useRef(null);
  let ref9 = useRef(null);
  let ref10 = useRef(null);
  let ref11 = useRef(null);
  let allref = {
    1: ref1,
    2: ref2,
    3: ref3,
    4: ref4,
    5: ref5,
    6: ref6,
    7: ref7,
    8: ref8,
    9: ref9,
    10: ref10,
    11: ref11,
  };
  const handleClick = (e) => {
    console.log("clicked");
    let rf = e.target.getAttribute("data-val");
    console.log(allref[rf]);
    scrollIntoView(allref[rf].current);
  };
  const handleToggle = (e) => {
    let id = e.target.getAttribute("data-val");
    console.log(id);
    id = "#" + id;
    let ele = document.querySelector(id);
    let icon = e.target.childNodes;
    console.log(icon);
    console.log(ele);
    let hgt = ele.clientHeight;
    if (hgt == 0) {
      ele.style.height = "auto";
      icon[2].classList.remove(styles.dis);
      icon[1].classList.add(styles.dis);
    } else {
      ele.style.height = "0";
      icon[1].classList.remove(styles.dis);
      icon[2].classList.add(styles.dis);
    }
  };
  return (
    <div className={styles.termcontainer}>
      <Navbar />
      <div className={styles.termnav}>
        <ul>
          <li data-val="1" onClick={handleClick}>
            1. Definitions
          </li>
          <li data-val="2" onClick={handleClick}>
            2. Acceptable Use
          </li>
          <li data-val="3" onClick={handleClick}>
            3. Third-Party Websites
          </li>
          <li data-val="4" onClick={handleClick}>
            4. Intellectual Property
          </li>
          <li data-val="5" onClick={handleClick}>
            5. Our Rights
          </li>
          <li data-val="6" onClick={handleClick}>
            6. Privacy
          </li>
          <li data-val="7" onClick={handleClick}>
            7. Safety
          </li>
          <li data-val="8" onClick={handleClick}>
            8. Indemnity
          </li>
          <li data-val="9" onClick={handleClick}>
            9. Termination
          </li>
          <li data-val="10" onClick={handleClick}>
            10. Feedback
          </li>
          <li data-val="11" onClick={handleClick}>
            11. General
          </li>
        </ul>
      </div>
      <div className={styles.termdiv}>
        <h1>Terms and Conditions</h1>
        <p className={styles.tagline}>Are we hiding something??</p>
        <p>
          <b>
            IMPORTANT – BY ACCESSING AND USING THE CODEVUE SITE YOU WILL BE
            LEGALLY BOUND BY THESE TERMS.
          </b>
        </p>
        <p>
          If you do not wish to be bound by these Terms and Conditions, You may
          not use the CodeVue Site and should exit the CodeVue Site at once. (
          <b>Just kidding</b>)
        </p>
        <p>
          These Terms and Conditions shall apply to your use of the website
          located at CodeVue. Agency and all pages and parts thereof ("the
          Site").
        </p>
        <h3
          ref={ref1}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc1"
        >
          <div>1. Definitions</div>
          <div data-type="right" className={styles.right}>
            <FaAngleRight />
          </div>
          <div data-type="left" className={`${styles.left} ${styles.dis}`}>
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc1">
          <p>1.1 "You/your" means you, the user.</p>
          <p>
            1.2 "We/Us" means CodeVue Private Limited hereafter referred to as
            the Company
          </p>
          <p>1.3 "the Site" shall have the meaning as set out above.</p>
          <p>
            1.4 "User Information" means the personal details that may be
            provided by you to us via the Site.
          </p>
          <p>
            1.5 "Users" means the users of the Site collectively and/or
            individually as the context admits.
          </p>
          <p>1.6 "Website" means a site on the World Wide Web.</p>
        </div>
        <h3
          ref={ref2}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc2"
        >
          <div>2.Acceptable use</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc2">
          <p>
            You agree that any use by you of the Site shall be per the following
            conditions:
          </p>
          <p>
            2.1 You must not post or transmit through the Site any defamatory,
            threatening, obscene, harmful, or pornographic material or material
            which would violate or infringe in any way upon the rights of others
            (including intellectual property rights, rights of confidentiality,
            or rights of privacy) or cause distress or inconvenience or which
            does not comply with all relevant laws. You must not express
            opinions that are vulgar, crude, sexist, racist, or otherwise
            offensive. You must always treat other users with respect.
          </p>
          <p>
            2.2 You will and must not post or otherwise make available on the
            Site any material which you do not own without the express
            permission of the owner of the material.
          </p>
          <p>
            2.3 You may not copy, download, reproduce, republish, broadcast,
            print, transmit in any manner whatsoever, any material on the Site
            except as is strictly necessary for your own personal non-commercial
            home use.
          </p>
          <p>
            2.4 You agree not to use the Site to transmit any material for
            publicity, promotion, and/or advertising or any other commercial
            purpose.
          </p>
        </div>
        <h3
          ref={ref3}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc3"
        >
          <div>3. Third-Party Websites</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc3">
          <p>
            3.1 You acknowledge and agree that We are not responsible for the
            availability of any third-party Websites or material You access
            through the Site, and do not endorse and are not responsible or
            liable for any content, advertising, products, or services on or
            available from such Websites or material, nor for any damage, loss
            or offense caused, or alleged to be caused, by or in connection with
            use of or reliance on any content, advertising, products or services
            available on or available from such Websites or material.
          </p>
          <p>
            3.2 Any dealings between You and any advertisers or merchants found
            on or via the Site, including payment for and delivery of products,
            services, and any other terms, conditions, warranties, or
            representations, associated with such dealings, are solely between
            You and the relevant advertiser or merchant. You agree not to hold
            us liable for any loss or damage of any kind incurred as the result
            of any such dealings.
          </p>
        </div>
        <h3
          ref={ref4}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc4"
        >
          <div>4. Intellectual Property</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc4">
          <p>
            4.1 The Site is the property of CodeVue. All copyrights, trademarks,
            and all other intellectual property rights in all material or
            content supplied as part of the Site shall remain at all times
            vested in us or our licensors. You are permitted to use this
            material or content only as expressly authorized in writing by us or
            our licensors and may not and agree not to assist or facilitate any
            third party to copy, reproduce, transmit, distribute, commercially
            exploit or create derivative works of such material or content.
          </p>
          <p>
            4.2 If you become aware of any such unauthorized distribution or
            commercial exploitation, you agree to notify us immediately
          </p>
          <p>
            4.3 You acknowledge that by posting materials on the Site You grant
            to us and our licensors and assigns an irrevocable, perpetual
            royalty-free worldwide fully paid-up license to use the materials
            within the Site and in any other manner. The license extends to
            copying, distributing, broadcasting, and otherwise transmitting,
            re-formatting, adapting, and editing the materials.
          </p>
          <p>
            4.4 If you download any software from the Site, the software,
            including any images or files incorporated in or generated by the
            software, and data accompanying the software (collectively, the
            "Software") is subject to the limited license set out at 2.3 above.
            We and/or our suppliers (as the case may be) retain all rights,
            title, interest, and intellectual property rights in and to the
            Software. You may not distribute, sell, or transmit the Software and
            you are not permitted to alter, modify or adapt the Software in any
            way, including but not limited to translating, decompiling, reverse
            engineering, disassembling, or creating derivative works of it.
          </p>
        </div>
        <h3
          ref={ref5}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc5"
        >
          <div>5. Our Rights</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc5">
          <p>
            5.1 Material that is posted on any bulletin boards or chat forums is
            written by users and we are not responsible for and give no
            endorsement of such material. We monitor the contributions and may
            respond to or comment upon communications by you and edit, refuse to
            post, or remove any content from the bulletin boards and chat forums
            at our absolute discretion. No failure to remove particular material
            constitutes an endorsement or acceptance of it by us.
          </p>
          <p>
            5.2 To the extent permitted by law, We make no warranties, express
            or implied, as to the content of the Site or the accuracy, timing,
            or reliability of any information or statements contained therein,
            or statements, advice, and opinions given by Users on the bulletin
            boards and chat forums which are those of such Users only. We
            neither endorse nor shall be held responsible for the reliability or
            accuracy of the same and we are not responsible in any way for any
            injury, loss, or damage that occurs as a result of an opinion
            expressed or information provided on the CodeVue Site. If you have
            any claim arising from the actions or statements of another User,
            You agree to pursue such a claim only against that User and not
            against us.
          </p>
          <p>
            5.3 We will endeavor to provide the Site using all reasonable care.
            To the extent permitted by law, We exclude all implied warranties as
            to the quality, accuracy, or fitness for any particular purpose and
            We do not warrant that the material contained in the Site, any of
            the functions contained in the Site and the server will operate
            without interruption or delay or will be error-free, free of
            defects, viruses or bugs or is compatible with any other software or
            material.
          </p>
          <p>
            5.3 We will endeavor to provide the Site using all reasonable care.
            To the extent permitted by law, We exclude all implied warranties as
            to the quality, accuracy, or fitness for any particular purpose and
            We do not warrant that the material contained in the Site, any of
            the functions contained in the Site and the server will operate
            without interruption or delay or will be error-free, free of
            defects, viruses or bugs or is compatible with any other software or
            material.
          </p>
          <p>
            5.5 We together with our agents, affiliates, directors, employees,
            or other representatives shall not be liable in contract, tort,
            negligence, or otherwise for any loss or damage whatsoever in any
            way connected with Your use of the Site, whether direct or indirect,
            including, damage to software or hardware, loss of data, damage for
            loss of business, loss of profits, or any other consequential loss.
            Nothing in these terms or conditions shall exclude or limit our
            liability for death or personal injury resulting from the negligence
            of us, our servants, agents, or employees.
          </p>
        </div>
        <h3
          ref={ref6}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc6"
        >
          <div>6. Privacy</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc6">
          <p>
            6.1 We shall comply with applicable Indian Data Protection
            legislation from time to time in force in respect of any personal
            information relating to you gathered by us
          </p>
          <p>
            6.2 You may be asked to input various basic information about
            yourself on different pages of the Site. At each location where
            information is requested, there is a statement about the purpose for
            which that information will be used. We will not use the information
            given for any other purpose than that stated at each location.
          </p>
          <p>
            6.3 Please email us using the contact us section of the Site to
            notify us of any changes to the information you have previously
            given or if you wish to withdraw your consent to our using the User
            Information for the stated purposes or any form of promotional
            contact.
          </p>
          <p>
            6.4 You acknowledge that, as is the case with all computer networks
            linked to the Internet, We cannot absolutely guarantee and will not
            be responsible for the security or privacy of information that you
            provide us with through the Site.
          </p>
        </div>
        <h3
          ref={ref7}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc7"
        >
          <div>7. Safety</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc7">
          <p>
            We give our ongoing commitment to use all reasonable endeavors to
            ensure that you can use the Site with confidence. When using the
            Site, in particular any bulletin boards or chat forums, you should
            always take the following precautions:
          </p>
          <p>
            7.1 Keep your identity private. Do not give out Your full name,
            postal address, telephone number, e-mail address, or any other
            information (other than that specifically requested by us), that
            could help someone discover Your actual identity;
          </p>
          <p>7.2 never get together with someone you meet online;</p>
          <p>
            7.3 do not reply to any messages that are hostile, rude or
            inappropriate, or in any way make you feel uncomfortable. Instead,
            please let Us know about them immediately by emailing us using the
            feedback section of the Site.
          </p>
        </div>
        <h3
          ref={ref8}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc8"
        >
          <div>8. Indemnity</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc8">
          <p>
            You agree to indemnify us, and/or any of our affiliates and our
            agents and their officers, directors, and employees, immediately on
            demand, against all claims, liability, damages, costs, and expenses,
            including legal fees, arising out of any breach of these terms and
            conditions by you or any other liabilities arising out of your use
            of the Site.
          </p>
        </div>
        <h3
          ref={ref9}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc9"
        >
          <div>9. Termination</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc9">
          <p>
            We shall have the right to terminate immediately your use of the
            Site if we determine in our sole discretion that you have breached
            these terms and conditions or otherwise have been engaged in conduct
            which we determine in our sole discretion to be unacceptable.
          </p>
        </div>
        <h3
          ref={ref10}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc10"
        >
          <div>10. Feedback</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc10">
          <p>
            Should you wish to make any comments to us about the Site or if you
            have any questions relating to the same please do not hesitate to
            contact us.
          </p>
        </div>
        <h3
          ref={ref11}
          style={{ backgroundColor: theme.mode.privacyHeadingBackground }}
          onClick={handleToggle}
          data-val="tc11"
        >
          <div>11. General</div>
          <div data-type="right">
            <FaAngleRight className={styles.right} />
          </div>
          <div className={`${styles.left} ${styles.dis}`} data-type="left">
            <FaAngleDown />
          </div>
        </h3>
        <div className={styles.toggdiv} id="tc11">
          <p>
            11.1 If any of these terms and conditions are determined to be
            invalid or otherwise unenforceable by reason of the application of
            any law, such provisions shall be severed and deleted from these
            terms and conditions and the remainder of these terms and conditions
            shall continue to have full force and effect.
          </p>
          <p>
            11.2 The Site is controlled and operated in England. We do not make
            any representation that materials in and/or facilities or services
            offered through The Site are available for use in other locations,
            or that they comply with any legal or regulatory requirements of
            such other locations. You access this website at your own risk and
            on your own initiative and are responsible for compliance with local
            laws, to the extent that they are applicable.
          </p>
          <p>
            11.3 These Terms and Conditions are governed by Indian law and both
            you and us hereby submit to the non-exclusive jurisdiction of the
            Indian courts.
          </p>
        </div>
      </div>
      <div id={styles.foot}>
        <Footer />
      </div>
    </div>
  );
}

export default TermsAndConditions;
