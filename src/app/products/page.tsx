"use client";
import { useQuery, Loading, axios, OneProduct, Error } from "@/app/exports";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Page = () => {
  const fetchProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  };
  const { data, isPending, isError } = useQuery<ProductsProps[]>({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  return (
    <section className="my-width">
      {isError && <Error />}
      {isPending && <Loading />}

      <h2 className="my-title my-4 text-center">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <OneProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Page;
