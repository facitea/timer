"use client"; // 클라이언트 컴포넌트 선언

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}


