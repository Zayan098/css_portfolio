import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import styles from "@/About.module.css"

const About: React.FC = () => {
  return (
    <section
      id={headerItems.about.page}
      className={`${styles.section} md:${styles.sectionRow}`}
    >
      <div className={`${styles.container} sm:ml-12 md:${styles.containerMd}`}>
        <h1 className={styles.title}>About</h1>
        <h2 className={styles.subtitle}>Get to know me!</h2>
        <p
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: userInfo.about }}
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={userInfo.picture}
          alt="dp"
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={styles.skillsContainer}>
          {userInfo.skills.map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
