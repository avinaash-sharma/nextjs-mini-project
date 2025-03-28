"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
  { name: "Most Answered", value: "most-answered" },
  { name: "Most Viewed", value: "most-viewed" },
  { name: "Most Upvoted", value: "most-upvoted" },
  { name: "React", value: "react" },
  { name: "JavaScript", value: "javascript" },
];
const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");
  const handleFilterClick = (value: string) => {
    let newUrl = "";
    if (value === active) {
      setActive("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(value);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: value.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => {
        return (
          <Button
            className={cn(
              `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
              active === filter.value
                ? "bg-primary-100 text-primary-500 dark:bg-dark-400 hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-dark-500 dark:text-primary-500"
                : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-500 dark:hover:text-light-900"
            )}
            key={filter.value}
            onClick={() => handleFilterClick(filter.value)}
          >
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilter;
