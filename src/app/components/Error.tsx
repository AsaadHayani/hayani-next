import { IoWarningOutline } from "react-icons/io5";

const Error = () => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
      <IoWarningOutline size={25} />

      <span>Something went wrong</span>
    </div>
  </div>
);

export default Error;
