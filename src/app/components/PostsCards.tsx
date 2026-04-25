import Link from "next/link";
import { FormEvent } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuBadgeInfo, LuTrash2 } from "react-icons/lu";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface Props {
  mutate: any;
  posts: PostProps[];
}

const PostsCards = ({ mutate, posts }: Props) => (
  <div className="grid grid-cols-1 gap-4">
    {posts.map((post) => (
      <div
        key={post.id}
        className="rounded-xl shadow-md p-4 space-y-3 border border-(--primary) text-center"
      >
        <h3 className="text-lg my-text">{post.title}</h3>
        <p className="text-sm">{post.body}</p>

        <div className="flex justify-evenly items-center">
          <Link href={`/details-post/${post.id}`}>
            <LuBadgeInfo size={28} className="my-text" />
          </Link>
          <Link href={`/edit-post/${post.id}`}>
            <FaRegPenToSquare size={28} className="text-blue-600" />
          </Link>
          <LuTrash2
            size={28}
            className="text-red-600 cursor-pointer"
            onClick={(e: FormEvent) => {
              e.preventDefault();
              mutate(post.id);
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default PostsCards;
