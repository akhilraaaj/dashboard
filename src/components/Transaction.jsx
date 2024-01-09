import Table from "./Table";

export default function Transaction () {
  return (
    <div className="grow">
      <div className="w-full px-8 py-3 sticky top-0 z-10 items-center justify-between">
        <h1 className="text-xl font-medium mb-2">Transactions | This Month</h1>
        <div className="mt-4">
          <Table />
        </div>
      </div>
    </div>
  );
}

