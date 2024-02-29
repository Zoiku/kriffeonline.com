import { Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import CenteredSection from "../Centered";

export const EventItem = ({ event }) => (
  <NavLink to={`/events/${event.event_no}`} className="event-item">
    <div className="event-item-image"></div>
    <div className="event-item-details">
      <div className="event-item-details-date-container">
        <div>
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </div>
        <div>
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit",
          })}
        </div>
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

export const EventPageLoading = () => (
  <div>
    <CenteredSection>Please wait...</CenteredSection>
  </div>
);

export const EventDateBox = ({ month, day }) => (
  <div className="event-date-box">
    <div>{month}</div>
    <div>{day}</div>
  </div>
);
