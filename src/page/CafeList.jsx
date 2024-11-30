import styles from "@/styles/CafeList.module.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getAllCafe } from "@/api/cafeAPI";
import { useQuery } from "@tanstack/react-query";

function CafeList() {
  const { data: cafes, isLoading } = useQuery({
    queryKey: ["CafeList"],
    queryFn: getAllCafe,
  });

  if (isLoading) return null;

  const data = cafes.data.data.cafes;

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>전체 카페</div>
      </div>
      <div className={styles.cafeList}>
        {data.map((cafe, index) => (
          <Link
            to={`/cafe/${index + 100}`}
            key={cafe.cafeId}
            className={styles.cafeItem}
          >
            <div className={styles.cafeImage}>
              <img
                className={styles.image}
                src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=0&k=20&c=dMqeYCJDs3BeBP_jv93qHRISDt-54895SPoVc6_oJt4="
              />
            </div>
            <div className={styles.cafeInfo}>
              <div className={styles.cafeName}>{cafe.cafeName}</div>
              <div className={styles.cafeDescription}>{cafe.description}</div>
              <div className={styles.cafeMeta}>
                <span className={styles.temperature}>00.0°c</span>
                <span className={styles.distance}>000km</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CafeList;

// <를 눌렀을 때 index페이지로 가야합니다.
// 지금은 < 눌렀을 때 url만 바뀌고 아무 페이지도 가지지 않아요
// App.jsx 코드 보시고 수정해보세요

// border-bottom은 마지막 cafeItem만 사라지게 하라고 말씀드린거였는데
// 중요한 부분은 아니니까 일요일에 알려드릴께요.

// 아이콘을 편하게 사용할 수 있는 외부라이브러리를 사용해보세요
// https://lucide.dev/icons/
// 위 홈페이지 안내에 따라서 <를 외부라이브러리에서 제공하는 아이콘으로 교체해보세요
