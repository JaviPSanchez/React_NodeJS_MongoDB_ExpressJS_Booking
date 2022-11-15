import styles from "../styles/Global";

const MailList = () => {
  return (
    <div className={styles.mail}>
      <h1 className="text-3xl font-bold">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className={styles.mailInputContainer}>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
