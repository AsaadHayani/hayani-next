import Link from "next/link";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const OneProduct = ({ product }: { product: ProductProps }) => (
  <div className="border my-border rounded-md overflow-hidden">
    <img
      src={product.image}
      alt={product.title}
      className="h-40 w-full object-contain hover:scale-110 transition duration-300"
    />
    <Link href={`/details-product/${product.id}`}>
      <div className="p-4 space-y-4">
        <h3 className="text-lg line-clamp-1 underline hover:text-[#941600] transition">
          {product.title}
        </h3>
        <p className="text-sm line-clamp-2">{product.description}</p>
      </div>
    </Link>
  </div>
);

export default OneProduct;
