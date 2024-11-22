import styles from "@/styles/Purchase.module.css";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Purchase() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const options = [
    {
      id: 1,
      title: "1주일 구독권",
      description: "아메리카노 ICED",
      price: "0,000원",
    },
    {
      id: 2,
      title: "3주일 구독권",
      description: "아메리카노 ICED",
      price: "0,000원",
    },
    {
      id: 3,
      title: "1달 구독권",
      description: "아메리카노 ICED",
      price: "0,000원",
    },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
        <div className={styles.title}>구독권 구매</div>
      </header>

      <h1 className={styles.chooseMsg}>이용권을 선택해 주세요!</h1>

      <div className={styles.options}>
        {options.map((option) => (
          <div
            key={option.id}
            className={`${styles.card} ${
              selectedOption === option.id ? styles.selected : ""
            }`}
            onClick={() => handleSelect(option.id)}
          >
            <div
              className={`${styles.cardHeader} ${
                selectedOption === option.id ? styles.selected : ""
              }`}
            >
              {option.title}
            </div>
            <div
              className={`${styles.cardContent} ${
                selectedOption === option.id ? styles.contentSelected : ""
              }`}
            >
              <div className={styles.imagePlaceholder}></div>
              <div className={styles.cardText}>
                <div className={styles.cardTextType}>{option.description}</div>
                <div className={styles.cardTextDescription}>설명</div>
              </div>
              <div
                className={`${styles.price} ${
                  selectedOption === option.id ? styles.selected : ""
                }`}
              >
                {option.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.purchaseButton} ${
          selectedOption ? styles.active : ""
        }`}
        disabled={!selectedOption}
      >
        구매하기
      </button>
    </div>
  );
}

export default Purchase;
