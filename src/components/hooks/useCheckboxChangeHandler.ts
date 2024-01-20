import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFilterChangeHandler from "./useFilterChangeHandler";
import { filterActions } from "../../store/slices/jobFilterSlice";

const useCheckboxChangeHandler = () => {
  const dispatch = useDispatch();
  const { filterTypeData } = useSelector((state: any) => state.jobFilter);
  useFilterChangeHandler();

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string,
    name: string
  ) => {
    const checkedValue = Boolean(event?.target?.checked);

    const updatedFilterJobData = [...filterTypeData];
    let jobFilterUpdated = updatedFilterJobData.map((filterType) => {
      // Checking the Type of the Filter (Company / Location / Date Posted etc)
      if (filterType?.type === type) {
        let dataTobeUpdated = filterType?.data?.map((filterObj: any) => {
          // Checking the Filter Name applied in each Type
          if (filterObj?.name === name) {
            return { ...filterObj, checked: checkedValue };
          } else {
            return { ...filterObj };
          }
        });
        return { ...filterType, data: dataTobeUpdated };
      } else {
        return { ...filterType };
      }
    });
    dispatch(filterActions.setFilterTypeData(jobFilterUpdated));
  };

  return { handleCheckboxChange };
};

export default useCheckboxChangeHandler;
