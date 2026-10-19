export default function Container({children,className}) {
    return <div className={`sm:min-h-screen w-full font-sans flex flex-col xl:flex-row transition-all ease-in-out duration-500 ${className}`}>
            {children}
    </div>
}