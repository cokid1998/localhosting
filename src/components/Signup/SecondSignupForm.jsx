import { useState } from "react";
import styles from "@/styles/auth/Signup.module.css";

function SecondSignupForm({ userInfo, dispatch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [customDomain, setCustomDomain] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(null);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(userInfo.password, e.target.value);
  };

  const checkPasswordMatch = (pass, confirmPass) => {
    if (confirmPass.length > 0) {
      setMatchPassword(pass === confirmPass);
    } else {
      setMatchPassword(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "SET_FIELD",
      field: name,
      value,
    });
  };

  return (
    <div className={styles.container}>
      {/* 회원가입 폼 */}
      <div className={styles.formContainer}>
        <form className={styles.singupForm}>
          <div className={styles.groupForm}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해 주세요!"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.groupForm}>
            <label htmlFor="email">이메일 주소</label>
            <div className={styles.inputEmailGroup}>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                value={userInfo.email}
                onChange={handleChange}
              />
              <span>@</span>
              {customDomain ? (
                <input
                  type="text"
                  name="domain"
                  placeholder="직접 입력"
                  value={domain}
                  onChange={handleChange}
                />
              ) : (
                <select
                  value={userInfo.domain}
                  name="domain"
                  onChange={handleChange}
                  className={styles.domainSelect}
                >
                  <option value="" disabled>
                    선택
                  </option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="kakao.com">kakao.com</option>
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
              name="password"
              placeholder="비밀번호를 설정해 주세요!"
              value={userInfo.password}
              onChange={handleChange}
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
            />
          </div>
        </form>
      </div>

      <div className={styles.pwMsg}>
        {matchPassword === true && (
          <p className={styles.match}>알맞은 비밀번호 입니다!</p>
        )}
        {matchPassword === false && (
          <p className={styles.mismatch}>다시 한번 입력해 주세요!</p>
        )}
      </div>
    </div>
  );
}

export default SecondSignupForm;
