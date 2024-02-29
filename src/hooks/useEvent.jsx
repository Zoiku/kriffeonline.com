import axios from "../services/axios";
import { useQuery } from "react-query";

const getEventDetailByEventNo = async (eventNo) => {
  return (await axios.get(`/get_event_by_id?event_id=${eventNo}`)).data.event;
};

const useEvent = (eventNo) => {
  const { data, isLoading, isError } = useQuery(
    "event",
    () => getEventDetailByEventNo(eventNo),
    {
      cacheTime: 0,
    }
  );

  return {
    event: data,
    isFetchingEvent: isLoading,
    isFetchingEventError: isError,
  };
};

export default useEvent;
