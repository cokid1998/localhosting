import styles from "@/components/Layout/Layout.module.css";
import Navbar from "@/components/Navbar/Navbar";
import OwnerNavbar from "../Navbar/ownerNavbar";
import { getCookie } from "@/util/cookies";

function Layout({ children }) {
  const role = getCookie("role");
  return (
    <div className={styles.container}>
      {children}
      {role === "owner" ? <OwnerNavbar /> : <Navbar />}
    </div>
  );
}

export default Layout;
