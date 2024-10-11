import styles from "@/page/test/EventTest.module.css";

// http://localhost:5173/event 들어가보세요

function EventTest() {
  const 첫번째div_onClick이벤트함수 = () => {
    const currentTime = new Date().toLocaleTimeString();
    window.alert(`누른 시간: ${currentTime}`);
  };

  const 두번째input_onClick이벤트함수 = (e) => {
    console.log(e.target.value);

    // 여기서 파라미터로 받는 e는 뭘까요?
    // event 객체다. 콘솔 창에 데이터를 입력했을 때 29번째 라인에 있는 onChange 이벤트가 발생해 이벤트 객체를 인자로 받아 콘솔 창에 출력함.
  };

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
