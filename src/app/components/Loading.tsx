const Loading = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div
      className="w-12 h-12 border-4 my-border rounded-full animate-spin"
      style={{ borderTopColor: "transparent" }}
    ></div>
  </div>
);

export default Loading;
