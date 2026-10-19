export default function Heading2({heading,subHeading,className=''}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <h1 className="text-3xl tracking-wide text-neutral-700">
        {heading}
      </h1>
      <p className="max-w-lg text-base text-gray-500 ">
        {subHeading}
      </p>
    </div>
  );
}
