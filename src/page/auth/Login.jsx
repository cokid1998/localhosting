import styles from "@/styles/auth/Login.module.css";
import coffeeIcon from "@/assets/image/Login/coffeeIcon.png";
import { Coffee } from "lucide-react/";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeOption, setActiveOption] = useState(null);
  // "null"이 아니라 null입니다.
  // c언어에서요 NULL과 "NULL"은 다르잖아요 ㅎㅎ

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleLogin = () => {
    console.log("ID: ", username);
    console.log("PassWord: ", password);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>어서오세요!</h1>
        <p className={styles.description}>좋아하는 카페를 구독해 보세요.</p>
        <img
          src={coffeeIcon}
          alt="커피 구독 일러스트레이션"
          className={styles.image}
        />
        <div className={styles.loginOptions}>
          <button
            className={styles.loginOption}
            onClick={() => handleOptionClick("general")}
          >
            <Coffee
              className={
                activeOption === "general"
                  ? styles.iconActive
                  : styles.iconInactive
              }
            />{" "}
            일반 회원 로그인
          </button>
          <button
            className={styles.loginOption}
            onClick={() => handleOptionClick("business")}
          >
            <Coffee
              className={
                activeOption === "business"
                  ? styles.iconActive
                  : styles.iconInactive
              }
            />{" "}
            사장님 로그인
          </button>
        </div>
        <input
          type="text"
          placeholder="아이디를 입력해 주세요"
          className={styles.loginInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          className={styles.loginInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} onClick={handleLogin}>
          로그인
        </button>
        <div className={styles.loginLinks}>
          <Link to="/Find-id">아이디 찾기</Link>
          <Link to="/Find-password">패스워드 찾기</Link>
          <Link to="/Signup">회원가입</Link>
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

/*
  2024.10.28

  1. 이미지 관련 이슈
    이미지를 svg가 아닌 png로 다운로드해서 넣어주세요.
    svg는 단순한 형태의 아이콘을 넣을 때 사용됩니다.
    지금처럼 복잡한 형태의 이미지는 평범한 image파일로 넣습니다. (ex png, jpg등)
    svg파일은 이미지를 코드형태로 만든 파일이기 때문에 복잡한 형태의 이미지를 svg로 처리하면 성능을 저하시킵니다. (ex 로딩속도)

    원래는 하선님이 import하신 방법대로 svg를 넣어도 됐었습니다.
    저희가 사용하는 Vite라는 프로젝트 생성툴은 방법이 다른거 같더라구요.
    아래처럼 import를 수정해보세요.
    import coffeeIcon from "@/assets/svg/Login/coffeeIcon.svg?url";
    저도 처음보는 에러라서 이유를 찾아보니 img태그의 src는 에셋의 url이 들어가야하는데
    Vite는 하선님이 import하신 방법으로 하면 url이 아니라 객체형식으로 svg파일을 가져오는거같습니다.
    관련 글 링크 드릴께요. 한번 읽어보세요
    https://ko.vite.dev/guide/assets.html#explicit-url-imports

  2. 아이콘 조건부 스타일링
  지금도 구현을 잘해주셨지만 몇가지 개선해야할 점이 있습니다.

  - 스타일링을 위한 상태값을 2개가 아니라 1개로 처리할 수 있음
    ⮑  현재 스타일링을 위해서 상태값을 2개 사용하고 있습니다.
        이런경우 관련된 이벤트함수도 여러개 만들어줘야하고 장기적으로 코드 유지/보수를 어렵게 만듭니다.
        상태값을 1개로 줄여주세요 
  😉Hint: 상태값은 색이 아니라 현재 사용자가 뭘 클릭한 상태인지를 나타내는 상태값으로 만들어보세요
  ▶️ 네!! 감사합니당

  - css와 관련된 코드는 최대한 분산되지 않게
    ⮑  현재 <Coffee />라는 컴포넌트에 css를 입히는 곳은 className과 style입니다.
        css는 최대한 한곳에서 적용시키고 한곳에서 관리하는게 좋습니다.
        style을 쓰지말고 구현해보세요
  😉Hint: css파일에 클릭했을 때/클릭 안 했을 때 class를 각각 만들고 삼항연산자를 사용해보세요.
  ▶️ 바꿔 봤습니다!
*/
