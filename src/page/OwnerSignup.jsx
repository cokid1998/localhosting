import React from "react";
import styles from "@/components/Layout/OwnerSignup.module.css";
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

const UserCard = ({ type, title, description, image, onClick, selected }) => {
  return (
    <button className={styles.cardContainer} onClick={onClick}>
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
    </button>
  );
};
console.log("outer");
function Signup() {
  console.log("inner");
  const [selectedType, setSelectedType] = useState(null); //타입 관리
  const [currentStep, setCurrentStep] = useState(1); //단계 관리
  const steps = [1, 2, 3];

  const handleSelection = (type) => {
    setSelectedType(type);
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (selectedType === "customer" && currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (selectedType === "owner" && currentStep < 3) {
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
        <ThreeDot />
        <div
          className={`${styles.step} ${currentStep >= 2 ? styles.active : ""}`}
          onClick={() => setCurrentStep(2)}
        >
          2
        </div>
        {selectedType === "owner" && (
          <>
            <ThreeDot />
            <div
              className={`${styles.step} ${
                currentStep >= 3 ? styles.active : ""
              }`}
              onClick={() => setCurrentStep(3)}
            >
              3
            </div>
          </>
        )}
      </div>
      <div className={styles.chooseMsg}>회원타입을 선택해주세요</div>
      <div className={styles.UserSelection}>
        <UserCard
          type="고객님"
          title="일반 회원"
          description="구독권을 구매를 원하시는"
          image={customerImage}
          onClick={() => handleSelection("customer")}
          selected={selectedType === "customer"}
        />
        <UserCard
          type="사장님"
          title="사장님 회원"
          description="카페를 운영중이신"
          image={ownerImage}
          onClick={() => handleSelection("owner")}
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

/*
  2024.11.01
  아직 이 페이지는 디자인을 안하신건가요?
*/
