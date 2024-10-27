// Define a type for the projects object
type Projects = {
  gmail: { image: string };
  flipkart: { image: string };
  google: { image: string };
  indeed: { image: string };
  crud: { image: string };
};

import { headerItems } from "@/constants/constant";
import Image from "next/image";
import { projects } from "@/constants/constant";
import styles from "@/Projects.module.css";

const Projects: React.FC = () => {
  return (
    <section id={headerItems.projects.page} className={styles.section}>
      <h1 className={styles.title}>Projects</h1>

      <div className={styles.imageContainer}>
        {Object.keys(projects).map((project) => (
          <Image
            key={project}
            src={projects[project as keyof Projects].image}
            alt=""
            width={300}
            height={300}
            className={styles.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
