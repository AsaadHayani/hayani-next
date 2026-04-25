"use client";
import { Error, Loading, axios, useQuery } from "@/app/exports";
import { useParams, useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Page() {
  const { id } = useParams();
  const router = useRouter();

  const fetchProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  };

  const { data, isPending, isError } = useQuery<ProductProps>({
    queryFn: fetchProduct,
    queryKey: ["product", id],
  });

  return (
    <div className="my-width">
      {isError && <Error />}
      {isPending && <Loading />}

      <div className="my-4 border my-border rounded-md flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        <div className="p-4 flex-1">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="text-xl my-text">{data?.title}</h2>
            <span className="text-lg">${data?.price}</span>
          </div>
          <p className="leading-relaxed">{data?.description}</p>
          <hr />
          <div className="flex">
            <p>Category: {data?.category}</p>
            <p className="ms-3">Rating: {data?.rating.rate}</p>
          </div>
        </div>

        <div className="p-4">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-40 h-40 object-contain"
          />
        </div>
      </div>

      <button
        onClick={() => router.push("/products")}
        className="w-full my-bg flex items-center justify-center gap-4"
      >
        <MdArrowBackIosNew size={20} />
        Back to Products Page
      </button>
    </div>
  );
}

export default Page;
