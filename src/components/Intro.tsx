import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import styles from "@/Intro.module.css";

const Intro: React.FC = () => {
  return (
    <section id={headerItems.home.page} className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src={userInfo.picture}
          alt="dp"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.mainTitle}>Software Developer</h1>
        <h1 className={styles.subtitle}>
          Hi, I&#39;m{" "}
          <span className={styles.nameHighlight}>{userInfo.name}</span>
        </h1>
        <p
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: userInfo.heading }}
        />
        <button className={styles.button}>Projects</button>
      </div>
    </section>
  );
};

export default Intro;
