// import {eachDayOfInterval} from "date-fns";
// import dayjs, {Dayjs} from "dayjs";

// const DateFormat = "DD MMMM, YYYY";
// const TimeFormat = "h:mm A";
// const DateTimeFormat = "DD MMMM, YYYY h:mm A";

// const formatDate = (date: Date | null | string | number) => {
//   if (!date) {
//     return "";
//   }
//   return dayjs(date).format(DateFormat);
// };

// const getDateTime = (date: Dayjs, time: string) => {
//   return date.set("hour", dayjs(time, TimeFormat).get("hour"));
// };

// const formatDateRange = (
//   initialAvailableDate: Date | string,
//   finalAvailableDate: Date | string,
// ) => {
//   const dateInterval = eachDayOfInterval({
//     start: new Date(initialAvailableDate),
//     end: new Date(finalAvailableDate),
//   });
//   return dateInterval.map((item) => dayjs(item).format(DateTimeFormat));
// };

// export {
//   formatDateRange,
//   formatDate,
//   getDateTime,
//   DateFormat,
//   TimeFormat,
//   DateTimeFormat,
// };
