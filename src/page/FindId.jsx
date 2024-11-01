import styles from "@/components/Layout/FindId.module.css";
import { ChevronLeft } from "lucide-react/";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function FindId() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>아이디 찾기</h1>
        <p className={styles.description}>이메일 주소로 인증 번호를 보내드릴게요.</p>
        <div className={styles.inputGroup}> 
          <input type="email" placeholder="이메일 주소 입력" className={styles.input} />
          <button className={styles.sendCodeButton}>인증번호 전송</button>
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="인증 번호 입력" className={styles.input} />
          <button className={styles.verifyButton}>확인</button>
        </div>
        <Link to='/find-id-result' className={styles.findIDButton}>아이디 찾기</Link>
      </div>
    </div>
  );
}

export default FindId;
