export const filterBasedOnCompany = (
  jobDetailsList: any,
  listOfCompanies: string[]
) => {
  let filteredDataBasedOnCompany = [...jobDetailsList];

  filteredDataBasedOnCompany = jobDetailsList?.filter((item: any) =>
    listOfCompanies?.includes(item?.company)
  );
  return filteredDataBasedOnCompany;
};

export const filterBasedOnLocation = (
  jobDetailsList: any,
  listOfLocation: string[]
) => {
  let filteredDataBasedOnLocation = [...jobDetailsList];

  filteredDataBasedOnLocation = jobDetailsList?.filter((item: any) =>
    listOfLocation?.includes(item.location)
  );
  return filteredDataBasedOnLocation;
};

export const filterBasedOnDatePosted = (
  jobDetailsList: any,
  listOfDatePosted: string[]
) => {
  let filteredDataBasedOnDatePosted = [...jobDetailsList];

  filteredDataBasedOnDatePosted = jobDetailsList?.filter((item: any) =>
    listOfDatePosted?.includes(item?.datePosted)
  );
  return filteredDataBasedOnDatePosted;
};

export const filterBasedOnSalaryRange = (
  jobDetailsList: any,
  listOfSalaryRange: string[]
) => {
  let filteredDataBasedOnSalaryRange = [...jobDetailsList];

  filteredDataBasedOnSalaryRange = jobDetailsList?.filter((item: any) =>
    listOfSalaryRange?.includes(item?.salaryRange)
  );
  return filteredDataBasedOnSalaryRange;
};

export const filterBasedOnSkills = (
  jobDetailsList: any,
  listOfSkills: string[]
) => {
  let filteredDataBasedOnSkills = [...jobDetailsList];

  filteredDataBasedOnSkills = jobDetailsList?.filter((item: any) =>
    listOfSkills?.includes(item?.skills)
  );

  return filteredDataBasedOnSkills;
};

export const filterBasedOnExperience = (
  jobDetailsList: any,
  listOfExperience: string[]
) => {
  let filteredDataBasedOnExperience = [...jobDetailsList];

  filteredDataBasedOnExperience = jobDetailsList?.filter((item: any) =>
    listOfExperience?.includes(item?.experience)
  );

  return filteredDataBasedOnExperience;
};

export const filterBasedOnEducation = (
  jobDetailsList: any,
  listOfEducation: string[]
) => {
  let filteredDataBasedOnExperience = [...jobDetailsList];

  filteredDataBasedOnExperience = jobDetailsList?.filter((item: any) =>
    listOfEducation?.includes(item?.education)
  );

  return filteredDataBasedOnExperience;
};
