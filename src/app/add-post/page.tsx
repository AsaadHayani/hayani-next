"use client";
import { useMutation, axios, toast, z, Loading, Error } from "@/app/exports";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

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

  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const [errors, setErrors] = useState<{ title?: string; body?: string }>({});

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

  const createPost = async () => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      form
    );
    return response.data;
  };

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");
      setForm({ title: "", body: "" });
      router.push("/posts");
    },
  });

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

    mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="my-width space-y-5 mt-4">
      {isError && <Error />}
      {isPending && <Loading />}

      <label className="my-text">Title:</label>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleFormChange}
        placeholder="Title"
        className={
          errors.title
            ? "border-(--primary) focus:ring-(--primary)"
            : "border-gray-300 focus:ring-blue-500"
        }
      />
      {errors.title && <p className="my-text text-sm">{errors.title}</p>}

      <label className="my-text">Body:</label>
      <textarea
        name="body"
        value={form.body}
        onChange={handleFormChange}
        placeholder="Body"
        rows={4}
        className={
          errors.body
            ? "border-(--primary) focus:ring-(--primary)"
            : "border-gray-300 focus:ring-blue-500"
        }
      />
      {errors.body && <p className="my-text text-sm">{errors.body}</p>}

      <button type="submit" disabled={isPending} className="w-full my-bg">
        {isPending ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
};

export default Page;
