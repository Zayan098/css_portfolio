'use client';
import { useState } from 'react';
import { userInfo, headerItems } from '@/constants/constant';
import { NavItems } from '@/models/Header';
import { BiMenu } from 'react-icons/bi';
import styles from '@/Header.module.css';

const Header: React.FC = () => {
  const [navItem, showNavItems] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div id="navbar" >
        <h2 className={styles.title}>{userInfo.name}</h2>
        <BiMenu
          size={30}
          className={styles.menuIcon}
          onClick={() => showNavItems((prevState) => !prevState)}
        />
      </div>
      <div
        className={`${styles.navContainer} ${navItem ? styles.active : ''}`}
      >
        {Object.keys(headerItems).map((item) => (
          <a
            key={headerItems[item as keyof NavItems].label}
            className={styles.navItem}
            href={`#${headerItems[item as keyof NavItems].page}`}
          >
            {headerItems[item as keyof NavItems].label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
