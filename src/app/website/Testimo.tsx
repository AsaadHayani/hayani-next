import { itemsTestimo } from "@/app/exports";

const Testimo = () => (
  <section className="text-center py-10">
    <h2 className="my-title mb-5">Testimonials</h2>

    <div>
      {itemsTestimo.map((item) => (
        <div key={item.name} className="space-y-3">
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover border-4 my-border"
            />
          </div>

          <p className="leading-relaxed">{item.desc}</p>

          <h4 className="my-text font-bold">{item.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimo;
