import "../styles/EventDetails.css";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import {
  EventDetailErrorPage,
  EventPageLoading,
} from "../components/Events/Index";
import CenteredSection from "../components/Centered";
import image from "../assets/Placeholder/wp7488228.jpg";
import { getLongDate } from "../utils/date";
import ReadMore from "../components/ReadMore";

const EventDetailsSection = ({ title, children }) => (
  <div className="event-detail-section">
    <div className="event-detail-section-title">{title}</div>
    <div className="event-detail-section-inner">{children}</div>
  </div>
);

const EventCountdown = ({ countdown }) =>
  countdown ? (
    <div className="event-page-countdown-values">
      <div>{countdown?.days}d</div>
      <div>:</div>
      <div>{countdown?.hours}h</div>
      <div>:</div>
      <div>{countdown?.minutes}m</div>
      <div>:</div>
      <div>{countdown?.seconds}s</div>
    </div>
  ) : (
    <span>- - - -</span>
  );

const EventDetails = () => {
  const { eventNo } = useParams();
  const { event, isFetchingEvent, isFetchingEventError, countdown } =
    useEvent(eventNo);

  return (
    <div className="event-details-page-container">
      {isFetchingEvent ? (
        <EventPageLoading />
      ) : isFetchingEventError ? (
        <EventDetailErrorPage />
      ) : event ? (
        <div className="event-details-page">
          <div className="event-detail-page-header">
            <div className="event-detail-page-header-image">
              <img src={image} alt="" />
            </div>

            <div className="event-detail-page-header-backdrop">
              <div className="event-detail-page-header-details">
                <div>{event.host}</div>
                <div className="event-details-name">{event.name}</div>
                <div>{event.location}</div>
                <div>
                  <span>{getLongDate(event.date)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="event-page-countdown">
            <EventCountdown countdown={countdown} />
          </div>

          <CenteredSection className={"event-page-content"}>
            <div className="event-page-detail-sections">
              <EventDetailsSection title={"Description"}>
                <ReadMore text={event.description} maxLength={400} />
              </EventDetailsSection>

              <EventDetailsSection title={"Date and Time"}>
                {new Date(event.date).toDateString()}
              </EventDetailsSection>

              <EventDetailsSection title={"Location"}>
                <p>{event.location}</p>
              </EventDetailsSection>

              <EventDetailsSection title={"About Organizers"}>
                <ul className="event-organizer-profile">
                  <li>{event.host}</li>
                  <li>{event.companyemail}</li>
                </ul>
              </EventDetailsSection>
            </div>
            <div className="event-page-images-container">
              <div className="event-page-images-sticky"></div>
            </div>
          </CenteredSection>
        </div>
      ) : (
        <EventDetailErrorPage />
      )}
    </div>
  );
};

export default EventDetails;
