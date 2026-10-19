export default function TextSection({ children, className }) {
  return (
    <div
      className={` h-auto xl:h-screen w-full xl:w-1/2  ${className}`}
    >
      <div className="h-full max-w-xs sm:max-w-xl m-auto flex flex-col justify-center items-center gap-10 text-neutral-50 py-4 xl:py-0">
        {children}
      </div>
    </div>
  );
}
