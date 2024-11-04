import styles from "@/components/Layout/ManagerCafeList.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TestData from "@/page/test/TestData.json";
import { ChevronLeft, Search, X } from "lucide-react";

function ManagerCafeList() {
  const [cafes, setCafes] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCafes(TestData);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className={styles.managerPage}>
      <div className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
        <div className={styles.title}>관리자 페이지</div>
        <Search
          className={`${styles.searchIcon} ${isSearchActive ? styles.activeSearchIcon : ""}`}
          onClick={toggleSearch}
        />
      </div>

      {isSearchActive && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className={styles.searchInput}
          />
          <X className={styles.closeIcon} onClick={toggleSearch} />
        </div>
      )}

      {!isSearchActive && (
        <div className={styles.dataButtonContainer}>
          <button className={styles.dataButton}>데이터 추출</button>
        </div>
      )}

      <div className={styles.cafeList}>
        {isSearchActive && <div className={styles.overlay}></div>}
        {cafes.map((cafe) => (
          <Link
            to={`/cafe/${cafe.id}`}
            key={cafe.id}
            className={styles.cafeItem}
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ManagerCafeList;
