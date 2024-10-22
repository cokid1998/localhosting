import styles from "@/components/Layout/Layout.module.css";
import Navbar from "@/components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <Navbar />
    </div>
  );
}

export default Layout;
