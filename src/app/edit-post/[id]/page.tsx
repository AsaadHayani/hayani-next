"use client";
import {
  useMutation,
  useQuery,
  axios,
  Loading,
  toast,
  z,
  Error,
} from "@/app/exports";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const Page = () => {
  const postSchema = z.object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters long")
      .nonempty("Title is required"),
    body: z
      .string()
      .min(10, "Body must be at least 10 characters long")
      .nonempty("Body is required"),
  });

  type FormTypeProps = z.infer<typeof postSchema>;

  const [form, setForm] = useState<FormTypeProps>({
    title: "",
    body: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormTypeProps, string>>
  >({});

  const router = useRouter();

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const dynamicSchema = z.object({
      [name]: postSchema.shape[name as keyof typeof postSchema.shape],
    });

    const fieldValidation = dynamicSchema.safeParse({ [name]: value });

    if (!fieldValidation.success) {
      const fieldErrors = fieldValidation.error.flatten().fieldErrors;

      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name]?.[0] || "Invalid input",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const { id } = useParams();
  const fetchPost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  };
  const { data: post, isPending, isError } = useQuery({
    queryFn: fetchPost,
    queryKey: ["post", id],
  });

  const updatePost = async () => {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      form
    );
    return data;
  };
  const mutatePage = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      toast.success("Post updated successfully");
      router.push("/posts");
    },
  });

  useEffect(() => {
    if (post) {
      setForm({
        ...post,
      });
    }
  }, [post]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = postSchema.safeParse(form);

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;

      setErrors({
        title: fieldErrors.title?.[0],
        body: fieldErrors.body?.[0],
      });

      return;
    }

    mutatePage.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="my-width space-y-5 mt-4">
      {(isError || mutatePage.isError) && <Error />}
      {(isPending || mutatePage.isPending) && <Loading />}

      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={form.title || ""}
        onChange={handleFormChange}
        placeholder="Title"
        className={
          errors.title
            ? "border-(--primary) focus:ring-(--primary)"
            : "border-gray-300 focus:ring-blue-600"
        }
      />
      {errors.title && <p className="my-text text-sm">{errors.title}</p>}

      <label>Body:</label>
      <textarea
        name="body"
        value={form.body || ""}
        onChange={handleFormChange}
        placeholder="Body"
        rows={4}
        className={
          errors.body
            ? "border-(--primary) focus:ring-(--primary)"
            : "border-gray-300 focus:ring-blue-600"
        }
      />
      {errors.body && <p className="my-text text-sm">{errors.body}</p>}

      <button disabled={isPending} className="w-full my-bg">
        {isPending ? "Updating..." : "Update Post"}
      </button>
    </form>
  );
};

export default Page;
