import styles from "@/styles/CafeList.module.css";
import TestData from "@/data/TestData.json";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getAllCafe } from "@/api/cafeAPI";
import { useQuery } from "@tanstack/react-query";

function DistanceCafeList() {
  const { data: cafes, isLoading } = useQuery({
    queryKey: ["distanceCafeList"],
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
        <div className={styles.title}>거리순 랭킹</div>
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

export default DistanceCafeList;
