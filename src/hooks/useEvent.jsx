import axios from "../services/axios";
import { useQuery } from "react-query";
import useCountdown from "./useCountdown";

const getEventDetailByEventNo = async (eventNo) => {
  // return (await axios.get(`/get_event_by_id?event_id=${eventNo}`)).data.event;
  return {
    event_no: 1,
    host: "Test",
    name: "Test",
    date: new Date(),
    companyemail: "Test",
    description: "Test",
    location: "Test",
    ticket_type: [
      {
        id: 1,
        name: "Test",
        description: "Test",
        package_info: "Test",
        package_type: "Free",
        price: 0,
      },
      {
        id: 2,
        name: "Test",
        description: "Test",
        package_info: "Test",
        package_type: "Paid",
        price: 100,
      },
    ],
  };
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
