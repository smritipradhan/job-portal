import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONSTANTS } from "../../constants/constants";
import { filterActions } from "../../store/slices/jobFilterSlice";
import {
  filterBasedOnCompany,
  filterBasedOnDatePosted,
  filterBasedOnEducation,
  filterBasedOnExperience,
  filterBasedOnLocation,
  filterBasedOnSalaryRange,
  filterBasedOnSkills,
} from "../utils/filterUtils";
import { findIntersectionOfFilters } from "../utils/findIntersectionObjectsOfFilters";

const useFilterChangeHandler = () => {
  const dispatch = useDispatch();

  const { filterTypeData, originalData, searchedValue } = useSelector(
    (state: any) => state.jobFilter
  );

  const getJobFilterList = (filterTypeData: any, type: string) => {
    let finalFilterList: string[] = [];
    const filterObjData = filterTypeData?.find(
      (filterObj: any) => filterObj?.type === type
    );

    finalFilterList = filterObjData?.data?.map(
      (filterElement: { checked: boolean; name: string }) => {
        if (filterElement?.checked) {
          return filterElement?.name;
        } else return "";
      }
    );

    finalFilterList = finalFilterList.filter(
      (filterElement: any) => filterElement !== ""
    );
    return finalFilterList;
  };

  const handleTheFiltersApplied = (filterTypeData: any) => {
    const jobBasedOnCompanyFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.COMPANY
    );
    const jobBasedOnLocationFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.LOCATION
    );
    const jobBasedOnDatePostedFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.DATE_POSTED
    );
    const jobBasedOnSalaryRangeFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.SALARY_RANGE
    );

    const jobBasedOnSkillsFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.SKILLS
    );
    const jobBasedOnExperienceFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.EXPERIENCE
    );
    const jobBasedOnEducationFilter = getJobFilterList(
      filterTypeData,
      CONSTANTS.EDUCATION
    );

    let filtersArray = [];

    // Get the Objects after Applying the Company Filter
    if (jobBasedOnCompanyFilter?.length !== 0) {
      const filterArray = filterBasedOnCompany(
        originalData,
        jobBasedOnCompanyFilter
      );

      filtersArray.push(filterArray);
    }

    // Get the Objects after Applying the Location Filter
    if (jobBasedOnLocationFilter?.length !== 0) {
      const filterArray = filterBasedOnLocation(
        originalData,
        jobBasedOnLocationFilter
      );

      filtersArray.push(filterArray);
    }

    // Get the Objects after Applying the Date Posted Filter
    if (jobBasedOnDatePostedFilter?.length !== 0) {
      const filterArray = filterBasedOnDatePosted(
        originalData,
        jobBasedOnDatePostedFilter
      );

      filtersArray.push(filterArray);
    }

    // Get the Objects after Applying the Salary Range Filter
    if (jobBasedOnSalaryRangeFilter?.length !== 0) {
      const filterArray = filterBasedOnSalaryRange(
        originalData,
        jobBasedOnSalaryRangeFilter
      );

      filtersArray.push(filterArray);
    }

    // Get the Objects after Applying the Skills Filter
    if (jobBasedOnSkillsFilter?.length !== 0) {
      const filterArray = filterBasedOnSkills(
        originalData,
        jobBasedOnSkillsFilter
      );

      filtersArray.push(filterArray);
    }
    // Get the Objects after Applying the Experience Filter
    if (jobBasedOnExperienceFilter?.length !== 0) {
      const filterArray = filterBasedOnExperience(
        originalData,
        jobBasedOnExperienceFilter
      );

      filtersArray.push(filterArray);
    }

    // Get the Objects after Applying the Education Filter
    if (jobBasedOnEducationFilter?.length !== 0) {
      const filterArray = filterBasedOnEducation(
        originalData,
        jobBasedOnEducationFilter
      );

      filtersArray.push(filterArray);
    }

    return filtersArray;
  };

  useEffect(() => {
    const filtersArray = handleTheFiltersApplied(filterTypeData);
    let finalData = findIntersectionOfFilters(filtersArray);

    if (finalData === "") {
      finalData = originalData?.filter((jobData: any) => {
        if (searchedValue !== "") {
          const jobRole = jobData?.jobRole?.replace(/\s/g, "")?.toLowerCase();
          const searchedString = searchedValue
            .replace(/\s/g, "")
            ?.toLowerCase();

          return jobRole?.includes(searchedString);
        } else {
          return jobData;
        }
      });

      dispatch(filterActions.setFilteredData(finalData));
    } else {
      finalData = finalData?.filter((jobData: { jobRole: string }) => {
        if (searchedValue !== "") {
          const jobRole = jobData?.jobRole?.replace(/\s/g, "")?.toLowerCase();
          const searchedString = searchedValue
            .replace(/\s/g, "")
            ?.toLowerCase();

          return jobRole?.includes(searchedString);
        } else {
          return jobData;
        }
      });

      dispatch(filterActions.setFilteredData(finalData));
    }
  }, [dispatch, filterTypeData, originalData, searchedValue]);
  return;
};

export default useFilterChangeHandler;
