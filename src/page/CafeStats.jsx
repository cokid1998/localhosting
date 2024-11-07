import React, { useState, useEffect } from "react";
import styles from "@/components/Layout/CafeStats.module.css";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function CafeStats() {
  const externalTemperatureData = 25.3; //예시 데이터

  const [value, setValue] = useState(externalTemperatureData.toFixed(1));

  useEffect(() => {
    setValue(externalTemperatureData.toFixed(1));
    updateTempBarBackground(externalTemperatureData);
  }, [externalTemperatureData]);

  const updateTempBarBackground = (newValue) => {
    const bar = document.getElementById("tempBar");
    const percentage = (parseFloat(newValue) / bar.max) * 100;
    bar.style.setProperty("--value", `${percentage}%`);
  };

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value).toFixed(1); // 소수점 형식 유지
    setValue(newValue);
    updateTempBarBackground(newValue);
  };

  const CouponCard = ({ title, label, value }) => {
    return (
      <div className={styles.couponCard}>
        <div className={styles.couponHeader}>{title}</div>
        <div className={styles.couponBody}>
          <span className={styles.couponLabel}>{label}</span>
          <span className={styles.couponValue}>{value}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>분석 리포트</div>
      </div>
      <div className={styles.imgBox}>
        <img
          className={styles.cafeImg}
          src="https://image.newsis.com/2023/07/12/NISI20230712_0001313626_web.jpg?rnd=20230712163021"
          alt="가게 이미지"
        />
      </div>
      <div className={styles.cafeContainer}>
        <div className={styles.cafeName}>카페 이름</div>
        <div className={styles.cafeIntro}>
          카페 소개글을 작성하면 여기에 나와서 위치 잡기위해 얼마나길
          어지면될지테스트테스트중
        </div>
        <div className={styles.temperature}>
          <span className={styles.tempValue}>{value} °C</span>
          <input
            type="range"
            id="tempBar"
            min="0.0"
            max="100.0"
            step="0.1"
            value={value}
            onChange={handleChange}
            className={styles.tempBar}
            disabled //조작 비활성화
          />
        </div>
        <div className={styles.couponContainer}>
          <CouponCard
            title="총 쿠폰 사용 횟수"
            label="전체"
            value="0회"
            headerColor="#ff7f48" // 주황색 배경
          />
          <CouponCard
            title="월별 쿠폰 사용 횟수"
            label="0월"
            value="0회"
            headerColor="black" // 검은색 배경
          />
          <CouponCard
            title="하루 쿠폰 사용 횟수"
            label="0요일"
            value="0회"
            headerColor="black" // 검은색 배경
          />
        </div>
      </div>
    </div>
  );
}
export default CafeStats;
