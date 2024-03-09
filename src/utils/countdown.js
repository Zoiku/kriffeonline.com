export const calculateTimeLeft = (endDate) => {
  const difference = +new Date(endDate) - +new Date();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const seconds = Math.floor(difference / 1000) % 60;
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
};
