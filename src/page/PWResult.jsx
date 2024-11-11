import styles from "@/components/Layout/PWResult.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

function PWResult() {
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [message, setMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPW(e.target.value);

    if (e.target.value === password) {
      setMessage("알맞은 비밀번호입니다!");
    } else {
      setMessage("다시 한번 입력해 주세요");
    }
  };

  const handleResetClick = () => {
    if (password && confirmPW && password === confirmPW) {
      setIsPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/find-password">
          <ChevronLeft className={styles.backIcon} />
        </Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>비밀번호 재설정</h1>
        <p className={styles.description}>
          보안을 위해 비밀번호를 재설정해 주세요.
        </p>

        <div className={styles.inputGroup}>
          <label className={styles.label}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 설정해 주세요"
            className={styles.input}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>비밀번호 확인</label>
          <input
            type="password"
            placeholder="다시 한번 입력해 주세요"
            className={styles.input}
            value={confirmPW}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        {message && (
          <p
            className={
              message === "알맞은 비밀번호입니다!"
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {message}
          </p>
        )}

        <button className={styles.resetButton} onClick={handleResetClick}>
          변경
        </button>

        {isPopupVisible && (
          <div className={styles.popupOverlay}>
            <div className={styles.popup}>
              <p>변경이 완료되었습니다.</p>
              <p>보안을 위해 재로그인을 진행해 주세요!</p>
              <Link
                to="/Login"
                className={styles.popupButton}
                onClick={handleClosePopup}
              >
                로그인하기
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PWResult;

/*
  1. isPopupVisible에 따라 보여지는 UI는 사실 정확히말하면 popup이 아니라 modal입니다.
      그냥 알아만 두시고 코드는 굳이 안바꿔도 됩니다.

  2. error메세지 위치 위에 Input이랑 똑같이 맞춰주세요
*/
