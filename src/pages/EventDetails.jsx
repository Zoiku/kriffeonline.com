import "../styles/EventDetails.css";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import {
  EventDetailErrorPage,
  EventPageLoading,
} from "../components/Events/Index";
import CenteredSection from "../components/Centered";

const EventDetails = () => {
  const { eventNo } = useParams();
  const { event, isFetchingEvent, isFetchingEventError } = useEvent(eventNo);

  return (
    <div className="event-details-page-container">
      {isFetchingEvent ? (
        <EventPageLoading />
      ) : isFetchingEventError ? (
        <EventDetailErrorPage />
      ) : event ? (
        <div className="event-details-page">
          <CenteredSection>Page under construction</CenteredSection>
        </div>
      ) : (
        <EventDetailErrorPage />
      )}
    </div>
  );
};

export default EventDetails;
