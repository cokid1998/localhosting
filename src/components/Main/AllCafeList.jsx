import { Link } from "react-router-dom";

function AllCafeList() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((item, index) => (
        <Link
          to={`/cafe/${index}`}
          key={index}
          className="flex flex-col gap-[12px]"
        >
          <div className="bg-[#d9d9d9] w-[165px] h-[152px] rounded-[10px]" />
          <h3 className="ml-[4px] font-semibold">카페이름</h3>
        </Link>
      ))}
    </>
  );
}

export default AllCafeList;
