import "../styles/Events.css";
import CenteredSection from "../components/Centered";
import useEvents from "../hooks/useEvents";
import { EventItem, EventItemSkeleton } from "../components/Events/Index";
import Menu from "../components/Menu";
import { MenuItem, MenuList } from "@mui/material";
import headerImage from "../assets/manreadings.6198af54313c7212de20.png";

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
      <div className="event-page-header">
        <div className="event-page-header-background-image">
          <img src={headerImage} alt="" />
        </div>
        <div className="event-page-header-text-container"></div>
      </div>

      <CenteredSection className={"events-container"}>
        <div className="events-header">
          <div>Upcoming Events</div>
          <div className="events-header-filters">
            <Menu
              open={categoryFilterMenu.open}
              anchorEl={categoryFilterMenu.anchorEl}
              handleClick={categoryFilterMenu.handleClick}
              handleClose={categoryFilterMenu.handleClose}
              label={"Category"}
            >
              <MenuList dense>
                <MenuItem>Select Category</MenuItem>
              </MenuList>
            </Menu>

            <Menu
              open={eventTypeFilterMenu.open}
              anchorEl={eventTypeFilterMenu.anchorEl}
              handleClick={eventTypeFilterMenu.handleClick}
              handleClose={eventTypeFilterMenu.handleClose}
              label={"Event Type"}
            >
              <MenuList dense>
                <MenuItem>Select Event Type</MenuItem>
              </MenuList>
            </Menu>

            <Menu
              open={dateFilterMenu.open}
              anchorEl={dateFilterMenu.anchorEl}
              handleClick={dateFilterMenu.handleClick}
              handleClose={dateFilterMenu.handleClose}
              label={"Date"}
            >
              <MenuList dense>
                <MenuItem>Select Date</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="events-container">
          {isFetchingEvents ? (
            <div className="events">
              {Array.from(Array(20)).map((_, index) => (
                <EventItemSkeleton key={index} />
              ))}
            </div>
          ) : isFetchingEventsError ? (
            <>Something went wrong</>
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
            <>Something went wrongAgain</>
          )}
        </div>
      </CenteredSection>
    </div>
  );
};

export default Events;
