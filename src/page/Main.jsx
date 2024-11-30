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
import { getCafes } from "@/api/cafeAPI";

function Main() {
  const [carouselControl, setCarouselControl] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const getCafesData = async () => {
      try {
        const { data, status } = await getCafes();
        setCafes([data]);
      } catch (error) {
        window.alert(error);
      }
    };

    getCafesData();
  }, []);

  useEffect(() => {
    if (!carouselControl) {
      return;
    }
    setCount(carouselControl.scrollSnapList().length);
    setCurrent(carouselControl.selectedScrollSnap() + 1);

    carouselControl.on("select", () => {
      setCurrent(carouselControl.selectedScrollSnap() + 1);
    });
  }, [carouselControl]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-[16px] font-medium text-[16px]">프로젝트이름</h1>

      <div className="w-full">
        <Carousel
          opts={{ align: "start" }}
          className="w-full relative mb-[22px]"
          setApi={setCarouselControl}
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
            <Distance cafeData={cafes} />
          </div>
        </div>

        <div className="flex flex-col px-[15px] mb-[80px]">
          <Link
            to="/cafeList"
            className="font-bold text-[24px] flex items-center justify-between mb-[24px]"
          >
            등록된 전체 카페
            <ChevronRightIcon />
          </Link>

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
// 렌더링 최적화 지금 배너가 옆으로 넘어가면 컴포넌트가 모두 렌더링 됨
