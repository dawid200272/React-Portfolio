import emailIcon from "../assets/contact/emailIcon.png";
import githubIcon from "../assets/contact/githubIcon.png";
import linkedinIcon from "../assets/contact/linkedinIcon.png";
import styles from "../scss/components/Contact.module.scss";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:s59073@student.ubb.edu.pl">
            s59073@student.ubb.edu.pl
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/dawid200272">github.com/dawid200272</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/dawid-machaj-466aa8273/">
            linkedin.com/in/dawid-machaj-466aa8273/
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
