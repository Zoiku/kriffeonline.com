import axios from "../services/axios";
import { useQuery } from "react-query";
import useMenu from "./useMenu";

const getEvents = async () => {
  return (await axios.get("/list_events")).data.events.data;
};

const useEvents = () => {
  const { data, isFetching, isError } = useQuery("events", getEvents);

  const categoryFilterMenu = useMenu();
  const eventTypeFilterMenu = useMenu();
  const dateFilterMenu = useMenu();

  return {
    events: data,
    isFetchingEvents: isFetching,
    isFetchingEventsError: isError,
    categoryFilterMenu,
    eventTypeFilterMenu,
    dateFilterMenu,
  };
};

export default useEvents;
