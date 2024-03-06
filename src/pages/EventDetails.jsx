import "../styles/EventDetails.css";
import CenteredSection from "../components/Centered";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import {
  EventDetailErrorPage,
  EventDetailsSection,
  EventPageLoading,
} from "../components/Events/Index";
import eventimg from "../assets/Placeholder/image1.png";

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
          <div className="event-detail-background-header">
            <div className="event-detail-background-image">
              <img src={eventimg} alt="" />
            </div>
            <div className="event-detail-background-header-backdrop">
              <div className="event-detail-header-container">
                <CenteredSection className={"event-detail-header"}>
                  <div>
                    <div>
                      <span>{event.event_category_name}</span>
                    </div>
                    <div className="event-detail-name">
                      <span>{event.name}</span>
                    </div>
                  </div>
                  <div>
                    <span> Hosted by {event.host}</span>
                  </div>
                </CenteredSection>
              </div>
            </div>
          </div>
          <div>
            <CenteredSection className={"event-detail-body"}>
              <div className="event-detail-description-box">
                <div></div>
              </div>
              <div className="event-details-sections">
                <EventDetailsSection title={"More about this event"}>
                  <div className="event-detail-description-container">
                    <div>{event.description}</div>
                    <div className="event-detail-images">
                      {event.images.map((_, index) => (
                        <div key={index} className="event-detail-image"></div>
                      ))}
                    </div>
                  </div>
                </EventDetailsSection>
                <EventDetailsSection title={"Connect with us"}>
                  <div className="event-social-media-icons"></div>
                </EventDetailsSection>
              </div>
            </CenteredSection>
          </div>
        </div>
      ) : (
        <EventDetailErrorPage />
      )}
    </div>
  );
};

export default EventDetails;
