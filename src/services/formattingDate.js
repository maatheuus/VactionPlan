import { isBefore, differenceInCalendarDays } from "date-fns";

export const formattingDistance = (start, end) => {
  const compareDates = differenceInCalendarDays(new Date(end), new Date(start));
  return compareDates;
};

export const checkDistance = (start, end) => {
  const resultBefore = isBefore(new Date(end), new Date(start));

  return resultBefore;
};
