import "../styles/Events.css";
import CenteredSection from "../components/Centered";
import useEvents from "../hooks/useEvents";
import {
  EventItem,
  EventItemSkeleton,
  EventDetailErrorPage,
} from "../components/Events/Index";
import Menu from "../components/Menu";
import { MenuItem } from "@mui/material";
import headerImage from "../assets/Overview/manreadings.6198af54313c7212de20.png";

const Events = () => {
  const {
    events,
    isFetchingEvents,
    isFetchingEventsError,
    categoryFilterMenu,
    dateFilterMenu,
    eventTypeFilterMenu,
  } = useEvents();

  return (
    <div className="events-page">
      <div className="events-page-header">
        <div className="events-page-header-background-image">
          <img src={headerImage} alt="" />
        </div>
        <div className="event-page-header-text-container"></div>
      </div>

      <CenteredSection className={"events-container"}>
        <div className="events-header">
          <div className="page-title">Upcoming Events</div>
          <div className="events-header-filters">
            <Menu
              open={categoryFilterMenu.open}
              anchorEl={categoryFilterMenu.anchorEl}
              handleClick={categoryFilterMenu.handleClick}
              handleClose={categoryFilterMenu.handleClose}
              label={"Category"}
            >
              <MenuItem>Select Category</MenuItem>
            </Menu>

            <Menu
              open={eventTypeFilterMenu.open}
              anchorEl={eventTypeFilterMenu.anchorEl}
              handleClick={eventTypeFilterMenu.handleClick}
              handleClose={eventTypeFilterMenu.handleClose}
              label={"Event Type"}
            >
              <MenuItem>Select Event Type</MenuItem>
            </Menu>

            <Menu
              open={dateFilterMenu.open}
              anchorEl={dateFilterMenu.anchorEl}
              handleClick={dateFilterMenu.handleClick}
              handleClose={dateFilterMenu.handleClose}
              label={"Date"}
              position="right"
            >
              <MenuItem>Select Date</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="events-container">
          {isFetchingEvents ? (
            <div className="events">
              {Array.from(Array(10)).map((_, index) => (
                <EventItemSkeleton key={index} />
              ))}
            </div>
          ) : isFetchingEventsError ? (
            <>Something went wrong...</>
          ) : events ? (
            events.length === 0 ? (
              <>No events</>
            ) : (
              <div className="events">
                {events.map((event, index) => (
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
