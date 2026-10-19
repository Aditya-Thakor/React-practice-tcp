export default function Heading({ header, para }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl tracking-tight">{header}</h1>
      <p className="max-w-lg text-xl font-light text-white/70">{para}</p>
    </div>
  );
}
