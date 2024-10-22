import React from "react";
import styles from "@/components/Layout/Join.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function Join() {
  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>회원가입</div>
      </div>
    </div>
  );
}

export default Join;
