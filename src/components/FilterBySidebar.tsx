import { useSelector } from "react-redux";
import FilterComponent from "../common/FilterComponent";
import useCheckboxChangeHandler from "./hooks/useCheckboxChangeHandler";
import useFilterChangeHandler from "./hooks/useFilterChangeHandler";
import { Typography } from "@material-tailwind/react";

const FilterBySidebar = () => {
  const { filterTypeData } = useSelector((state: any) => state.jobFilter);

  const { handleCheckboxChange } = useCheckboxChangeHandler();
  useFilterChangeHandler();

  return (
    <div className="custom-box-shadow " style={{ width: "340px" }}>
      <Typography className="p-4 text-20 color-EDEDED">Filter by</Typography>
      <div className="border-b-2 border-gray-700"></div>
      {Array.isArray(filterTypeData) &&
        filterTypeData?.map((data) => {
          return (
            <FilterComponent
              key={`${data.id}-${data.type}`}
              companyData={data}
              onChangeHandler={handleCheckboxChange}
            />
          );
        })}
    </div>
  );
};

export default FilterBySidebar;
