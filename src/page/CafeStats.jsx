import React from "react";
import styles from "@/components/Layout/CafeStats.module.css";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function CafeStats() {
  return (
    <div>
      <div className={styles.navbar}>
        <Link to="/">
          <ChevronLeft size={24} color="black" />
        </Link>
        <div className={styles.title}>분석 리포트</div>
      </div>
      <div className="styles.backImg">
        <div />
      </div>
    </div>
  );
}
export default CafeStats;
