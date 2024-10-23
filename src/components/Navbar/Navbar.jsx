import React, { useState } from "react";
import { House, User } from "lucide-react";
import Coupon from "@/assets/svg/Navbar/Coupon.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CouponModal from "@/components/Navbar/CouponModal";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TabData = [
  { title: "Home", icon: <House color="white" /> },
  { title: "Coupon", icon: <Coupon color="white" /> },
  { title: "My", icon: <User color="white" /> },
];

const Navbar = () => {
  const [curTab, setCurTab] = useState(TabData[0].title);
  const [couponOpen, setCouponOpen] = useState(false);

  const handleChange = (value) => {
    if (value === "Coupon") {
      setCouponOpen((prev) => !prev);
    } else if (couponOpen) {
      setCouponOpen(false); // 다른 탭을 선택하면 쿠폰을 닫음
    }
    setCurTab(value);
  };

  const handleCouponMouseDown = () => {
    if (curTab === "Coupon") {
      setCouponOpen((prev) => !prev); // 동일한 쿠폰 탭을 클릭할 때 모달 토글
    }
  };

  const isCurTab = (curTabValue) => {
    return curTab === curTabValue;
  };

  return (
    <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 flex gap-[10px] flex-col items-center">
      <Tabs
        defaultValue={TabData[0].title}
        className=""
        onValueChange={handleChange}
      >
        <TabsList className="rounded-[56px] h-[50px] bg-black gap-[30px]">
          {TabData.map((item) => {
            let iconColor = curTab === item.title ? "#842800" : "white";
            let text = isCurTab(item.title) && item.title;
            let bg =
              isCurTab(item.title) && item.title === "Coupon"
                ? "bg-[#FF7F48]"
                : `data-[state=active]:bg-[#FF7F48]`;
            if (item.title === "Coupon" && !couponOpen) {
              iconColor = "white";
              text = "";
              bg = "data-[state=active]:bg-transparent";
            }
            return (
              <React.Fragment key={item.title}>
                {item.title === "Coupon" ? (
                  <>
                    <Popover>
                      <PopoverTrigger
                        className={`w-[96px] h-[38px] rounded-[28px] flex justify-center gap-[6px] ${bg}`}
                        asChild
                      >
                        <TabsTrigger
                          value={item.title}
                          onMouseDown={handleCouponMouseDown}
                        >
                          {React.cloneElement(item.icon, { color: iconColor })}
                          <div className="text-[#842800] text-[12px]">
                            {text}
                          </div>
                        </TabsTrigger>
                      </PopoverTrigger>
                      <PopoverContent
                        onOpenAutoFocus={(e) => e.preventDefault()}
                        className="bg-transparent p-0 w-fit border-none shadow-none relative bottom-[10px]"
                      >
                        <CouponModal />
                      </PopoverContent>
                    </Popover>
                  </>
                ) : (
                  <Link to={`/${item.title === "Home" ? "" : "mypage"}`}>
                    <TabsTrigger
                      value={item.title}
                      className={`w-[96px] h-[38px] rounded-[28px] flex justify-center gap-[6px] ${bg}`}
                    >
                      {React.cloneElement(item.icon, { color: iconColor })}
                      <div className="text-[#842800] text-[12px]">{text}</div>
                    </TabsTrigger>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Navbar;
