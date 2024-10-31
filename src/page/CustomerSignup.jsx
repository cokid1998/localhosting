import React, { useState } from "react";
import styles from "@/components/Layout/CustomerSignup.module.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function ThreeDot() {
  return (
    <>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </>
  );
}

function CustomerSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [customDomain, setCustomDomain] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(null);
  const [currentStep, setCurrentStep] = useState(2); // 단계 관리
  const [selectedType, setSelectedType] = useState("customer"); // 선택된 타입 관리

  const handleDomainChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setDomain("");
      setCustomDomain(true);
    } else {
      setDomain(value);
      setCustomDomain(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(password, e.target.value);
  };

  const checkPasswordMatch = (pass, confirmPass) => {
    if (confirmPass.length > 0) {
      setMatchPassword(pass === confirmPass);
    } else {
      setMatchPassword(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("회원 정보: ", { name, email, domain, password });
  };

  const handleNext = () => {
    if (selectedType === "customer" && currentStep < 2) {
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
        <div className={styles.step}>1</div>
        <ThreeDot />
        <div
          className={`${styles.step} ${currentStep === 2 ? styles.active : ""}`}
          onClick={() => setCurrentStep(2)}
        >
          2
        </div>
      </div>

      <div className={styles.enterMsg}>회원 정보 입력</div>

      <div className={styles.secretMsg}>
        입력하신 정보는 저희만 알고 있을게요 :)
      </div>

      {/* 회원가입 폼 */}
      <div className={styles.container}>
        <form className={styles.singupForm} onSubmit={handleSubmit}>
          <div className={styles.groupForm}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력해 주세요!"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="email">이메일 주소</label>
            <div className={styles.inputEmailGroup}>
              <input
                type="text"
                id="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>@</span>
              {customDomain ? (
                <input
                  type="text"
                  placeholder="선택"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                />
              ) : (
                <select
                  value={domain}
                  onChange={handleDomainChange}
                  className={styles.domainSelect}
                  required
                >
                  <option value="" disabled>
                    선택
                  </option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="custom">직접 입력</option>
                </select>
              )}
            </div>
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 설정해 주세요!"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="다시 한번 입력해 주세요"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className={styles.pwMsg}>
            {matchPassword === true && (
              <p className={styles.match}>알맞은 비밀번호 입니다!</p>
            )}
            {matchPassword === false && (
              <p className={styles.mismatch}>다시 한번 입력해 주세요!</p>
            )}
          </div>
        </form>
      </div>

      <div className={styles.buttons}>
        <button className={styles.beforeBtn} onClick={() => setCurrentStep(1)}>
          이전
        </button>
        <button className={styles.nextBtn} onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
}

export default CustomerSignup;
