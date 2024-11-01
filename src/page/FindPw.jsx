import styles from "@/components/Layout/FindPw.module.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function FindPw() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/Login">
          <ChevronLeft className={styles.backIcon}/>
        </Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>비밀번호 찾기</h1>
        <p className={styles.description}>
          이메일 주소로 인증 번호를 보내 드릴게요.
        </p>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="이메일 주소 입력"
            className={styles.input}
          />
          <button className={styles.sendCodeButton}>인증번호 전송</button>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="인증 번호 입력"
            className={styles.input}
          />
          <button className={styles.verifyButton}>확인</button>
        </div>
        <Link to="/find-pw-result" className={styles.findPWButton}>
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}

export default FindPw;
