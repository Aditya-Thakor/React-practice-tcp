export default function Heading() {
  return (
    <heading className="h-20 w-full animate-pulse duration-100 relative">
      <div
        className="
                    h-7 w-40 bg-white rounded-lg
                    relative overflow-hidden after:content-[''] after:w-1/2 after:h-120 after:bg-black/5 after:absolute after:-left-20 after:-top-50 after:rotate-12 after:-translate-x-20  after:animate-sweep after:transition-all after:ease-in-out after:backdrop-blur-[1px]
                "
      />
      <div
        className="
                    h-4 w-44 mt-2 bg-white rounded-sm
                    relative overflow-hidden after:content-[''] after:w-1/2 after:h-120 after:bg-black/3 after:absolute after:-left-20 after:-top-50 after:rotate-12 after:-translate-x-20  after:animate-sweep after:transition-all after:ease-in-out after:backdrop-blur-[1px]
                "
      />
    </heading>
  );
}
