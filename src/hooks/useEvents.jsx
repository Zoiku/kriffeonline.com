import axios from "../services/axios";
import useMenu from "./useMenu";

export const getEvents = async () => {
  // return (await axios.get("/list_events")).data.events.data;
  return [
    {
      event_no: 1,
      ticket_type: [{ package_type: "Free", price: 0 }],
      date: new Date(),
      location: "Test",
      name: "Test",
    },
    {
      event_no: 2,
      ticket_type: [{ package_type: "Free", price: 0 }],
      date: new Date(),
      location: "Test",
      name: "Test",
    },
    {
      event_no: 3,
      ticket_type: [{ package_type: "Paid", price: 100 }],
      date: new Date(),
      location: "Test",
      name: "Test",
    },
    {
      event_no: 4,
      ticket_type: [{ package_type: "Paid", price: 100 }],
      date: new Date(),
      location: "Test",
      name: "Test",
    },
  ];
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
