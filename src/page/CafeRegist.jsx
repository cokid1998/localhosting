import styles from "@/styles/CafeRegist.module.css";
import { useState } from "react";
import { ChevronLeft, X, Images } from "lucide-react";

function CafeRegist() {
  const [timeSets, setTimeSets] = useState([{ selectedDays: [] }]);
  const [activeTab, setActiveTab] = useState("cafeInfo");
  const [menus, setMenus] = useState([{ name: "", price: "", description: "" }]);
  const [pinNumber, setPinNumber] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [breakStartTime, setBreakStartTime] = useState("");
  const [breakEndTime, setBreakEndTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleTextInputChange = (e, setValue) => {
    const inputValue = e.target.value;
    if (/^\d{0,4}$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const toggleDay = (index, day) => {
    setTimeSets((prevTimeSets) =>
      prevTimeSets.map((timeSet, i) =>
        i === index
          ? {
              ...timeSet,
              selectedDays: timeSet.selectedDays.includes(day)
                ? timeSet.selectedDays.filter((d) => d !== day)
                : [...timeSet.selectedDays, day],
            }
          : timeSet
      )
    );
  };

  const addTimeSet = () => {
    setTimeSets([...timeSets, { selectedDays: [] }]);
  };

  const removeTimeSet = (index) => {
    setTimeSets(timeSets.filter((_, i) => i !== index));
  };

  const handleBack = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addMenu = () => {
    setMenus([...menus, { name: "", price: "", description: "" }]);
  };

  return (
    <div className={styles.cafeRegistration}>
      <header className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
        <h1>가게 등록</h1>
        <button className={styles.completeButton}>완료</button>
      </header>

      <div className={styles.imageUpload}>
        <div className={styles.imagePlaceholder}>
          <Images size={24} />
          <span>클릭 후 이미지를 등록해 주세요.</span>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputGroup}>
          <label>카페 이름</label>
          <input type="text" placeholder="카페 이름을 작성해 주세요." />
        </div>

        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab("cafeInfo")}
            className={activeTab === "cafeInfo" ? styles.active : ""}
          >
            카페 영업 정보
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={activeTab === "menu" ? styles.active : ""}
          >
            메뉴 등록
          </button>
        </div>

        {activeTab === "cafeInfo" ? (
          <div className={styles.tabContent}>
            <div className={styles.inputGroup}>
              <label>카페 고유 핀번호 설정</label>
              <input
                type="text"
                value={pinNumber}
                onChange={(e) => handleTextInputChange(e, setPinNumber)}
                placeholder="숫자 4자리를 입력해 주세요."
              />
            </div>
            <div className={styles.inputGroup}>
              <label>카페 소개글</label>
              <textarea rows="2" placeholder="카페 소개글을 작성해 주세요." />
            </div>
            <div className={styles.inputGroup}>
              <label>카페 위치</label>
              <input type="text" placeholder="카페 위치를 입력해 주세요." />
            </div>

            {timeSets.map((timeSet, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? styles.timeSection
                    : styles.additionalTimeSection
                }
              >
                {index > 0 && (
                  <button
                    className={styles.removeButton}
                    onClick={() => removeTimeSet(index)}
                  >
                    <X size={16} />
                  </button>
                )}
                <div className={styles.operatingDays}>
                  <label>영업일 선택</label>
                  <div className={styles.days}>
                    {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                      <button
                        key={day}
                        className={
                          timeSet.selectedDays.includes(day)
                            ? styles.selected
                            : ""
                        }
                        onClick={() => toggleDay(index, day)}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={styles.timeInputs}>
                  <div className={styles.timeRow}>
                    <label>영업시간</label>
                    <input
                      type="text"
                      value={openingTime}
                      onChange={(e) => handleTextInputChange(e, setOpeningTime)}
                      placeholder="00:00"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      value={closingTime}
                      onChange={(e) => handleTextInputChange(e, setClosingTime)}
                      placeholder="00:00"
                    />
                  </div>
                  <div className={styles.timeRow}>
                    <label>휴게시간</label>
                    <input
                      type="text"
                      value={breakStartTime}
                      onChange={(e) => handleTextInputChange(e, setBreakStartTime)}
                      placeholder="00:00"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      value={breakEndTime}
                      onChange={(e) => handleTextInputChange(e, setBreakEndTime)}
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button className={styles.addDayButton} onClick={addTimeSet}>
              + 영업일 추가
            </button>

            <hr className={styles.sectionSeparator} />
          </div>
        ) : (
          <div className={styles.tabContent}>
            {menus.map((menu, index) => (
              <div key={index} className={styles.menuSection}>
                <div className={styles.menuHeader}>
                  <div className={styles.menuInfo}>
                    <h2>메뉴 설정</h2>
                    <p>카페 메뉴를 등록해 주세요.</p>
                  </div>
                  <button className={styles.addMenuButton} onClick={addMenu}>
                    + 메뉴 추가
                  </button>
                </div>
                <hr className={styles.sectionSeparator} />
                <div className={styles.menuFields}>
                  <div className={styles.inputFields}>
                    <input
                      type="text"
                      placeholder="메뉴 이름을 입력하세요."
                      value={menu.name}
                    />
                    <input
                      type="text"
                      placeholder="가격을 입력하세요."
                      value={menu.price}
                    />
                    <input
                      type="text"
                      placeholder="메뉴 설명을 입력하세요."
                      value={menu.description}
                    />
                  </div>
                  <button className={styles.imageUploadButton}>
                    <Images size={24} />
                    <span>이미지 등록</span>
                  </button>
                </div>
                <hr className={styles.sectionSeparator} />
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.modalCloseButton} onClick={closeModal}>
              <X size={16} />
            </button>
            <h3>등록이 완료되지 않았습니다.</h3>
            <h3>저장하시겠습니까?</h3>
            <p>저장되지 않은 정보는 초기화됩니다!</p>
            <div className={styles.modalButtons}>
              <button className={styles.resetButton}>초기화</button>
              <button className={styles.saveButton}>저장</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CafeRegist;





/**
 * 스크롤바가 생기지않게 만드세요
 * 탭에 주황색 border때문에 클릭한 탭의 텍스트가 계속 움직이는데 이부분을 방지해보세요
 * 요일 중앙정렬하세요
 * 영업시간이랑 input들 가로정렬하세요
 * 위에거부터 우선적으로 해결하고 input ":" 고정으로 나오는거 하세요
 */

/* 11.14
  - 시간 입력 부분 ":" 고정으로 나오는 부분 어떻게 해야 할지 모르겠어요 ㅠㅠ
  ⮑ 일단 놔두시고 모든 숫자타입 input태그 오른쪽에 숫자 올려주는 UI삭제해보세요
  ⮑ 핀번호, 영업시간, 휴게시간 input에 숫자 길이 4개만 넣을수있도록 제한해보세요
   ㄴㄴ 넵
  - 뒤로가기 버튼을 눌렀을 때 로직이 어려워요...
  ⮑ 뒤로가기 버튼에 로직을 넣을 필요가 있나요? 무슨 로직을 넣어야하나요?
   ㄴㄴ 그 피그마에 한비 님이 써 두신 것 같은데 이것도 백엔드랑 연관지어서 해야겠죠??
  - 영업일 추가 버튼은 아래에 있는 게 나을 것 같아서 임의로 수정했는데 디자인대로 바꾸라고 하시면 다시 바꿀게요
  ⮑ 음.. 십자가 크기 작아진거 말씀하시는건가요?
   ㄴㄴ 아뇨 피그마에서는 추가 버튼 눌렀을 때 추가된 섹션이 버튼 아래에 나오는데 위에 추가되게 해 놨어요!

  - 피그마엔 없는데 완료버튼을 다른 버튼처럼 주황색으로 만드는게 좋아보이네요. 변경해주세요
   ㄴㄴ 넵 바꿨어요
  
  - timeSets같이 서버에 보내는 데이터는 데이터 구조를 API에 맞게 맞춰야해요.
  - 아직 서버가 완성된건 아니니까 다음에 비슷한 기능 만들때는 저 부분에 너무 시간을 할애하진 마세요.
  - 이 부분은 나중에 만났을 때 설명해드릴께요
  - 저 코드는 나중에 바꿔야할수도 있어요..ㅠㅠ
   ㄴㄴ 넵.......
 */
