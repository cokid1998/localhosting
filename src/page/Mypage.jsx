import styles from "@/styles/CafeRegist.module.css";
import styles1 from "@/styles/auth/Signup.module.css";
import { useState } from "react";
import { Images } from "lucide-react";
import ownerImage from "@/components/img/사장님.png";

const Card = ({ type, title, description, image, onClick, selected }) => {
  return (
    <button
      className={styles1.cardContainer}
      onClick={onClick}
      style={{
        margin: 0,
      }}
    >
      <div
        className={`${styles1.cardHeader} ${
          selected ? styles1.headerSelected : ""
        }`}
        style={{
          backgroundColor: "#ff7f48",
          color: "black",
        }}
      >
        {title}
      </div>
      <div
        className={`${styles1.cardContent} ${selected ? styles1.selected : ""}`}
        style={{
          borderColor: "#ff7f48",
        }}
      >
        <div className="rounded-[14px] w-[75px] h-[75px] bg-[#ededed]" />
        <div className={styles1.cardText}>
          <p className={styles1.cardTextDescription}>{description}</p>
          <p className={styles1.cardTextType}>{type}</p>
        </div>
      </div>
    </button>
  );
};

function Mypage() {
  const [activeTab, setActiveTab] = useState("cafeInfo");

  return (
    <div className={styles.cafeRegistration}>
      <div className="m-[20px] font-bold text-[24px] flex flex-col justify-center">
        <div>사용자 닉네임님,</div>
        <div> 어서오세요!</div>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <div className={styles.tabs}>
            <button
              onClick={() => setActiveTab("cafeInfo")}
              className={activeTab === "cafeInfo" ? styles.active : ""}
            >
              현재 구독중
            </button>
            <button
              onClick={() => setActiveTab("menu")}
              className={activeTab === "menu" ? styles.active : ""}
            >
              사용 내역
            </button>
          </div>

          {activeTab === "cafeInfo" ? (
            <div
              className={styles.tabContent}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                type="쿠폰 사용횟수 : 0회"
                title="카페 이름"
                description="아이스 아메리카노"
                image={ownerImage}
                className
              />
            </div>
          ) : (
            <div
              className={styles.tabContent}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                zIndex: 0,
              }}
            >
              <Card
                type="쿠폰 사용횟수 : 0회"
                title="카페 이름"
                description="아이스 아메리카노"
                image={ownerImage}
                className
              />
              <Card
                type="쿠폰 사용횟수 : 0회"
                title="카페 이름"
                description="아이스 아메리카노"
                image={ownerImage}
                className
              />
              <Card
                type="쿠폰 사용횟수 : 0회"
                title="카페 이름"
                description="아이스 아메리카노"
                image={ownerImage}
                className
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
