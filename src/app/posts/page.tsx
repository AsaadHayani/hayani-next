"use client";
import {
  axios,
  toast,
  Loading,
  PostsCards,
  PostsTable,
  useQuery,
  useMutation,
  useQueryClient,
  Error,
} from "@/app/exports";
import { useState } from "react";
import Link from "next/link";
import { MdGridOn, MdGridView } from "react-icons/md";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Page = () => {
  const fetchPosts = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return data;
  };
  const { data: posts = [], isPending, isError } = useQuery<PostProps[]>({
    queryFn: fetchPosts,
    queryKey: ["posts"],
  });

  const deletePost = async (id: number) => {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  };
  const queryClient = useQueryClient();
  const mutateDel = useMutation<number, unknown, any>({
    mutationFn: (id) => deletePost(id),
    onSuccess: (_, id) => {
      toast.success("Post deleted successfully");
      queryClient.setQueryData(["posts"], (oldData: PostProps[]) => {
        if (!oldData) return [];
        return oldData.filter((post) => post.id !== id);
      });
    },
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  return (
    <div className="my-width">
      {(isError || mutateDel.isError) && <Error />}
      {(isPending || mutateDel.isPending) && <Loading />}

      <div className="w-full my-6">
        <div className="flex items-center justify-between">
          <Link href="/add-post" className="flex-9">
            <button className="w-full my-bg">Create Post</button>
          </Link>

          <button
            onClick={() => setIsSmallScreen(!isSmallScreen)}
            className="flex-1 flex justify-center"
          >
            {isSmallScreen ? (
              <MdGridOn size={28} className="my-text" />
            ) : (
              <MdGridView size={28} className="my-text" />
            )}
          </button>
        </div>

        <div className="w-full mt-4 rounded-md">
          {isSmallScreen ? (
            <PostsCards {...{ mutate: mutateDel.mutate, posts }} />
          ) : (
            <PostsTable {...{ mutate: mutateDel.mutate, posts }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
