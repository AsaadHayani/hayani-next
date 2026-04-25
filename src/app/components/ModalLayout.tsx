interface ModalLayoutProps {
  children: React.ReactNode;
  setOpen: (isOpen: boolean) => void;
}

const ModalLayout = ({ children, setOpen }: ModalLayoutProps) => (
  <div
    onClick={() => setOpen(false)}
    className="fixed inset-0 flex items-center justify-center bg-black/50 z-1300 animate-fade"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative border-2 border-dashed my-border overflow-y-auto overflow-x-hidden w-3/4 max-h-[80vh] bg-zinc-200 dark:bg-zinc-950 p-6 rounded-md space-y-5 text-center"
    >
      {children}
    </div>
  </div>
);

export default ModalLayout;
