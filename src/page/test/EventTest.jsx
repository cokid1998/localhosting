import styles from "@/page/test/EventTest.module.css";

// http://localhost:5173/event 들어가보세요

function EventTest() {
  function 첫번째div_onClick이벤트함수() {
    window.alert("짠");
    // 이 영역에 div를 클릭했을 때 나오게 하고싶은 action을 적용해보세요
    // ex) console.log("hello world"); 개발자 도구에 hello world 글자가 찍힘
  }
  function 두번째input_onClick이벤트함수(e) {
    console.log(e.target.value);
    // 개발자 도구를 열어서 input태그에 글자를 타이핑해보세요
    // 여기서 파라미터로 받는 e는 뭘까요?
    // 📚숙제에요.. 알아오세요
    // 힌트는 커밋제목입니다.
  }

  // 자바스크립트에서는 함수를 만드는 방법이 3가지가 있습니다.
  // 그 중 화살표함수가 있는데요. 요즘에는 거의 화살표함수를 많이 사용합니다.
  // 위에 이벤트 함수 2개 화살표함수로 바꿔보세요
  // 숙제입니다..

  return (
    <div className={styles.container}>
      <div className={styles.firstDiv} onClick={첫번째div_onClick이벤트함수}>
        클릭해보세요
      </div>
      <input onChange={(e) => 두번째input_onClick이벤트함수(e)} />
    </div>
  );
}

export default EventTest;
