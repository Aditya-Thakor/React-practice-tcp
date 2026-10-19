export default function FormSection({children, className}) {
    return(
        <div className={`h-auto xl:h-screen w-full xl:w-1/2 bg-gray-50 ${className}`}>
            <div className="h-full max-w-xs sm:max-w-xl m-auto py-5">
                <div className="h-auto w-full flex flex-col gap-10">
                    {children}
                </div>
            </div>
        </div>
    )
}