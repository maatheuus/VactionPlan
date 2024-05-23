import Button from "../ui/Button";
import { useSearchParams } from "react-router-dom";

function FilterLayout({ filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("filterField", value);
    setSearchParams(searchParams);
  }
  const className =
    "bg-stone-100 text-stone-800 hover:bg-stone-900 hover:text-stone-100 disabled:cursor-not-allowed";
  const active = "bg-stone-900 text-stone-100";

  return (
    <div className="flex justify-end">
      <div className="flex gap-2 p-2 rounded-md bg-stone-200">
        <Button
          variation="primary"
          onClick={() => handleClick("all")}
          className={`${className} ${filterField === "all" && active}`}
          disabled={filterField === "all"}
        >
          ALL
        </Button>
        <Button
          variation="primary"
          onClick={() => handleClick("approve")}
          className={`${className} ${filterField === "approve" && active}`}
          disabled={filterField === "approve"}
        >
          APPROVE
        </Button>
        <Button
          variation="primary"
          onClick={() => handleClick("denied")}
          className={`${className} ${filterField === "denied" && active}`}
          disabled={filterField === "denied"}
        >
          DENIED
        </Button>
        <Button
          variation="primary"
          onClick={() => handleClick("pendent")}
          className={`${className} ${filterField === "pendent" && active}`}
          disabled={filterField === "pendent"}
        >
          PENDENT
        </Button>
      </div>
    </div>
  );
}

export default FilterLayout;
