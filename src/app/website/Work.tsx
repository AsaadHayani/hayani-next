import { imagesWork } from "@/app/exports";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Work = () => (
  <section className="text-center py-10 space-y-4">
    <h2 className="my-title">Our Works</h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {imagesWork.map((src) => (
        <div key={src} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={src}
            alt="Picture"
            className="w-full h-48 object-cover hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </div>

    <div className="flex justify-around">
      <button className="my-bg" style={{ borderRadius: 50 }}>
        <FaArrowLeft />
      </button>
      <button className="my-bg" style={{ borderRadius: 50 }}>
        <FaArrowRight />
      </button>
    </div>
  </section>
);

export default Work;
