// import React from "react";
import styles from "@/components/Layout/Login.module.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function LoginPage() {
  // const Router = () => {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Main />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>어서오세요!</h1>
        <p className={styles.description}>좋아하는 카페를 구독해 보세요.</p>
        <div className={styles.loginImage}>
          <img src="" alt="커피 구독 일러스트레이션" />
        </div>
        <div className={styles.loginOptions}>
          <button className={styles.loginOption}>일반 회원 로그인</button>
          <button className={styles.loginOption}>사장님 로그인</button>
        </div>
        <input
          type="text"
          placeholder="아이디를 입력해 주세요"
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          className={styles.loginInput}
        />
        <button className={styles.loginButton}>로그인</button>
        <div className={styles.loginLinks}>
          <a href="#">아이디 찾기</a>
          <a href="#">패스워드 찾기</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// 피그마에 있는 이미지 배치 방법
// 로그인 옵션 옆 아이콘 배치
