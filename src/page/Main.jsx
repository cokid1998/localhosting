import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Distance from "@/components/Main/Distance";
import AllCafeList from "@/components/Main/AllCafeList";

function Main() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-[16px] font-medium text-[16px]">프로젝트이름</h1>

      <div className="w-full">
        <Carousel
          opts={{ align: "start" }}
          className="w-full relative mb-[22px]"
          setApi={setApi}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {[0, 1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index}>
                <div className="bg-[#d9d9d9] h-[340px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-[36px] absolute bottom-[15px] right-[22px] bg-[#989898] rounded-full text-white py-[3px] text-center font-light text-[9px]">
            {current} / {count}
          </div>
        </Carousel>

        <div className="flex flex-col px-[15px] mb-[40px] overflow-auto mobile:scrollbar-hide">
          <h2 className="font-bold text-[24px] mb-[24px]">
            지금 많이 찾는 카페
          </h2>

          <div className="flex gap-[15px]">
            <Distance />
          </div>
        </div>

        <div className="flex flex-col px-[15px] mb-[80px]">
          <h2 className="font-bold text-[24px] flex items-center justify-between mb-[24px]">
            등록된 전체 카페
            <Link to="/cafeList">
              <ChevronRightIcon />
            </Link>
          </h2>

          <div className="flex gap-[15px] overflow-auto mobile:scrollbar-hide">
            <AllCafeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// Todo: clip-path부분 rounded처리
// scroll되면 "지금 많이 찾는 카페 쪽은 스크롤 안되게"
