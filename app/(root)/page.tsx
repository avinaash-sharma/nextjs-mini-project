import Link from "next/link";

import QuestionCards from "@/components/cards/QuestionCards";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2023-10-01"),
  },
  {
    _id: "2",
    title: "How to learn JavaScript? ReactJS? NodeJS?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2025-03-01"),
  },
  {
    _id: "3",
    title: "How to learn Next.js?",
    description: "I want to learn Next.js, can anyone help me?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2025-10-01"),
  },
];

// somthing like ~ 'query=react'
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const queryMatch = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const filterMatch = filter
      ? question.tags[0]?.name.toLowerCase() === filter?.toLowerCase()
      : true;

    return queryMatch && filterMatch;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCards key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
