import styles from "@/styles/auth/Signup.module.css";
import { useNavigate } from "react-router-dom";

function SuccessSignupForm() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className={styles.signupContainer}>
        <div className={styles.successMsg}>회원가입 성공!</div>
        <div className={styles.successMsg}>환영합니다</div>
        <button className={styles.loginBtn} onClick={handleLoginClick}>
          로그인 하기
        </button>
      </div>
    </>
  );
}
export default SuccessSignupForm;
