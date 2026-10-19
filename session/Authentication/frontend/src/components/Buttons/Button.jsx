export default function Button({name, ...props}) {
    return <button 
              {...props}
              className="w-full py-2.5 rounded-lg text-white font-semibold active:scale-95 bg-linear-to-br from-blue-500 to-cyan-400 cursor-pointer transition-all hover:shadow-xl hover:shadow-blue-200">
                  {name}
            </button>
}