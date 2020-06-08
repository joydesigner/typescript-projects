export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string):number => {
    return parseInt(value);
  });
  // because the month value is zero indexed, that why we need minus 1
  return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
};
