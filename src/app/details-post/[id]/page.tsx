"use client";
import { axios, Error, Loading, useQuery } from "@/app/exports";
import { useParams, useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface CommentProps {
  id: number;
  name: string;
  body: string;
}

const Page = () => {
  const { id } = useParams();
  const router = useRouter();

  const fetchPost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  };
  const { data: post, isPending, isError } = useQuery<PostProps>({
    queryFn: fetchPost,
    queryKey: ["post", id],
  });

  const fetchComments = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return data;
  };
  const comments = useQuery<CommentProps[]>({
    queryFn: fetchComments,
    queryKey: ["comments", id],
  });

  return (
    <div className="my-width mt-4">
      {(isError || comments.isError) && <Error />}
      {(isPending || comments.isPending) && <Loading />}

      <div className="mt-6 p-6 border-2 my-border rounded-md text-center space-y-4">
        <h2 className="my-title">{post?.title}</h2>
        <p className="text-md">{post?.body}</p>
        <hr />
        <h3 className="text-xl my-text">Comments:</h3>
        <div className="space-y-3">
          {comments.data?.map((c) => (
            <div key={c.id} className="text-sm">
              <span className="my-text">{c.name}</span> - {c.body}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => router.push("/posts")}
        className="w-full mt-4 my-bg flex items-center justify-center gap-4"
      >
        <MdArrowBackIosNew size={20} />
        Back to Posts Page
      </button>
    </div>
  );
};

export default Page;
