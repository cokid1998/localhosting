import styles from "@/components/Layout/ManagerCafeList.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestData from "@/page/test/TestData.json";
import { ChevronLeft } from "lucide-react/";
import { Search } from "lucide-react/";

function ManagerCafeList() {
  const [cafes, setCafes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCafes(TestData);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleCafeClick = (id) => {
    navigate(`/cafe/${id}`);
  };

  return (
    <div className={styles.managerPage}>
      <div className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
        <div className={styles.title}>관리자 페이지</div>
        <Search className={styles.searchIcon} />
      </div>

      <div className={styles.dataButtonContainer}>
        <button className={styles.dataButton}>데이터 추출</button>
      </div>

      <div className={styles.cafeList}>
        {cafes.map((cafe) => (
          <div
            key={cafe.id}
            className={styles.cafeItem}
            onClick={() => handleCafeClick(cafe.id)}
          >
            <div className={styles.cafeImage}></div>
            <div className={styles.cafeInfo}>
              <div className={styles.cafeName}>{cafe.name}</div>
              <div className={styles.cafeDescription}>{cafe.description}</div>
              <div className={styles.cafeMeta}>
                <span className={styles.temperature}>{cafe.temperature}</span>
                <span className={styles.distance}>{cafe.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagerCafeList;

/*
  2024.10.29
  1. 아래에 있는 네비게이션에 마지막 카페 리스트가 가리니 아래에 간격 좀 주세요.

  2. 현재 스크롤을 하면 상단navbar가 가려져서 사용자 경험이 좋지않습니다.
      카페리스트 부분만 스크롤되게 리팩토링 해보세요.

  3. 리스트를 클릭했을 때 페이지 전환되는건 아직 구현 안된건가요?

  4. < 아이콘을 눌렀을 때 뒤로가기를 구현해보세요. ❗인덱스 페이지로 가도록 하는것이 아니라 뒤로가야합니다.

*/
