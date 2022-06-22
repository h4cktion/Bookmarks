import { monthInFrench } from "../constants";

export const getFormatedDate = (date: Date): string => {
  const frenchLocalDate = date.toLocaleDateString();
  const [dd, mm, yyyy] = frenchLocalDate.split("/");
  return `${dd} ${monthInFrench[parseInt(mm)]} ${yyyy}`;
};
