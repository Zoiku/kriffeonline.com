import { useState, useEffect, useRef } from "react";

const calculateTimeLeft = (endDate) => {
  const difference = +new Date(endDate) - +new Date();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const seconds = Math.floor(difference / 1000) % 60;
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
};

const useCountdown = (endDate) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const intervalRef = useRef();
  useEffect(() => {
    if (endDate) {
      setTimeLeft(calculateTimeLeft(endDate));
      const updateCountdown = () => {
        setTimeLeft(calculateTimeLeft(endDate));
        const now = new Date().getTime();
        const timeUntilNextSecond = 1000 - (now % 1000);
        intervalRef.current = setTimeout(updateCountdown, timeUntilNextSecond);
      };
      updateCountdown();
      return () => clearTimeout(intervalRef.current);
    }
  }, [endDate]);

  return timeLeft;
};

export default useCountdown;
