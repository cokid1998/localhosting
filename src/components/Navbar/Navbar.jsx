import React, { useState } from "react";
import { House, User } from "lucide-react";
import Coupon from "@/assets/svg/Navbar/Coupon.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CouponModal from "@/components/Navbar/CouponModal";

const TabData = [
  { title: "Home", icon: <House color="white" /> },
  { title: "Coupon", icon: <Coupon color="white" /> },
  { title: "My", icon: <User color="white" /> },
];

const Navbar = () => {
  const [curTab, setCurTab] = useState(TabData[0].title);
  const [couponOpen, setCouponOpen] = useState(false);
  const handleChange = (value) => {
    setCurTab(value);
  };

  const isCurTab = (curTabValue) => {
    return curTab === curTabValue;
  };

  const handleCouponModal = () => {
    setCouponOpen((prev) => !prev);
  };

  return (
    <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-[10px] flex-col items-center">
      {curTab === "Coupon" && couponOpen && <CouponModal curTab={curTab} />}

      <Tabs
        defaultValue={TabData[0].title}
        className=""
        onValueChange={handleChange}
      >
        <TabsList className="rounded-[56px] h-[50px] bg-black gap-[30px]">
          {TabData.map((item) => {
            let iconColor = curTab === item.title ? "#842800" : "white";
            let text = isCurTab(item.title) && item.title;
            let bg = isCurTab && `data-[state=active]:bg-[#FF7F48]`;
            if (item.title === "Coupon" && !couponOpen) {
              iconColor = "white";
              text = "";
              bg = "data-[state=active]:bg-transparent";
            }
            // curTab이 "Coupon"이면서 couponOpen이 true일 때 클릭하면
            // 아이콘 색 White로
            // 텍스트 없애기
            // 백그라운드 색 없애기
            return (
              <TabsTrigger
                key={item.title}
                value={item.title}
                className={`w-[96px] p-0 h-[38px] rounded-[28px] flex justify-center gap-[6px] ${bg}`}
                onClick={
                  item.title === "Coupon" ? handleCouponModal : undefined
                }
              >
                {React.cloneElement(item.icon, { color: iconColor })}
                <div className="text-[#842800] text-[12px]">{text}</div>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Navbar;

// Todo: Home, My 라우팅 처리
// modal의 바깥을 클릭해도 모달이 닫히게
