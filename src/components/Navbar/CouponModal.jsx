import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { CheckCheck } from "lucide-react";

function CouponModal() {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="w-[290px] bg-black flex flex-col p-[12px] pb-[20px] rounded-[12px] gap-[18px]">
        <div className="flex flex-col items-center bg-[#FF7F48] rounded-[14px] pt-[18px] px-[16px] pb-[30px]">
          <div className="w-full mb-[10px] content-center font-semibold text-[14px]">
            카페이름
          </div>

          <Separator className="bg-black mb-[24px]" />

          <div className="w-[102px] h-[102px] bg-gray-200 rounded-[14px] mb-[12px]" />

          <div className="text-[14px] font-semibold">아메리카노 ICED</div>

          <InputOTP
            value={value}
            onChange={(value) => setValue(value)}
            maxLength={4}
          >
            <InputOTPGroup className="flex gap-[26px]">
              {[0, 1, 2, 3].map((index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-[30px] border-t-0 !border-x-0 !rounded-bl-none !rounded-br-none border-b-[4px] border-[#842800] !ring-0"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex items-center justify-end pr-[3px] relative bg-white rounded-[28px] font-medium text-[10px] py-[3px]">
          <span className="mr-[17px]">
            사장님 고유 핀 번호를 입력해 주세요!
          </span>
          <button className="w-[52px] h-[32px] bg-[#FF7F48] rounded-[28px] flex justify-center items-center">
            <CheckCheck color="#842800" />
          </button>
        </div>
      </div>

      <div className="relative left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-black rotate-180" />
    </div>
  );
}

export default CouponModal;
