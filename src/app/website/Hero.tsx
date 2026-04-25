const Hero = () => (
  <section className="flex flex-col items-center justify-center relative bg-[url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center relative py-10 h-140 text-center">
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="my-width relative space-y-7">
      <h1 className="text-4xl text-white">
        My Portfolio Website - Using Next.js
        <p className="my-text">By Asaad Hayani.</p>
      </h1>
      <p className="text-gray-300">
        Next.js, Typescript, Tailwind CSS, Supabase, React-Query,
        React-Toastify, React-Icons, Axios, Zod (Validation)
      </p>
      <a
        className="my-bg px-5 py-2 rounded text-white cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300"
        href="https://www.dropbox.com/scl/fi/iqteu9j613xhtp703wkkw/Asaad_Hayani_CV_25.pdf?rlkey=f864d86r41u9djukoxx46nn4l&st=jy6a7qdi&dl=1"
        download
      >
        Download C.V
      </a>
    </div>
  </section>
);

export default Hero;
