import { Link } from "react-router-dom";

function AllCafeList({ cafeData }) {
  const {
    data: {
      data: { cafes },
    },
  } = cafeData;
  return (
    <>
      {cafes.map((item, index) => (
        <Link
          to={`/cafe/${index + 100}`}
          key={index}
          className="flex flex-col gap-[12px]"
        >
          <img
            className="w-[165px] h-[152px] rounded-[10px]"
            src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4="
          />
          <h3 className="ml-[4px] font-semibold">{item.cafeName}</h3>
        </Link>
      ))}
    </>
  );
}

export default AllCafeList;
