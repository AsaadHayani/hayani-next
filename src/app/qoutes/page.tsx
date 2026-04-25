"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { axios, Error, Loading, useQuery } from "../exports";
import { useEffect, useState } from "react";

interface QoutesProps {
  q: string;
  a: string;
}

const Page = () => {
  const [noq, setNoq] = useState<number>(20);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/quotes");
    return data;
  };
  const { data, isPending, isError } = useQuery<QoutesProps[]>({
    queryFn: fetchProducts,
    queryKey: ["qoutes"],
  });

  useEffect(() => {
    const interval = setInterval(() => setNoq((prev) => prev + 1), 7000);
    return () => clearInterval(interval);
  }, [noq]);

  return (
    <div className="my-width text-center">
      {isError && <Error />}
      {isPending && <Loading />}

      <h1 className="my-title my-4">Random Quotes</h1>
      <div className="p-6 border my-border rounded-md">
        {data?.slice(noq - 1, noq).map((item) => (
          <div key={item.q}>
            <p className="text-2xl">{item.q}</p>
            <hr />
            <p className="text-lg my-text">- {item.a}</p>

            <div className="flex justify-around gap-4">
              <button
                className="my-bg"
                style={{ borderRadius: 50 }}
                title="Previous"
                onClick={() => setNoq((prev) => prev - 1)}
              >
                <FaArrowLeft size={25} />
              </button>

              <button
                className="my-bg"
                style={{ borderRadius: 50 }}
                title="Next"
                onClick={() => setNoq((prev) => prev + 1)}
              >
                <FaArrowRight size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
