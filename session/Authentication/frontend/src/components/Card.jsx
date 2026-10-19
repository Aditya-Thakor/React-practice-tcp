export default function Card({title,sub}) {
  return (
    <div className="w-full flex flex-col items-start rounded-2xl bg-neutral-100/10 border border-white/50 shadow-sm shadow-black/10 backdrop-blur-lg p-5">
      <h1 className="text-2xl font-normal">{title}</h1>
      <p className="text-sm text-white/70">{sub}</p>
    </div>
  );
}
