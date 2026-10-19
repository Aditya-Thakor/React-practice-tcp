import Heading from "./components/Heading";
import TransactionCard from "./components/TransactionCard";

export default function LoadingPage() {
  return (
    <div className="h-screen w-full flex flex-col space-y-5 p-4 ">
      <Heading/>
      <datacards className="h-44 w-full flex gap-4  duration-75 ">
        <div className="h-full w-[40%] flex gap-2">
          <div
            className="
                        h-full w-1/2 bg-linear-to-br from-orange-500/40 to-red-600/40 rounded-xl
                         relative overflow-hidden after:content-[''] after:w-1/2 after:h-120 after:bg-white/20 after:absolute after:-left-20 after:-top-50 after:rotate-12 after:-translate-x-20  after:animate-sweep after:transition-all after:ease-in-out after:backdrop-blur-[1px]
                    "
          />
          <div
            className="
                        h-full w-1/2 bg-linear-to-br from-green-500/40 to-emerald-600/40 rounded-xl
                        relative overflow-hidden after:content-[''] after:w-1/2 after:h-120 after:bg-white/10 after:absolute after:-left-20 after:-top-50 after:rotate-12 after:-translate-x-20  after:animate-sweep after:transition-all after:ease-in-out after:backdrop-blur-[1px]
                    "
          />
        </div>
        <div className="h-full w-[60%] bg-black/10 rounded-xl relative overflow-hidden after:content-[''] after:w-1/2 after:h-120 after:bg-white/40 after:absolute after:-left-20 after:-top-50 after:rotate-12 after:-translate-x-20  after:animate-sweep after:transition-all after:ease-in-out after:backdrop-blur-[1px] "></div>
      </datacards>
      <main className="h-[calc(100vh-19rem)] w-full flex gap-4 ">
        <div className="h-full w-1/2 block bg-blue-100 p-4 space-y-5 rounded-lg">
          <TransactionCard />
          <TransactionCard className="after:-left-60"/>
          <TransactionCard className="after:-left-90"/> 
        </div>
        <div className="h-full w-1/2 flex relative bg-sky-100 p-4 rounded-lg">
          <div
            className="
                        size-64 relative rounded-full m-auto bg-linear-to-br from-orange-500/40 to-red-600/40 
                        after:content-[''] after:size-32 after:bg-white/70 after:absolute after:rounded-full after:left-1/4 after:top-1/4
                        animate-pulse duration-1
                    "
          />
        </div>
      </main>
    </div>
  );
}
