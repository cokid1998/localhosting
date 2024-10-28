import React from "react";
import styles from "@/components/Layout/Signup.module.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import customerImage from "@/components/img/고객님.png";
import ownerImage from "@/components/img/사장님.png";

function ThreeDot() {
  return (
    <>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </>
  );
}

// 파일안에서 컴포넌트를 만드실 때에는 밖으로 빼서 만드세요.
// 컴포넌트안에서 컴포넌트를 만들면 가독성과 성능면에서 좋지않습니다.
// 만약 UserCard가 Signup안에 있다면 Signup컴포넌트가 리렌더:링돼서 Signup함수가 실행될 때 마다 UserCard 또한 다시 재생성합니다.
// 46,48번째에 예시로 콘솔 넣어놨으니 리렌더링을 유발시켜 보고 결과를 확인해보세요
// 이해가 안가시면 저한테 나중에 말하세요. 다시 설명해드릴께요
const UserCard = ({ type, title, description, image, onClick, selected }) => {
  return (
    /* 이거도 버튼이라고 볼 수 있을꺼 같아서 button태그로 바꿨어요 */
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

// Step이 1이 아닐 때는 이전 버튼도 나오게 만들어보세요 아직 디자인이 안된거 같지만 있어야하는 기능이에요. 일단 디자인은 신경쓰지말고 만들어보세요
