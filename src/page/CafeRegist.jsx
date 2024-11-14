import styles from "@/styles/CafeRegist.module.css";
import { useState } from "react";
import { ChevronLeft, X, Images } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CafeRegist() {
  const [timeSets, setTimeSets] = useState([{ selectedDays: [] }]); // 각 섹션의 요일 선택 상태 포함
  const [activeTab, setActiveTab] = useState("cafeInfo");
  const [menus, setMenus] = useState([{ name: "", price: "", description: "" }]);
  const navigate = useNavigate();

  const toggleDay = (index, day) => {
    // 개별 요일 선택 상태 업데이트
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
    setTimeSets([...timeSets, { selectedDays: [] }]); // 새 섹션 추가 시 개별 요일 상태 초기화
  };

  const removeTimeSet = (index) => {
    setTimeSets(timeSets.filter((_, i) => i !== index));
  };

  const handleBack = () => {
    navigate(-1);
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
                type="number"
                inputMode="numeric"
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
                    ? styles.timeSection // 기본 섹션은 border가 없음
                    : styles.additionalTimeSection // 추가된 섹션에만 border 적용
                }
              >
                {index > 0 && ( // 추가된 섹션에만 삭제 버튼 표시
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
                          timeSet.selectedDays.includes(day) ? styles.selected : ""
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
                    <input type="number" inputMode="numeric" placeholder="00:00" />
                    <span>-</span>
                    <input type="number" inputMode="numeric" placeholder="00:00" />
                  </div>
                  <div className={styles.timeRow}>
                    <label>휴게시간</label>
                    <input type="number" inputMode="numeric" placeholder="00:00" />
                    <span>-</span>
                    <input type="number" inputMode="numeric" placeholder="00:00" />
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
  - 뒤로가기 버튼을 눌렀을 때 로직이 어려워요...
  - 영업일 추가 버튼은 아래에 있는 게 나을 것 같아서 임의로 수정했는데 디자인대로 바꾸라고 하시면 다시 바꿀게요
 */