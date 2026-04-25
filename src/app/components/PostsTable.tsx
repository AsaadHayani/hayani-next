import Link from "next/link";
import { FormEvent } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuBadgeInfo, LuTrash2 } from "react-icons/lu";

const headCell = ["Title", "Body", "Actions"];

interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface Props {
  mutate: any;
  posts: PostProps[];
}

const PostsTable = ({ mutate, posts }: Props) => (
  <div className="overflow-x-auto border my-border rounded-md">
    <table className="w-full text-sm border border-[#ffad9e] rounded-lg overflow-hidden">
      <thead>
        <tr>
          {headCell.map((item) => (
            <th key={item} className="p-3 text-center font-bold">
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {posts?.map((post: PostProps) => (
          <tr
            key={post.id}
            className="border-t border-(--primary) hover:bg-[#0000002b] hover:dark:bg-[#ffffff2b]"
          >
            <td className="p-3 text-center">{post.title}</td>
            <td className="p-3 text-center">{post.body}</td>

            <td className="p-3 flex justify-center items-center gap-4">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PostsTable;
