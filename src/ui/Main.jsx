import Location from "./Location";
import Overview from "./Overview";
import TableDashboard from "../features/table/TableDashboard";

function Main() {
  return (
    <div className="w-full">
      <div className="h-full bg-white">
        <div className="p-6 h-full">
          <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-3">
            Dashboard
          </h1>
          <div className="max-w-4xl h-auto mx-auto grid gap-10 grid-cols-1 grid-rows-1 big:grid-cols-2 big:grid-rows-3 ">
            <TableDashboard />
            <Location />
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
