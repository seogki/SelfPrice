import dayjs from "dayjs";

export const addYear = (year: number) => {
  const date = dayjs().add(year, "year");
  return date.format("YYYY");
};
