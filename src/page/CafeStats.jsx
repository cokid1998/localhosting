import { useState, useEffect } from "react";
import styles from "@/styles/CafeStats.module.css";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function CafeStats() {
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().toLocaleString("ko-KR", { weekday: "long" });

  const [value, setValue] = useState("0.0");
  const [totalCoupon, setTotalCoupon] = useState(0);
  const [monthlyCoupon, setMonthlyCoupon] = useState(0);
  const [dailyCoupon, setDailyCoupon] = useState(0);

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

  // 서버에서 데이터 가져오기
  useEffect(() => {
    async function fetchData() {
      try {
        // 온도 데이터
        const tempResponse = await fetch("/api/temperature");
        const tempData = await tempResponse.json();
        const tempValue = tempData.temperature;
        setValue(tempValue.toFixed(1)); // 온도를 소수점 첫째 자리까지 표시
        updateTempBarBackground(tempValue);
        // 쿠폰 데이터
        const couponResponse = await fetch("/api/coupon");
        const couponData = await couponResponse.json();
        setTotalCoupon(couponData.total);
        setMonthlyCoupon(couponData.monthly);
        setDailyCoupon(couponData.daily);
      } catch (error) {
        console.error("데이터 오류 발생:", error);
      }
    }

    fetchData();
  }, []);

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
            value={`${totalCoupon}회`}
            headerColor="#ff7f48" // 주황색 배경
          />
          <CouponCard
            title="월별 쿠폰 사용 횟수"
            label={`${currentMonth}월`}
            value={`${monthlyCoupon}회`}
            headerColor="black" // 검은색 배경
          />
          <CouponCard
            title="하루 쿠폰 사용 횟수"
            label={`${currentDay}`}
            value={`${dailyCoupon}회`}
            headerColor="black" // 검은색 배경
          />
        </div>
      </div>
    </div>
  );
}
export default CafeStats;
