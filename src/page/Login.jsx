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
// ⮑ 피그마에서 이미지를 다운받고, src/assets/image안에 해당 이미지를 옮겨주세요.
// 해당 경로에 이미지를 import해서 사용합니다.
// react에서 img를 사용하는 방법은 인터넷에 레퍼런스가 많습니다.
// how to use image in react 키워드로 검색해보세요

// 로그인 옵션 옆 아이콘 배치
// ⮑ 커피아이콘은 lucide-icon이라는 라이브러리를 사용합니다. https://lucide.dev/ 홈페이지 들어가서 사용법 보고 사용해보세요

//-----------------------//
// Router함수와 사용하지 않는 import문 다 지우세요

// "어서오세요" margin-bottom 10px로 바꾸세요. 피그마에서 확인가능합니다.
// "좋아하는 카페를 구독해 보세요." margin-bottom 15px로 바꾸세요.

// input에 값을 넣으면 회색으로 나오는데 검은색으로 나오도록 바꾸세요.
// 대신 "아이디를 입력해 주세요", "비밀번호를 입력해 주세요"는 지금처럼 회색으로 유지해주세요.

// input태그의 왼쪽 padding을 피그마와 같게 해주세요.

// 사용자가 아이디와 패스워드를 입력하고 로그인 버튼을 누르면 입력한 아이디와 패스워드가 콘솔창에 나타나도록 만들어보세요
