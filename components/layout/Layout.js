import Link from "next/link";
import styles from "./Layout.module.css";

import { Italianno } from "next/font/google";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <img src="/logo.jpg" className={styles.logo} />
        </Link>
        <p className={italianno.className}>Choose and buy your car</p>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <p className={italianno.className}>
          {" "}
          Wheels Project | Next.js Practice &copy;
        </p>
      </footer>
    </>
  );
}
export default Layout;
