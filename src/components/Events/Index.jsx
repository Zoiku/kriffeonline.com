import { Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import CenteredSection from "../Centered";
import { getDay, getMonth } from "../../utils/date";

export const EventDetailErrorPage = () => (
  <div>
    <CenteredSection>Something went wrong...</CenteredSection>
  </div>
);

export const EventPageLoading = () => (
  <div>
    <CenteredSection className={"events-loading-page"}>Loading...</CenteredSection>
  </div>
);

export const EventItem = ({ event }) => (
  <NavLink to={`/events/${event.event_no}`} className="event-item">
    <div className="event-item-image"></div>
    <div className="event-item-details">
      <div className="event-item-details-date-container">
        <div>{getMonth(event.date)}</div>
        <div>{getDay(event.date)}</div>
      </div>
      <div className="event-item-details-info">
        <div>{event.location}</div>
        <div>{event.name}</div>
        <div>
          {event.ticket_type.find((type) => type.package_type === "paid")
            ?.price ?? "Free"}
        </div>
      </div>
    </div>
  </NavLink>
);

export const EventItemSkeleton = () => (
  <div className="event-item">
    <div>
      <Skeleton
        animation="wave"
        variant="rectangular"
        className="event-item-image"
      />
    </div>
    <div className="event-item-skeleton-details">
      <div className="event-item-skeleton-details-date">
        <Skeleton
          animation="wave"
          width={"100%"}
          height={"100%"}
          variant="rectangular"
        />
      </div>
      <div className="event-item-skeleton-details-info">
        <Skeleton animation="wave" variant="text" width={"60%"} />
        <Skeleton animation="wave" variant="text" width={"50%"} />
        <Skeleton animation="wave" variant="text" width={"30%"} />
      </div>
    </div>
  </div>
);

export const EventDateBox = ({ date }) => (
  <div className="event-date-box">
    <div className="event-date-box-inner">
      <div>{getMonth(date)}</div>
      <div>{getDay(date)}</div>
    </div>
  </div>
);

export const EventDetailsSection = ({ title, children }) => (
  <div className="event-details-section">
    <div className="event-details-section-title">{title}</div>
    {children}
  </div>
);
