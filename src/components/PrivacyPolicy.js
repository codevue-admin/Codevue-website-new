import styles from "../styles/policy.module.css";
import { useRef } from "react";
let scrollIntoView = require("scroll-into-view");
function Policy() {
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

  const allref = {
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
  };

  const handleClick = (e) => {
    console.log("clicked");
    let rf = e.target.getAttribute("data-val");
    console.log(allref[rf]);
    scrollIntoView(allref[rf].current);
  };
  return (
    <div className={styles.policy}>
      <div className={styles.section1}>
        <ul>
          <li data-val="1" onClick={handleClick}>
            1.What information do we collect about you?
          </li>
          <li data-val="2" onClick={handleClick}>
            2.How will we use your information?
          </li>
          <li data-val="3" onClick={handleClick}>
            3.cookies
          </li>
          <li data-val="4" onClick={handleClick}>
            4.Marketing
          </li>
          <li data-val="5" onClick={handleClick}>
            5.Where do we hold your information?
          </li>
          <li data-val="6" onClick={handleClick}>
            6.With whom do we share your information?
          </li>
          <li data-val="7" onClick={handleClick}>
            7.How do we keep your information secure?
          </li>
          <li data-val="8" onClick={handleClick}>
            8.Links to other sites
          </li>
          <li data-val="9" onClick={handleClick}>
            9.Your rights
          </li>
          <li data-val="10" onClick={handleClick}>
            10.Changes
          </li>
        </ul>
      </div>
      <div className={styles.section2}>
        <h1>Privacy Policy</h1>
        <p>𝒟𝑜 𝓎𝑜𝓊 𝓉𝒽𝒾𝓃𝓀 𝓌𝑒 𝓈𝓉𝑜𝓁𝑒 𝓈𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔??</p>
        <p>
          CodeVue Pvt. Ltd. ('we') are committed to protecting and respecting
          your privacy. This policy and any other documents we refer to in this
          policy set out how we will use your personal information and with whom
          it will be shared. Please read the following carefully.
        </p>
        <p>
          Please note that by visiting and using the Site you are agreeing to
          the use of your personal information in the way that is described in
          this Privacy Policy.
        </p>
        <p>
          If you have any queries or concerns regarding this Privacy Policy,
          please contact us: hello@codevue.io.
        </p>
        <p>
          Any changes we may make to our privacy policy in the future will be
          posted on this page and, where appropriate, notified to you by email.
        </p>
        <h3 ref={ref1}>1.0 What information do we collect about you?</h3>
        <p>
          We may collect and process the following data about you ('your
          information):
        </p>
        <ul>
          <li>
            information that you submit online via our site including your name,
            contact information including email address, business address, job
            title, mobile phone number, and other information relevant to
            customer surveys;
          </li>
          <li>any correspondence you send to us;</li>
          <li>
            details of your visits to the Site and the resources that you access
            (which may include, amongst other things; traffic data and
            communication data).
          </li>
        </ul>
        <p>
          We are aware that your information may be confidential and we will
          protect the confidentiality of your information in accordance with our
          normal procedures and legal requirements including GDPR.
        </p>
        <h3 ref={ref2}>2.0 How will we use your information?</h3>
        <p>
          We collect your information to understand your needs and provide you
          with a better service. We use your information in the following ways:
        </p>
        <ul>
          <li>
            to ensure that the Site's content is presented as effectively as
            possible for you and/or to customize the Site according to your
            interests;
          </li>
          <li>
            to ensure that the Site's content is presented as effectively as
            possible for you and/or to customize the Site according to your
            interests;
          </li>
          <li>to notify you about changes to our services;</li>
          <li>
            to provide you with information, products, or services that you
            request from us, or which we feel may interest you (provided of
            course that you agree);
          </li>
          <li>to create reports to assist with future marketing;</li>
          <li>to create reports to assist with future marketing;</li>
          <li>to create reports to assist with future marketing;</li>
        </ul>
        <p>
          We may monitor your use of the Site and record your IP address,
          operating system, and browser type, for system administration through
          Google Analytics. This is statistical information about our users'
          browsing actions and patterns and does not identify any individual
        </p>
        <p>
          We collect non-personal aggregated statistics data about visitors to
          the Site and sales and traffic patterns. Just to be clear, this
          information does not identify users in any personal capacity and we do
          not use this information to build profiles on individual users: it
          just contains generalized information about the users of the Site.
        </p>
        <h3 ref={ref3}>3.0 Cookies</h3>
        <p>
          3.1 We use 'cookies' to collect the information referred to below and
          track your use of the Site. A cookie is a small data file that is
          placed on your computer or other devices to allow a website to
          recognize you as a user when you return to the website using the same
          computer and web browser, either for the duration of your visit (using
          a 'session cookie') or for repeat visits (a 'persistent cookie').
          Other similar files work in the same way and we use the word 'cookie'
          in this policy to refer to all files that collect information in this
          way. Cookies are an extremely common technology for remembering
          certain information about a visitor to a website. The vast majority of
          websites currently make use of cookies and they are commonly used for
          a wide range of tasks. We use cookies for the following purposes:
        </p>
        <ul>
          <li>
            Analytical/Performance Cookies: to analyze the use of the Site by,
            for example, recognizing and counting the number of visitors and how
            they move around the Site. This helps us to see what parts of the
            site are popular and which sections need improving to make the
            experience better for users;
          </li>
          <li>
            Functionality Cookies: to recognize you when you return to the Site
            so that content can be personalized for you, for example, by
            remembering your country and site preferences; and
          </li>
          <li>
            Tracking Cookies: to record your visit to the Site and the pages you
            have visited and links you have followed. We will use this to make
            the Site more relevant to your interests.
          </li>
        </ul>
        <p>
          3.2 When you accessed the Site, you were presented with a message that
          notified you of our use of cookies. We had to use a cookie to present
          you with that notice. If you continue to use the Site, more cookies
          will be placed on your computer in order to enhance your user
          experience whilst on the Site. By continuing to use the Site and/or by
          accepting our Privacy Policy you are agreeing to the use of such
          cookies.
        </p>
        <p>
          3.2 When you accessed the Site, you were presented with a message that
          notified you of our use of cookies. We had to use a cookie to present
          you with that notice. If you continue to use the Site, more cookies
          will be placed on your computer in order to enhance your user
          experience whilst on the Site. By continuing to use the Site and/or by
          accepting our Privacy Policy you are agreeing to the use of such
          cookies.
        </p>
        <h3 ref={ref4}>4.0 Marketing</h3>
        <p>
          4.1 We do not pass on your data to third parties for marketing
          purposes. If you are an existing customer, unless you have indicated
          that you do not want to hear from us, we may contact you by email,
          SMS, or telephone with:
        </p>
        <ul>
          <li>
            information about products and services which are similar to those
            we previously provided to you;
          </li>
          <li>
            events and content or other information which we think you may find
            interesting; and
          </li>
          <li>
            from time to time, we may also use your information to contact you
            for market research purposes such as a client satisfaction survey.
          </li>
        </ul>
        <p>
          4.2 If you are a new customer, we may contact you by email or
          telephone
        </p>
        <p>
          4.3 You may ask us at any time not to use your information for
          marketing purposes by contacting us or unsubscribing to emails.
        </p>
        <h3 ref={ref5}>5.0 Where do we hold your information?</h3>
        <p>
          5.1 We hold all personal information within a central and secure CMS.
        </p>
        <p>
          5.2 Additional information relating to site usage, that cannot
          identify users is stored in Google Analytics.
        </p>
        <p>
          5.3 We will keep your information for as long as is necessary, however
          can be accessed and removed immediately at the request of a customer.
        </p>
        <h3 ref={ref6}>6.0 With whom do we share your information?</h3>
        <p>6.0 With whom do we share your information?</p>
        <ul>
          <li>
            if we sell or buy any business or assets (as we may share your data
            with the prospective seller or buyer);
          </li>
          <li>
            if we or substantially all of our company assets are acquired by
            another party, in which case your information will be one of the
            transferred assets;
          </li>
          <li>
            business partners, suppliers, sub-contractors for the performance of
            any contract we enter with them or you;
          </li>
          <li>
            if we have to share your information to comply with legal or
            regulatory requirements, or if we have to enforce any other
            agreements or to protect our rights, property, or our customers,
            etc. This may involve exchanging information with other companies
            and organizations for the purposes of fraud protection and credit
            risk reduction.
          </li>
        </ul>
        <p>
          6.2 We may share the non-personal aggregated statistics data about
          visitors to the Site with third parties.
        </p>
        <p>
          6.3 We may also share your information with selected third parties for
          the purposes of credit card clearance/credit reference/order
          fulfillment/delivery/data analysis/customer support/storage services.
        </p>
        <h3 ref={ref7}>7.0 How do we keep your information secure?</h3>
        <p>
          7.1 We are committed to ensuring that your information is secure. In
          order to prevent unauthorized access or disclosure, we have put in
          place suitable physical, electronic, and managerial procedures to
          safeguard and secure the information we collect online. All your
          information is stored securely on hosted servers. Any actions you
          perform on the site which are related to your account will be
          encrypted.
        </p>
        <p>
          7.2 Unfortunately, the transmission of information via the internet is
          not completely secure. Although we will apply our normal procedures
          and comply with legal requirements to protect your information, we
          cannot guarantee the security of your information transmitted to the
          Site and any transmission is at your own risk. Once we have received
          your information, we will use strict procedures and security features
          to prevent unauthorized access.
        </p>
        <h3 ref={ref8}>8.0 Links to other sites</h3>
        <p>
          8.1 The Site may from time to time contain links to and from other
          websites. If you follow a link to any of those sites, please note that
          those sites ought to have their own privacy policies and that we do
          not accept any responsibility or liability for those sites or for
          their privacy policies. Please check those privacy policies before you
          submit your information to those sites.
        </p>
        <h3 ref={ref9}>9.0 Your rights</h3>
        <p>
          9.1 Under the Data Protection Act and GDPR you have the right to see
          the personal information that we hold about you, whether collected
          through your use of the Site or through any communications that you
          have had with us. You have the right to access your information and
          should direct any request for your information to us here.
        </p>
        <p>
          9.2 If you believe that any information we are holding about you is
          incorrect or incomplete you have the right to rectify your information
          by sending us a written request to us here.
        </p>
        <p>
          9.3 You have the right to ask us not to process your information (or
          pass your information to other companies or organizations) for
          marketing purposes. You can request this by contacting us here.
        </p>
        <p>
          9.4 If you have a complaint about how we have used your information,
          you have the right to complain to the Information Commissioner's
          Office.
        </p>
        <h3 ref={ref10}>10.0 Changes</h3>
        <p>
          10.1 We may make changes to this Privacy Policy at any time by sending
          you an email with the modified terms or by posting a copy of them on
          the Site. Any changes will take effect seven (7) days after the date
          of our email or the date on which we post the modified terms on the
          Site, whichever is the earlier. Your continued use of the Site after
          that period expires means that you agree to be bound by the modified
          policy.
        </p>
      </div>
    </div>
  );
}

export default Policy;
