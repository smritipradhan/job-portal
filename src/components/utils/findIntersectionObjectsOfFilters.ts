export const findIntersectionOfFilters = (arrays: any) => {
  // Hashing : Create a map to store the frequency of each ID
  const idMap = new Map();

  // Iterate over the first array to populate the map
  arrays[0]?.forEach((obj: any) => {
    idMap.set(obj?.id, (idMap.get(obj?.id) || 0) + 1);
  });

  // Iterate over the remaining arrays to update the frequency
  for (let i = 1; i < arrays.length; i++) {
    arrays[i].forEach((obj: any) => {
      const frequency = idMap.get(obj?.id);
      if (frequency !== undefined) {
        idMap.set(obj?.id, frequency + 1);
      }
    });
  }

  // Filter objects with a frequency equal to the number of arrays
  const commonObjects = arrays[0]?.filter(
    (obj: any) => idMap.get(obj?.id) === arrays?.length
  );

  if (commonObjects) return commonObjects;
  else return "";
};
