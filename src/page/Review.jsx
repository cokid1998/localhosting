import { useState } from "react";
import styles from "@/styles/Review.module.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Images } from "lucide-react";

function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [selectedTags, setSelectedTags] = useState({
    맛: "",
    서비스: "",
    위생: "",
  });
  const navigate = useNavigate();

  const handleRatingClick = (index) => {
    setRating(rating === index ? 0 : index);
  };

  const handleTagClick = (category, tag) => {
    setSelectedTags((prev) => ({
      ...prev,
      [category]: prev[category] === tag ? "" : tag,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.reviewContainer}>
      <header className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
        <div className={styles.title}>리뷰 작성</div>
      </header>

      <div className={styles.reviewContent}>
        <section className={styles.cafeInfo}>
          <div className={styles.cafeImage}>카페 이미지</div>
          <div className={styles.cafeDetails}>
            <h2 className={styles.cafeName}>카페 이름</h2>
            <p className={styles.cafeSubscription}>아메리카노 1달 구독권</p>
          </div>
        </section>

        <section className={styles.ratingSection}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                className={`${styles.star} ${
                  index <= (hover || rating) ? styles.active : ""
                }`}
                onClick={() => handleRatingClick(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            ))}
          </div>
        </section>
        <hr className={styles.divider} />

        <section className={styles.categories}>
          <h3>이 카페, 어떠셨나요?</h3>
          {["맛", "서비스", "위생"].map((category) => (
            <div key={category} className={styles.category}>
              <h4>{category}</h4>
              <button
                className={`${styles.tag} ${
                  selectedTags[category] === "positive" ? styles.positive : ""
                }`}
                onClick={() => handleTagClick(category, "positive")}
              >
                {category === "맛"
                  ? "😍 맛있어요"
                  : category === "서비스"
                  ? "😊 친절해요"
                  : "✨ 매장이 청결해요"}
              </button>
              <button
                className={`${styles.tag} ${
                  selectedTags[category] === "negative" ? styles.negative : ""
                }`}
                onClick={() => handleTagClick(category, "negative")}
              >
                {category === "맛"
                  ? "😞 별로예요"
                  : category === "서비스"
                  ? "😟 불친절해요"
                  : "🙁 위생 상태가 별로예요"}
              </button>
            </div>
          ))}
        </section>

        <hr className={styles.divider} />
        <section className={styles.reviewWrite}>
          <h3>리뷰를 작성해 주세요!</h3>
          <textarea
            placeholder="리뷰 내용을 입력해 주세요!"
            className={styles.reviewTextarea}
          ></textarea>
        </section>

        <section className={styles.photoUpload}>
          <h3>사진</h3>
          <div className={styles.photoPlaceholder}>
            <Images />
          </div>
        </section>

        <button className={styles.submitButton}>리뷰 등록</button>
      </div>
    </div>
  );
}

export default Review;

/**
 * 삼항연산자에 여러 조건을 붙이는건 가독성과 직관성에 좋지는 않아요. 함수로 만들어보는게 어떨까요? ㅎㅎ
 * 그 외에는 정말 잘 만들어주셨어요!🤩
 */