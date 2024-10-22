import React from "react";
import styles from "@/components/Layout/CafeList.module.css";
import TestData from "@/page/test/TestData.json";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

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

  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>전체 카페</div>
      </div>
      <div className={styles.cafeList}>
        {cafes.map((cafe, index) => (
          <div
            key={cafe.id}
            className={styles.cafeItem}
            // style={index === cafes.length - 1 ? { borderBottom: "none" } : {}}
          >
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

// <를 눌렀을 때 index페이지로 가야합니다.
// 지금은 < 눌렀을 때 url만 바뀌고 아무 페이지도 가지지 않아요
// App.jsx 코드 보시고 수정해보세요

// border-bottom은 마지막 cafeItem만 사라지게 하라고 말씀드린거였는데
// 중요한 부분은 아니니까 일요일에 알려드릴께요.

// 아이콘을 편하게 사용할 수 있는 외부라이브러리를 사용해보세요
// https://lucide.dev/icons/
// 위 홈페이지 안내에 따라서 <를 외부라이브러리에서 제공하는 아이콘으로 교체해보세요
