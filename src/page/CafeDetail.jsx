import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "@/styles/CafeDetail.module.css";
import { ChevronLeft, MapPinPlus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import testImage from "@/assets/image/Login/coffeeIcon.png";

function CafeDetail() {
  const params = useParams();
  const { id } = params;
  const [activeTab, setActiveTab] = useState("diary");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.cafeDetailContainer}>
      <header className={styles.navbar}>
        <ChevronLeft className={styles.backIcon} onClick={handleBack} />
        <h1>로컬호스팅</h1>
      </header>

      <div className={styles.imageUpload}>
        <div className={styles.imagePlaceholder}></div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <h2 className={styles.cafeName}>카페 이름</h2>
          <div className={styles.contentDesc}>
            카페 소개글을 작성하면 여기에 나와서 위치 잡기위해 얼마나길
            어지면될지테스트테스트중
          </div>
          <div className={styles.progressBarContainer}>
            <span>00.0°c</span>
            <Progress value={33} />
          </div>

          <div className={styles.cafeInfoBox}>
            <div className="mb-[10px]">
              <div className="text-[#525252] text-[11px] font-semibold">
                영업 정보
              </div>
              <div className="font-medium text-[12px]">
                월수금 00:00 ~ 00:00, 화목토 00:00 ~ 00:00 일요일은 쉽니다.
              </div>
            </div>

            <div>
              <div className="w-fit text-[#525252] text-[11px] font-semibold relative">
                가게 위치
                <MapPinPlus
                  className="absolute top-1/2 -translate-y-1/2 -right-3"
                  size="11"
                  color="#ff7f48"
                />
              </div>
              <div className="text-[12px] font-medium ">
                광주 동구 지산로 8 1층
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab("diary")}
            className={activeTab === "diary" ? styles.active : ""}
          >
            카페 일기
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={activeTab === "menu" ? styles.active : ""}
          >
            메뉴
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={activeTab === "review" ? styles.active : ""}
          >
            리뷰
          </button>
        </div>

        <div className={styles.tabContent}>{ReturnTab(activeTab)}</div>
      </div>
    </div>
  );
}

const ReturnTab = (activeTab) => {
  switch (activeTab) {
    case "diary":
      return <CafeDetail.Diary />;
    case "menu":
      return <CafeDetail.Menu />;
    case "review":
      return <CafeDetail.Review />;
    default:
      return <CafeDetail.Diary />;
  }
};

CafeDetail.Diary = () => {
  return (
    <div>
      {[0, 1, 2, 3].map((item, index) => {
        return (
          <div className="border-b-2 flex flex-col mb-5" key={index}>
            <div className="flex gap-5">
              <img
                src={testImage}
                className="flex-1 min-w-[150px] h-[167px] bg-[#D9D9D9] rounded-[10px] mb-[15px] mx-auto object-contain"
              />
              <img
                src={testImage}
                className="flex-1 min-w-[150px] h-[167px] bg-[#D9D9D9] rounded-[10px] mb-[15px] mx-auto object-contain"
              />
            </div>

            <div className="mb-[10px]">
              <span className="font-semibold mr-[11px]">
                카페 일기 제목 위치입니다.
              </span>
              <span className="text-[#525252] text-[14px]">24/00/00</span>
            </div>

            <div className="text-[14px] text-[#525252] mb-[12px]">
              카페 일기 본문을 입력하세요 어느정도 길이까지 가나 테스트중위
              치잡기테스트중 테스트테스트 한줄더길어지면
            </div>

            <div className="text-[14px] text-[#525252] mb-[12px]">
              조회수 0,000
            </div>
          </div>
        );
      })}
    </div>
  );
};
CafeDetail.Diary.displayName = "Diary";

CafeDetail.Menu = () => {
  return <>Menu</>;
};
CafeDetail.Menu.displayName = "Menu";

CafeDetail.Review = () => {
  return <>Review</>;
};
CafeDetail.Review.displayName = "Review";

export default CafeDetail;
