import "../styles/EventDetails.css";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import {
  EventCheckout,
  EventCountdown,
  EventDetailErrorPage,
  EventDetailsSection,
  EventPageLoading,
} from "../components/Events/Index";
import CenteredSection from "../components/Centered";
import image from "../assets/Placeholder/wp7488228.jpg";
import ReadMore from "../components/ReadMore";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import useDrawer from "../hooks/useDrawer";

const EventDetails = () => {
  const { anchor, open, handleClose, handleOpen } = useDrawer("right");
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
          <Drawer anchor={anchor} open={open} handleOpen={handleOpen}>
            <EventCheckout handleCloseDrawer={handleClose} event={event} />
          </Drawer>

          <div className="event-detail-page-header">
            <div className="event-detail-page-header-image">
              <img src={image} alt="" />
            </div>

            <div className="event-detail-page-header-backdrop">
              <div className="event-detail-page-header-details">
                <div className="event-detail-page-header-tiny-info">
                  <div>{event.host}</div>
                  <div className="event-details-name">{event.name}</div>
                </div>
                <div>
                  <Button
                    onClick={handleOpen}
                    sx={{ bgcolor: "white" }}
                    size={"large"}
                    label={"Buy Ticket"}
                  />
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
                  <li>Host: {event.host}</li>
                  <li>Company Email: {event.companyemail}</li>
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
