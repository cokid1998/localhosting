import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "@/styles/CafeDetail.module.css";
import { ChevronLeft, MapPinPlus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import testImage from "@/assets/image/Login/coffeeIcon.png";
import { useQueries } from "@tanstack/react-query";
import { getOneCafe, getOneCafeDiary, getMenu, getReview } from "@/api/cafeAPI";
import dayjs from "dayjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function CafeDetail() {
  const params = useParams();
  const { id } = params;
  const [activeTab, setActiveTab] = useState("diary");
  const navigate = useNavigate();

  const queries = useQueries({
    queries: [
      {
        queryKey: ["getOneDiary", id],
        queryFn: () => getOneCafeDiary(id),
        enabled: !!id,
      },
      {
        queryKey: ["getOneCafe", id],
        queryFn: () => getOneCafe(id),
        enabled: !!id,
      },
      {
        queryKey: ["review"],
        queryFn: getReview,
      },
    ],
  });
  const isLoading = queries.some((query) => query.isLoading);

  if (isLoading) return null;

  const [diary, cafe, review] = queries;

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
        <img
          className={styles.imagePlaceholder}
          src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4="
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <h2 className={styles.cafeName}>
            {cafe.data.data.data.cafe.cafeName}
          </h2>
          <div className={styles.contentDesc}>
            {cafe.data.data.data.cafe.description}
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

        <div className={styles.tabContent}>
          {ReturnTab(activeTab, activeTab === "diary" ? diary : review)}
        </div>
      </div>
    </div>
  );
}

const ReturnTab = (activeTab, data) => {
  switch (activeTab) {
    case "diary":
      return <CafeDetail.Diary data={data} />;
    case "menu":
      return <CafeDetail.Menu />;
    case "review":
      return <CafeDetail.Review data={data} />;
    default:
      return <CafeDetail.Diary data={data} />;
  }
};

CafeDetail.Diary = ({ data }) => {
  return (
    <div>
      {data.data.data.map((item) => {
        return (
          <div className="border-b-2 flex flex-col mb-5" key={item.diaryId}>
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
              <span className="font-semibold mr-[11px]">{item.title}</span>
              <span className="text-[#525252] text-[14px]">
                {dayjs(item.entryDate).format("YYYY.MM.DD")}
              </span>
            </div>

            <div className="text-[14px] text-[#525252] mb-[12px]">
              {item.diaryContent}
            </div>

            <div className="text-[14px] text-[#525252] mb-[12px]">
              조회수 {item.view}
            </div>
          </div>
        );
      })}
    </div>
  );
};
CafeDetail.Diary.displayName = "Diary";

CafeDetail.Menu = () => {
  return (
    <>
      {[1, 2, 3].map((item, index) => {
        return (
          <div
            key={index}
            className="px-[10px] py-[20px] border-b-2 flex justify-between items-center"
          >
            <div className="flex flex-col">
              <h1 className="font-semibold text-[18px]">메뉴 이름</h1>
              <div className="font-semibold text-[16px]">0,000원</div>
              <div className="mt-[10px] font-medium text-[12px] text-[#757575]">
                메뉴 설명을 입력하세요
              </div>
            </div>

            <img
              className="w-[90px] h-[90px] rounded-[10px]"
              src={
                "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2024/01/%EC%A1%B0%EC%84%A0%ED%98%B8%ED%85%94%EC%95%A4%EB%A6%AC%EC%A1%B0%ED%8A%B8_%EB%B3%B8%EB%AC%B83.png"
              }
            />
          </div>
        );
      })}
    </>
  );
};
CafeDetail.Menu.displayName = "Menu";

CafeDetail.Review = ({ data }) => {
  const handleReport = () => {
    console.log("신고 버튼 클릭");
  };
  return (
    <>
      {data.data.data.map((item) => {
        return (
          <div
            key={item.reviewId}
            className="py-[32px] flex items-center border-b-2 flex-col"
          >
            <div className="w-full flex gap-[10px] items-center mb-[10px] relative">
              <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-[16px]">사용자 닉네임님</div>
                <div className="font-medium text-[10px] text-[#757575]">
                  {dayjs(item.createdAt).format("YYYY.MM.DD")}
                </div>
              </div>

              <button
                onClick={handleReport}
                className="font-medium text-[#757575] text-[10px] absolute top-0 right-0"
              >
                신고
              </button>
            </div>
            <div className="w-full flex gap-[6px] flex-wrap mb-[20px]">
              <div className="flex-1 w-[110px] h-[26px] bg-[#D9D9D9] rounded-[5px]" />
              <div className="flex-1 w-[110px] h-[26px] bg-[#D9D9D9] rounded-[5px]" />
              <div className="flex-1 w-[110px] h-[26px] bg-[#D9D9D9] rounded-[5px]" />
            </div>

            <img
              className="w-full rounded-[10px] mb-[10px]"
              src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4="
            />

            <div className="w-full">{item.rcontent}</div>
          </div>
        );
      })}
    </>
  );
};
CafeDetail.Review.displayName = "Review";

export default CafeDetail;
