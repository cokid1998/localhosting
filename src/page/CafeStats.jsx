import React from "react";
import styles from "@/components/Layout/CafeStats.module.css";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Backpack } from "lucide-react";

function CafeStats() {
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
      </div>
    </div>
  );
}
export default CafeStats;
