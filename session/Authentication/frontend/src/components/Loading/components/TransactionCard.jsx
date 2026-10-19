export default function TransactionCard({className='after:-left-20'}) {
    return(
        <div
            className={`
                        h-20 w-full bg-white/70 rounded-xl
                        relative overflow-hidden ${className}
                        after:content-[''] after:w-1/2 after:h-120 after:bg-white after:absolute after:-left-20 after:-top-50 after:rotate-12 after:-translate-x-20  after:animate-sweep after:transition-all after:ease-in-out after:backdrop-blur-[1px]
                    `}
          />
    )
}