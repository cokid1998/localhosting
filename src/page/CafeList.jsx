import React from "react";
import styles from "@/components/Layout/CafeList.module.css";
import TestData from "@/page/test/TestData.json";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CafeList() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch("해당하는 API 삽입");
    //   const data = response.json();
    //   setCafes(data);
    // };
    // fetchData();
    setCafes(TestData);
  }, []);

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/Main");
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.backIcon} onClick={navigateToMain}>
          &lt;
        </div>
        <div className={styles.title}>전체 카페</div>
      </div>
      <div className={styles.cafeList}>
        {cafes.map((cafe) => (
          <div key={cafe.id} className={styles.cafeItem}>
            <div className={styles.cafeImage}>
              <img src={cafe.image} className={styles.image} />
            </div>
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

export default CafeList;
