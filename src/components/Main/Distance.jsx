import { Footprints } from "lucide-react";
import UpAndCircle from "@/assets/svg/Main/UpAndCircle.svg";
import { Link } from "react-router-dom";

function Distance({ cafeData }) {
  const {
    data: {
      data: { cafes },
    },
  } = cafeData;

  return (
    <>
      <Link to="/distance">
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
            <img
              className="-top-[10px] relative bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px] [clip-path:polygon(0_4%,100%_0,100%_100%,0%_100%)]"
              src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4="
            />
          </div>
          <h3 className="ml-[4px] font-semibold">{cafes[0].cafeName}</h3>
        </div>
      </Link>

      <Link to="/rank">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="w-[156px] pl-[16px] py-[10px] bg-black text-white font-bold text-[17px] rounded-t-[10px] relative">
              판매량
              <UpAndCircle className="absolute right-[8px] -top-[22px]" />
            </div>
            <img
              className="-top-[10px] relative bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px] [clip-path:polygon(0_4%,100%_0,100%_100%,0%_100%)]"
              src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4="
            />
          </div>
          <h3 className="ml-[4px] font-semibold">{cafes[1].cafeName}</h3>
        </div>
      </Link>
    </>
  );
}

export default Distance;
