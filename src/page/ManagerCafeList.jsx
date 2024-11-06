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

  useEffect(() => {
    if (isSearchActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchActive]);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
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

      <div className={styles.dataButtonContainer}>
        <button className={styles.dataButton}>데이터 추출</button>
      </div>

      {isSearchActive && (
        <div className={styles.overlay} onClick={closeSearch}>
          <div className={styles.searchContainer} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className={styles.searchInput}
            />
            <X className={styles.closeIcon} onClick={toggleSearch} />
          </div>
        </div>
      )}

      <div className={styles.cafeList}>
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


/* 2024.11.04
1. overlay와 검색컴포넌트가 따로 위치해있는데 같은 컴포넌트로 묶는게 좋아요.
  -> styles.overlay div안에 styles.searchContainer div를 넣어서 만들어주세요

2. 회색 부분을 클릭해도 검색UI가 없어지도록 만들어보세요.
    1번 과정을 통해 하나의 컴포넌트로 묶고 2번과정을 하다보면 아마 input과 searchContainer클래스를 가지는 div영역을 클릭해도
    검색UI가 사라질탠데요. 이부분을 방지해보세요

3. 지금 돋보기를 누르면 Cafe리스트의 위치들이 변경되면서 보기 좋지않은데요.
    데이터 추출버튼 위에 검색 모달이 뜨는 형태로 만들어보세요.

4. 모달이 창이 뜨면 스크롤이 활성화 안되게 만들어보세요
*/
