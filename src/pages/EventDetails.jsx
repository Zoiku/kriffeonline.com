import "../styles/EventDetails.css";
import CenteredSection from "../components/Centered";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import { EventDateBox, EventPageLoading } from "../components/Events/Index";
import Button from "../components/Button";

const EventDetails = () => {
  const { eventNo } = useParams();
  const { event, isFetchingEvent, isFetchingEventError } = useEvent(eventNo);
  console.log(event);

  return (
    <div className="event-details-page-container">
      {isFetchingEvent ? (
        <EventPageLoading />
      ) : isFetchingEventError ? (
        <>Something went wrong...</>
      ) : event ? (
        <div className="event-details-page">
          <div className="event-detail-background-header">
            <div className="event-detail-background-image"></div>
            <div className="event-detail-background-header-backdrop">
              <div className="event-detail-header-container">
                <CenteredSection className={"event-detail-header"}>
                  <div>
                    <div>
                      <span><small>{event.event_category_name}</small></span>
                    </div>
                    <div className="event-detail-name">
                      <span>{event.name}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <small>Hosted by</small> <span><small>{event.host}</small></span>
                    </div>
                  </div>
                </CenteredSection>
              </div>
            </div>
          </div>
          <div>
            <CenteredSection className={"event-detail-body"}>
              <div className="event-detail-description-box">
                <div className="event-date-box-container">
                  <EventDateBox
                    month={new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                    day={new Date(event.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                    })}
                  />
                  <div className="event-date-details">
                    <div>
                      <strong>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                        })}
                      </strong>
                    </div>
                    <div>
                      <strong>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          dateStyle: "long",
                        })}
                      </strong>
                    </div>
                    <div>{event.date}</div>
                  </div>
                </div>
                <div>
                  <Button
                    fullWidth
                    theme={"theme3"}
                    label={"Purchase your ticket"}
                  />
                </div>
              </div>
              <div className="event-details">
                <div>{event.description}</div>
              </div>
            </CenteredSection>
          </div>
        </div>
      ) : (
        <>Something went wrong...</>
      )}
    </div>
  );
};

export default EventDetails;
