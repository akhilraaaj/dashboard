
const Overview = () => {
    return (
      <div className="grow">
        <div className="flex flex-col px-8 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-medium">Overview</h1>
            <div className="flex items-center">
              <select className="p-2 bg-white border-2 rounded-md text-text font-medium w-32">
                <option>Last Month</option>
                <option>Last Year</option>
                <option>Last Day</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2 mb-4">
              <div className="bg-base-100 shadow-md">
                <div className="card-body p-4">
                  <p className="text-base sm:text-lg font-normal">Online orders</p>
                  <h2 className="font-semibold text-base sm:text-3xl">231</h2>
                </div>
              </div>
            </div>
            <div className="w-1/2 mb-4">
              <div className="bg-base-100 shadow-md">
                <div className="card-body p-4">
                  <p className="text-base sm:text-lg font-normal">Amount received</p>
                  <h2 className="font-semibold text-base sm:text-3xl">₹23,92,312.19</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;
  