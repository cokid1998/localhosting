import React from "react";
import styles from "@/components/Layout/Join.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

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

  const [selectedType, setSelectedType] = useState(null); //타입 관리
  const [currentStep, setCurrentStep] = useState(1); //단계 관리
  const steps = [1, 2, 3];

  const handleSelection = (type) => {
    setSelectedType(type);
    setCurrentStep(type === "customer" ? 2 : 3);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>회원가입</div>
      </div>

      <div className={styles.stepLevel}>
        <div
          className={`${styles.step} ${currentStep >= 1 ? styles.active : ""}`}
          onClick={() => setCurrentStep(1)}
        >
          1
        </div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div
          className={`${styles.step} ${currentStep >= 2 ? styles.active : ""}`}
          onClick={() => setCurrentStep(2)}
        >
          2
        </div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div
          className={`${styles.step} ${currentStep >= 3 ? styles.active : ""}`}
          onClick={() => setCurrentStep(3)}
        >
          3
        </div>
      </div>
      <div className={styles.chooseMsg}>회원타입을 선택해주세요</div>
      <div className={styles.nextBtn} onClick={handleNext}>
        다음
      </div>
    </div>
  );
}

export default Join;
