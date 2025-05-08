import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
const page = () => {
  return (
    <div className=" px-6 py-2 bg-white text-black text-center rounded">
      <Link href="/charts/unmatch">
        <h1 className={styles.hello}>charts</h1>
      </Link>
    </div>
  );
};

export default page;
