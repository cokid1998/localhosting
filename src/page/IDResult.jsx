import styles from "@/components/Layout/IDResult.module.css";
import { Link } from "react-router-dom";

function IDResult() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>아이디 찾기 완료!</h1>
      <p className={styles.subtitle}>회원님의 아이디는</p>
      <div className={styles.idBox}>abc123</div>
      <p className={styles.subtitle}>입니다</p>
      <Link to="/Login" className={styles.loginButton}>
        로그인하기
      </Link>
      <Link to="/find-password" className={styles.findPWButton}>
        비밀번호 찾기
      </Link>
    </div>
  );
}

export default IDResult;

/*
  화면크기를 줄여서 페이지 확인 해보시고 디자인 다시해주세요
*/
