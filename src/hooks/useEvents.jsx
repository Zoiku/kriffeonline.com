import axios from "../services/axios";
import useMenu from "./useMenu";

export const getEvents = async () => {
  return (await axios.get("/list_events")).data.events.data;
};

const useEvents = () => {
  const categoryFilterMenu = useMenu();
  const eventTypeFilterMenu = useMenu();
  const dateFilterMenu = useMenu();

  return {
    categoryFilterMenu,
    eventTypeFilterMenu,
    dateFilterMenu,
  };
};

export default useEvents;
