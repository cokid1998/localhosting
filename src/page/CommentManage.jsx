import React, { useState, useEffect } from "react";
import styles from "@/components/Layout/CommentManage.module.css";
import TestData2 from "@/page/test/TestData2.json";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function CommentManage() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    setCafes(TestData2);
  }, []);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch("해당하는 API 삽입");
    //   const data = response.json();
    //   setCafes(data);
    // };
    // fetchData();
    setCafes(TestData2);
  }, []);

  const handleDelete = (complainNum) => {
    setCafes((prevCafes) =>
      prevCafes.filter((cafe) => cafe.complainNum !== complainNum)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>신고 댓글 관리</div>
      </div>
      {cafes.map((cafe) => (
        <div key={cafe.complainNum} className={styles.commentList}>
          <div className={styles.cafeInfo}>
            <div className={styles.cafeName}>{cafe.cafeName}</div>
            <div className={styles.writtenInfoGroup}>
              <div className={styles.writtenInfo}>
                <span>신고된 사용자</span>
                <span className={styles.writter}>{cafe.userName}</span>
              </div>
              <div className={styles.writtenInfo}>
                <span>작성 날짜</span>
                <span className={styles.writter}>{cafe.date}</span>
              </div>
              <div className={styles.writtenInfo}>
                <span>누적 신고 횟수</span>
                <span className={styles.writter}>{cafe.complainCount}</span>
              </div>
            </div>
          </div>
          <div className={styles.split} />
          <div className={styles.reviewContent}>
            <div className={styles.reviewHeader}>신고된 리뷰 내용</div>
            {cafe.imageUrl ? (
              <>
                <img
                  src={cafe.imageUrl}
                  alt="리뷰 이미지"
                  className={styles.reviewImg}
                />
                <p className={styles.detailReview}>{cafe.complainContent}</p>
              </>
            ) : (
              <p className={styles.detailReview}>{cafe.complainContent}</p>
            )}
          </div>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(cafe.complainNum)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
export default CommentManage;
