"use client";

import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// const handleSearch = useDebouncedCallback((e) => {}, 300);

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  params.set("test", "value");

  replace(`${pathname}?${params}`);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        // onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
