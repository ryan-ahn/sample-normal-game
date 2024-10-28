"use client";

import { useState } from "react";

import { ButtonV1 } from "@repo/ui";

import { ROW_DATA } from "./assets/data";

interface Post {
  id: number;
  title: string;
  status: string;
  date: string;
  isSelected?: boolean;
}

const handleArray = {
  moveUp: (data: number[], selected: number[]): number[] => {
    const firstSelectedIndex = Math.min(
      ...selected.map((id) => data.indexOf(id)),
    );
    if (firstSelectedIndex === 0) return [...data];

    const result = [...data];
    const sortedSelectedIndexes = selected
      .map((id) => result.indexOf(id))
      .sort((a, b) => a - b);

    sortedSelectedIndexes.forEach((currentIndex) => {
      if (currentIndex > 0 && !selected.includes(result[currentIndex - 1])) {
        [result[currentIndex - 1], result[currentIndex]] = [
          result[currentIndex],
          result[currentIndex - 1],
        ];
      }
    });

    return result;
  },

  moveDown: (data: number[], selected: number[]): number[] => {
    const lastSelectedIndex = Math.max(
      ...selected.map((id) => data.indexOf(id)),
    );
    if (lastSelectedIndex === data.length - 1) return [...data];

    const result = [...data];
    const sortedSelectedIndexes = selected
      .map((id) => result.indexOf(id))
      .sort((a, b) => b - a);

    sortedSelectedIndexes.forEach((currentIndex) => {
      if (
        currentIndex < result.length - 1 &&
        !selected.includes(result[currentIndex + 1])
      ) {
        [result[currentIndex], result[currentIndex + 1]] = [
          result[currentIndex + 1],
          result[currentIndex],
        ];
      }
    });

    return result;
  },
};

const TableHeader = () => (
  <thead>
    <tr className="border-b">
      <th className="w-12 p-2 text-left">
        <input type="checkbox" />
      </th>
      <th className="w-20 p-2 text-left">노출 순서</th>
      <th className="w-24 p-2 text-left">노출 여부</th>
      <th className="p-2 text-left">글 제목</th>
      <th className="w-24 p-2 text-left">작성 일자</th>
    </tr>
  </thead>
);

const TableRow = ({
  post,
  isSelected,
  onCheckboxChange,
}: {
  post: Post;
  isSelected: boolean;
  onCheckboxChange: (id: number) => void;
}) => (
  <tr key={post.id} className="border-b hover:bg-gray-50">
    <td className="p-2">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onCheckboxChange(post.id)}
      />
    </td>
    <td className="p-2">{post.id}</td>
    <td className="p-2">
      <span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">
        {post.status}
      </span>
    </td>
    <td className="p-2">{post.title}</td>
    <td className="p-2">{post.date}</td>
  </tr>
);

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(ROW_DATA);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);

  const handleCheckbox = (id: number) => {
    setSelectedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id],
    );
  };

  const handleMove = (direction: "up" | "down") => {
    if (selectedPosts.length === 0) return;

    const moveFunction =
      direction === "up" ? handleArray.moveUp : handleArray.moveDown;
    const newOrder = moveFunction(
      posts.map((p) => p.id),
      selectedPosts,
    );
    const newPosts = newOrder.map((id) => posts.find((p) => p.id === id)!);

    setPosts(newPosts);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between">
        <h1 className="text-xl font-bold">노출 순서 변경</h1>
        <div className="space-x-2">
          <ButtonV1
            className="rounded bg-blue-500 px-4 py-2 text-white"
            rounded="sm"
            onClick={() => handleMove("up")}
          >
            순서 올리기
          </ButtonV1>
          <ButtonV1
            className="rounded bg-blue-500 px-4 py-2 text-white"
            rounded="sm"
            onClick={() => handleMove("down")}
          >
            순서 내리기
          </ButtonV1>
        </div>
      </div>

      <table className="w-full border-collapse">
        <TableHeader />
        <tbody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              post={post}
              isSelected={selectedPosts.includes(post.id)}
              onCheckboxChange={handleCheckbox}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
