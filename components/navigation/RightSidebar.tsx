import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title: "How to use React Router?",
    },
    {
      _id: "2",
      title: "How to use Custom Hooks?",
    },
    {
      _id: "3",
      title: "How to use Redux Toolkit?",
    },
    {
      _id: "4",
      title: "What is Tailwind CSS?",
    },
    {
      _id: "5",
      title: "Why do you use Next.js?",
    },
  ];

  const popularTags = [
    {
      _id: "1",
      name: "react",
      questions: 100,
    },
    {
      _id: "2",
      name: "javascript",
      questions: 500,
    },
    {
      _id: "3",
      name: "html",
      questions: 200,
    },
    {
      _id: "4",
      name: "css",
      questions: 300,
    },
    {
      _id: "5",
      name: "nodejs",
      questions: 400,
    },
    {
      _id: "6",
      name: "express",
      questions: 500,
    },
  ];

  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => {
            return (
              <Link
                href={ROUTES.QUESTION(_id)}
                key={_id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-semibold text-dark500_light700">{title}</p>
                <Image
                  src="/icons/chevron-right.svg"
                  alt="chevron-right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => {
            return (
              <TagCard
                key={_id}
                _id={_id}
                name={name}
                questions={questions}
                showCount
                compact
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
