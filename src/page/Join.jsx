import React from "react";
import styles from "@/components/Layout/Join.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

function ThreeDot() {
  return (
    <>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </>
  );
}

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
        {/* <ThreeDot/> */}
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

// 8번째 줄 Router함수 지워주세요

// Join으로된 파일들 이름 Signup으로 바꿔주세요(Join.jsx, Join.module.css, App.jsx파일에서도 /join이 아니라 /signup으로 바꾸세요) 회원가입관련 파일들의 이름은 Signup이 많이쓰입니다.

// 다음버튼은 div태그가아니라 button태그를 사용하세요. (동작은 똑같지만 button이라는 명확한 태그를 사용하는게 좋습니다.)

// 태그안에 내용이없다면 바로 닫아도 됩니다. <div></div> == <div/> Dog태그 모두 이렇게 바꾸세요

// Step이 1이 아닐 때는 이전 버튼도 나오게 만들어보세요 아직 디자인이 안된거 같지만 있어야하는 기능이에요. 일단 디자인은 신경쓰지말고 만들어보세요

// 지금 <div className={styles.dot}></div>코드가 중복됩니다. 간단한 컴포넌트는 파일안에 다른 컴포넌트를 만들어서 처리해도됩니다.
// 제가 ThreeDot이라는 컴포넌트를 만들어서 사용하는 코드를 잘 살펴보시고 71줄 주석 풀어보세요
