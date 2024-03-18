import "../styles/Events.css";
import CenteredSection from "../components/Centered";
import useEvents, { getEvents } from "../hooks/useEvents";
import {
  EventItem,
  EventItemSkeleton,
  EventDetailErrorPage,
  EventsErrorPage,
} from "../components/Events/Index";
import Menu from "../components/Menu";
import headerImage from "../assets/Overview/manreadings.6198af54313c7212de20.png";
import { useQuery } from "react-query";

const Events = () => {
  const eventsQuery = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const { categoryFilterMenu, dateFilterMenu, eventTypeFilterMenu } =
    useEvents();

  return (
    <div className="events-page">
      <div className="events-page-header">
        <div className="events-page-header-background-image">
          <img src={headerImage} alt="" />
        </div>
        <div className="event-page-header-text-container"></div>
      </div>

      <CenteredSection mobileWithPadding className={"events-container"}>
        <div className={"events-header"}>
          <div className="page-title">Upcoming Events</div>
          <div className="events-header-filters">
            <Menu
              open={categoryFilterMenu.open}
              anchorEl={categoryFilterMenu.anchorEl}
              handleClick={categoryFilterMenu.handleClick}
              handleClose={categoryFilterMenu.handleClose}
              label={"Category"}
            >
              <span>Select Category</span>
            </Menu>

            <Menu
              open={eventTypeFilterMenu.open}
              anchorEl={eventTypeFilterMenu.anchorEl}
              handleClick={eventTypeFilterMenu.handleClick}
              handleClose={eventTypeFilterMenu.handleClose}
              label={"Event Type"}
            >
              <span>Select Event Type</span>
            </Menu>

            <Menu
              open={dateFilterMenu.open}
              anchorEl={dateFilterMenu.anchorEl}
              handleClick={dateFilterMenu.handleClick}
              handleClose={dateFilterMenu.handleClose}
              label={"Date"}
              position="right"
            >
              <span>Select Date</span>
            </Menu>
          </div>
        </div>

        <div className="events-container">
          {eventsQuery.isLoading ? (
            <div className="events">
              {Array.from(Array(12)).map((_, index) => (
                <EventItemSkeleton key={index} />
              ))}
            </div>
          ) : eventsQuery.isError ? (
            <EventsErrorPage />
          ) : eventsQuery.data ? (
            eventsQuery.data.length === 0 ? (
              <>No events</>
            ) : (
              <div className="events">
                {eventsQuery.data.map((event, index) => (
                  <EventItem key={index} event={event} />
                ))}
              </div>
            )
          ) : (
            <EventDetailErrorPage />
          )}
        </div>
      </CenteredSection>
    </div>
  );
};

export default Events;
