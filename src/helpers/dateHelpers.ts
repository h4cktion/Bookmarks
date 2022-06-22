import { monthInFrench } from "../constants";

export const getFormatedDate = (date: Date): string => {
  const frenchLocalDate = date.toLocaleDateString();
  const [dd, mm, yyyy] = frenchLocalDate.split("/");
  return `${dd} ${monthInFrench[parseInt(mm)]} ${yyyy}`;
};

export const getTimeSinceNow = (timestamp: number): string => {
  const now = new Date().getTime();
  const timeLapsInSecond = Math.round((now - timestamp) / 1000);

  if (timeLapsInSecond < 60) {
    return `il y a ${timeLapsInSecond} secondes`;
  }
  if (timeLapsInSecond / 60 < 60) {
    return `il y a ${Math.round(timeLapsInSecond / 60)} minutes`;
  }
  if (timeLapsInSecond / 60 < 3600) {
    return `il y a ${Math.round(timeLapsInSecond / 60 / 60)} heures`;
  }
  return `il y a ${Math.round(timeLapsInSecond / 60 / 60 / 60)} jours`;
};

export const formatDuration = (dureration: string): string => {
  const sec_num = parseInt(dureration, 10);
  const hours = Math.floor(sec_num / 3600);
  const minutes = Math.floor((sec_num - hours * 3600) / 60);
  const seconds = sec_num - hours * 3600 - minutes * 60;

  const hh = hours < 10 ? "0" + hours : hours;
  const mm = minutes < 10 ? "0" + minutes : minutes;
  const ss = seconds < 10 ? "0" + seconds : seconds;

  return hh + ":" + mm + ":" + ss;
};
