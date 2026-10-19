export default function     () {
  return (
    <div className="flex w-full min-h-screen animate-pulse">
      
      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="h-8 w-64 bg-gray-200 rounded" />

        {/* Top Stat Cards */}
        <div className="flex gap-6">
          <div className="flex-1 h-36 bg-gray-200 rounded-2xl" />
          <div className="flex-1 h-36 bg-gray-200 rounded-2xl" />
          <div className="flex-1 h-36 bg-gray-200 rounded-2xl" />
        </div>

        {/* Middle Section */}
        <div className="flex gap-6">
          {/* Recent Transactions */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow space-y-4">
            <div className="h-6 w-48 bg-gray-200 rounded" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-200 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-40 bg-gray-200 rounded" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="w-1/3 bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
            <div className="h-64 w-64 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
