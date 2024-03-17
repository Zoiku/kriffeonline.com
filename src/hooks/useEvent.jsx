import axios from "../services/axios";
import { useQuery } from "react-query";
import useCountdown from "./useCountdown";

const getEventDetailByEventNo = async (eventNo) => {
  return (await axios.get(`/get_event_by_id?event_id=${eventNo}`)).data.event;
};

const useEvent = (eventNo) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: "event",
    queryFn: () => getEventDetailByEventNo(eventNo),
    cacheTime: 0,
  });

  const countdown = useCountdown(data?.date);

  return {
    event: data,
    isFetchingEvent: isLoading,
    isFetchingEventError: isError,
    countdown,
  };
};

export default useEvent;
