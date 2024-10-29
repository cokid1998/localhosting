import styles from "@/components/Layout/ManagerCafeList.module.css";
import { useEffect, useState } from "react";
import TestData from "@/page/test/TestData.json";
import { ChevronLeft } from "lucide-react/";
import { Search } from "lucide-react/";

function ManagerCafeList() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    setCafes(TestData);
  }, []);

  return (
    <div className={styles.managerPage}>
      <div className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} />
        <div className={styles.title}>관리자 페이지</div>
        <Search className={styles.searchIcon} />
      </div>

      <div className={styles.dataButtonContainer}>
        <button className={styles.dataButton}>데이터 추출</button>
      </div>

      <div className={styles.cafeList}>
        {cafes.map((cafe) => (
          <div key={cafe.id} className={styles.cafeItem}>
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
