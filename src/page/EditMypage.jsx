import styles from "@/styles/EditMypage.module.css";
import { useState } from "react";

function EditMypage() {
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (confirmPassword && e.target.value === confirmPassword) {
      setMessage("알맞은 비밀번호입니다!");
    } else {
      setMessage("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (newPassword && e.target.value === newPassword) {
      setMessage("알맞은 비밀번호입니다!");
    } else {
      setMessage("다시 한번 입력해 주세요");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>프로필 수정</h1>

      <div className={styles.inputGroup}>
        <label className={styles.label}>이름</label>
        <input
          type="text"
          placeholder="이름을 입력해 주세요!"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>기존 비밀번호 확인</label>
        <input
          type="password"
          placeholder="기존 비밀번호를 입력해 주세요!"
          className={styles.input}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>새로운 비밀번호</label>
        <input
          type="password"
          placeholder="새로운 비밀번호를 입력해 주세요!"
          className={styles.input}
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>새로운 비밀번호 확인</label>
        <input
          type="password"
          placeholder="다시 한번 입력해 주세요!"
          className={styles.input}
          value={confirmPassword}
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

      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton}>취소</button>
        <button className={styles.saveButton}>저장</button>
      </div>
    </div>
  );
}

export default EditMypage;
