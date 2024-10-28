import React from "react";
import styles from "@/components/Layout/Signup.module.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

function ThreeDot() {
  return (
    <>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </>
  );
}

function Signup() {
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

  const UserCard = ({ type, title, description, image, onClick, selected }) => {
    return (
      <div className={styles.cardContainer} onClick={onClick}>
        <div
          className={`${styles.cardHeader} ${
            selected ? styles.headerSelected : ""
          }`}
        >
          {title}
        </div>
        <div
          className={`${styles.cardContent} ${selected ? styles.selected : ""}`}
        >
          <img src={image} className={styles.cardImage} />
          <div className={styles.cardText}>
            <p className={styles.cardTextDescription}>{description}</p>
            <p className={styles.cardTextType}>{type}</p>
          </div>
        </div>
      </div>
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

      <div className={styles.stepLevel}>
        <div
          className={`${styles.step} ${currentStep >= 1 ? styles.active : ""}`}
          onClick={() => setCurrentStep(1)}
        >
          1
        </div>
        <ThreeDot />
        <div
          className={`${styles.step} ${currentStep >= 2 ? styles.active : ""}`}
          onClick={() => setCurrentStep(2)}
        >
          2
        </div>
        <ThreeDot />
        <div
          className={`${styles.step} ${currentStep >= 3 ? styles.active : ""}`}
          onClick={() => setCurrentStep(3)}
        >
          3
        </div>
      </div>
      <div className={styles.chooseMsg}>회원타입을 선택해주세요</div>
      <div className={styles.UserSelection}>
        <UserCard
          type="고객님"
          title="일반 회원"
          description="구독권을 구매를 원하시는"
          image="https://image.newsis.com/2023/07/12/NISI20230712_0001313626_web.jpg?rnd=20230712163021"
          onClick={() => setSelectedType("customer")}
          selected={selectedType === "customer"}
        />
        <UserCard
          type="사장님"
          title="사장님 회원"
          description="카페를 운영중이신"
          image="https://image.newsis.com/2023/07/12/NISI20230712_0001313626_web.jpg?rnd=20230712163021"
          onClick={() => setSelectedType("owner")}
          selected={selectedType === "owner"}
        />
      </div>
      <button className={styles.nextBtn} onClick={handleNext}>
        다음
      </button>
    </div>
  );
}

export default Signup;

// 태그안에 내용이없다면 바로 닫아도 됩니다. <div></div> == <div/> Dog태그 모두 이렇게 바꾸세요

// Step이 1이 아닐 때는 이전 버튼도 나오게 만들어보세요 아직 디자인이 안된거 같지만 있어야하는 기능이에요. 일단 디자인은 신경쓰지말고 만들어보세요
