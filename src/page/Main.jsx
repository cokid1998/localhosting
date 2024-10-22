import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Footprint from "@/assets/svg/Main/Footprint.svg";
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

        <div className="flex flex-col px-[15px]">
          <h2 className="font-bold text-[24px] mb-[24px]">
            지금 많이 찾는 카페
          </h2>

          <div className="flex gap-[15px]">
            <div className="flex flex-col items-center relative">
              <Footprints
                size="62px"
                color="#000000"
                fill="#ff7f48"
                strokeWidth="1"
                className="top-[-24px] right-[12px] absolute -rotate-[11deg]"
              />
              <div className="w-[156px] pl-[16px] py-[10px] bg-black text-white font-bold text-[17px] rounded-t-[10px]">
                거리순
              </div>
              <div className="-top-[10px] relative bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// Todo: 위쪽만 사선으로
