import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import UpAndCircle from "@/assets/svg/Main/UpAndCircle.svg";
import { Footprints } from "lucide-react";

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

        <div className="flex flex-col px-[15px] overflow-scroll mb-[40px]">
          <h2 className="font-bold text-[24px] mb-[24px]">
            지금 많이 찾는 카페
          </h2>

          <div className="flex gap-[15px]">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="w-[156px] pl-[16px] py-[10px] bg-black text-white font-bold text-[17px] rounded-t-[10px] relative">
                  거리순
                  <Footprints
                    size="62px"
                    color="#000000"
                    fill="#ff7f48"
                    strokeWidth="0.7"
                    className="absolute -top-[24px] right-[8px] -rotate-[11deg]"
                  />
                </div>
                <div className="-top-[10px] relative bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px] [clip-path:polygon(0_4%,100%_0,100%_100%,0%_100%)]"></div>
              </div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="w-[156px] pl-[16px] py-[10px] bg-black text-white font-bold text-[17px] rounded-t-[10px] relative">
                  판매량
                  <UpAndCircle className="absolute right-[8px] -top-[22px]" />
                </div>
                <div className="-top-[10px] relative bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px] [clip-path:polygon(0_4%,100%_0,100%_100%,0%_100%)]"></div>
              </div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="w-[156px] pl-[16px] py-[10px] bg-black text-white font-bold text-[17px] rounded-t-[10px] relative">
                  판매량
                  <UpAndCircle className="absolute right-[8px] -top-[22px]" />
                </div>
                <div className="-top-[10px] relative bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px] [clip-path:polygon(0_4%,100%_0,100%_100%,0%_100%)]"></div>
              </div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-[15px] mb-[80px]">
          <h2 className="font-bold text-[24px] mb-[24px]">등록된 전체 카페</h2>

          <div className="flex gap-[15px] overflow-scroll">
            <div className="flex flex-col gap-[12px]">
              <div className="bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]"></div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]"></div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]"></div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]"></div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]"></div>
              <h3 className="ml-[4px] font-semibold">카페이름</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// Todo: clip-path부분 rounded처리
// scroll되면 "지금 많이 찾는 카페 쪽은 스크롤 안되게"
