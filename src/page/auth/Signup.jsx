import styles from "@/styles/auth/Signup.module.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState, useReducer, useEffect } from "react";
import customerImage from "@/components/img/고객님.png";
import ownerImage from "@/components/img/사장님.png";
import SecondSignupForm from "@/components/Signup/SecondSignupForm.jsx";
import ThirdSignupForm from "@/components/Signup/ThirdSignupForm.jsx";
import SuccessSignupForm from "@/components/Signup/SuccessSignupForm.jsx";
import { signUpAPI } from "@/api/authAPI";

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

const customerInit = {
  name: "",
  email: "",
  password: "",
  nickName: "",
  username: "",
  domain: "",
  businessNumber: "string1",
  bankAccount: "string2",
  openingDate: "2024-11-29",
  bName: "string4",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      if (action.field === "name") {
        return {
          ...state,
          [action.field]: action.value,
          nickName: action.value,
        };
      } else if (action.field === "email") {
        return {
          ...state,
          [action.field]: action.value,
          username: action.value,
        };
      }
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SELECT_EMAIL_DOMAIN": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "RESET":
      return action.payload;
  }
};

function Signup() {
  const [selectedType, setSelectedType] = useState(null); //타입 관리
  const [currentStep, setCurrentStep] = useState(1); //단계 관리
  const [userInfo, dispatch] = useReducer(reducer, customerInit);

  useEffect(() => {
    dispatch({
      type: "RESET",
      payload: customerInit,
    });
  }, [selectedType]);

  const handleSelection = (type) => {
    setSelectedType(type);
  };

  const handleNext = () => {
    if (selectedType === "customer" && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (selectedType === "owner" && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      ...userInfo,
      email: `${userInfo.email}@${userInfo.domain}`,
    };
    delete payload.domain;

    setCurrentStep(currentStep + 1);
    await signUpAPI(payload);
  };

  const buttonHandler = () => {
    if (
      (selectedType === "customer" && currentStep === 2) ||
      (selectedType === "owner" && currentStep === 3)
    ) {
      return handleSubmit;
    }

    return handleNext;
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.container}>
      {!(
        (selectedType === "customer" && currentStep >= 3) ||
        (selectedType === "owner" && currentStep >= 4)
      ) && (
        //네비바
        <div className={styles.navbar}>
          <Link to="/login">
            <ChevronLeft size={24} color="black" />
          </Link>
          <div className={styles.title}>회원가입</div>
        </div>
      )}
      {!(
        (selectedType === "customer" && currentStep >= 3) ||
        (selectedType === "owner" && currentStep >= 4)
      ) && (
        // 단계
        <div className={styles.stepLevel}>
          <div
            className={`${styles.step} ${
              currentStep === 1 ? styles.active : ""
            }`}
          >
            1
          </div>
          <ThreeDot />
          <div
            className={`${styles.step} ${
              currentStep === 2 ? styles.active : ""
            }`}
            onClick={() => setCurrentStep(2)}
          >
            2
          </div>
          {selectedType === "owner" && (
            <>
              <ThreeDot />
              <div
                className={`${styles.step} ${
                  currentStep === 3 ? styles.active : ""
                }`}
                onClick={() => setCurrentStep(3)}
              >
                3
              </div>
            </>
          )}
        </div>
      )}

      {/* 단계별 화면 */}
      {currentStep === 1 && (
        <>
          {/* 메세지 */}
          <div className={styles.chooseMsg}>회원 타입을 선택해 주세요</div>
          {/* 유저 타입 선택 */}
          <div className={styles.UserSelection}>
            <UserCard
              type="고객님"
              title="일반 회원"
              description="구독권 구매를 원하시는"
              image={customerImage}
              onClick={() => handleSelection("customer")}
              selected={selectedType === "customer"}
            />
            <UserCard
              type="사장님"
              title="사장님 회원"
              description="카페를 운영 중이신"
              image={ownerImage}
              onClick={() => handleSelection("owner")}
              selected={selectedType === "owner"}
            />
          </div>
        </>
      )}

      {currentStep === 2 && selectedType === "customer" && (
        <>
          <div className={styles.enterMsg}>회원 정보 입력</div>
          <div className={styles.secretMsg}>
            입력하신 정보는 저희만 알고 있을게요 :)
          </div>
          <SecondSignupForm userInfo={userInfo} dispatch={dispatch} />
        </>
      )}

      {currentStep === 2 && selectedType === "owner" && (
        <>
          <div className={styles.enterMsg}>회원 정보 입력</div>
          <div className={styles.secretMsg}>
            입력하신 정보는 저희만 알고 있을게요 :)
          </div>
          <SecondSignupForm userInfo={userInfo} dispatch={dispatch} />
        </>
      )}

      {currentStep === 3 && selectedType === "customer" && (
        <>
          <SuccessSignupForm />
        </>
      )}

      {currentStep === 3 && selectedType === "owner" && (
        <>
          <div className={styles.enterMsg}>가게 정보 입력</div>
          <div className={styles.secretMsg}>이제 마지막 단계입니다!</div>
          <ThirdSignupForm />
        </>
      )}

      {currentStep === 4 && selectedType === "owner" && (
        <>
          <SuccessSignupForm />
        </>
      )}

      {!(
        (selectedType === "customer" && currentStep >= 3) ||
        (selectedType === "owner" && currentStep >= 4)
      ) && (
        //이동 버튼
        <>
          <div className={styles.buttons}>
            {currentStep !== 1 && (
              <button className={styles.prevBtn} onClick={handleBack}>
                이전
              </button>
            )}
            <button
              onClick={buttonHandler()}
              className={
                currentStep === 1 ? styles.firstNextBtn : styles.nextBtn
              }
            >
              다음
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Signup;
