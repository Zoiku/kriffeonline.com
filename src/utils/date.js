export const getMonth = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
  });

export const getDay = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
  });

export const getWeekDay = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });

export const getLongDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    dateStyle: "long",
  });