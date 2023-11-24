"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 2;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        // disabled={!hasPrev}
        // onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        // disabled={!hasNext}
        // onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
