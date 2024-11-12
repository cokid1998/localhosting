import styles from "@/styles/CafeRegist.module.css";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CafeRegist() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeSets, setTimeSets] = useState([{}]);
  const [activeTab, setActiveTab] = useState("cafeInfo");
  const navigate = useNavigate();

  const toggleDay = (day) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const addTimeSet = () => {
    setTimeSets([...timeSets, {}]);
  };

  const handleBack = () => {
    navigate(-1);
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

            <div className={styles.operatingDays}>
              <label>영업일 선택</label>
              <div className={styles.days}>
                {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                  <button
                    key={day}
                    className={
                      selectedDays.includes(day) ? styles.selected : ""
                    }
                    onClick={() => toggleDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {timeSets.map((_, index) => (
              <div key={index} className={styles.timeInputs}>
                <label>영업시간</label>
                <div className={styles.timeRow}>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="00:00"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="00:00"
                  />
                </div>
                <label>휴게시간</label>
                <div className={styles.timeRow}>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="00:00"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="00:00"
                  />
                </div>
              </div>
            ))}

            <button className={styles.addDayButton} onClick={addTimeSet}>
              + 영업일 추가
            </button>
          </div>
        ) : (
          <div className={styles.tabContent}>{}</div>
        )}
      </div>
    </div>
  );
}

export default CafeRegist;
