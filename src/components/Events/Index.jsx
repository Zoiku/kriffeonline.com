import { Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import CenteredSection from "../Centered";
import { getDay, getMonth } from "../../utils/date";
import Currency from "../Currency";
import Stepper from "../Stepper";
import useEventCheckout from "../../hooks/useEventCheckout";
import Button from "../Button";
import Input from "../Input";

export const EventDetailErrorPage = () => (
  <div>
    <CenteredSection className={"event-detail-error-page"}>
      Something went wrong...
    </CenteredSection>
  </div>
);

export const EventPageLoading = () => (
  <div>
    <CenteredSection className={"events-loading-page"}>
      Please wait...
    </CenteredSection>
  </div>
);

export const EventItem = ({ event }) => {
  return (
    <NavLink to={`/events/${event.event_no}`} className="event-item">
      <div className="event-item-image">
        <div className="event-item-price">
          <span>
            {event.ticket_type.at(0).package_type === "Free" ? (
              "Free"
            ) : (
              <Currency value={event.ticket_type.at(0).price} />
            )}
          </span>
        </div>
      </div>
      <div className="event-item-details">
        <div className="event-item-details-date-container">
          <div>{getMonth(event.date)}</div>
          <div>{getDay(event.date)}</div>
        </div>
        <div className="event-item-details-info">
          <div>{event.location}</div>
          <div>{event.name}</div>
        </div>
      </div>
    </NavLink>
  );
};

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
        <Skeleton animation="wave" variant="text" width={"40%"} />
        <Skeleton animation="wave" variant="text" width={"60%"} />
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
  <div className="event-detail-section">
    <div className="event-detail-section-title">{title}</div>
    <div className="event-detail-section-inner">{children}</div>
  </div>
);

export const EventCountdown = ({ countdown }) =>
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

const EventCheckoutTicketTypeForm = ({ event }) => {
  return (
    <div className="event-checkout-form">
      <div className="event-checkout-form-head">
        <div>Ticket Type</div>
      </div>
      <div className="event-checkout-form-body">
        <div className="event-checkout-ticket-types">
          {event.ticket_type.map((ticketType, index) => (
            <div key={index} className="event-checkout-ticket-type">
              <div className="event-checkout-ticket-type-details">
                <div className="event-checkout-ticket-type-name">
                  {ticketType.name}
                </div>
                <div>{ticketType.description}</div>
                <div className="event-checkout-ticket-type-information">
                  {ticketType.package_info}
                </div>
                <div className="event-checkout-ticket-type-price">
                  {ticketType.package_type === "Free" ? (
                    "Free"
                  ) : (
                    <Currency value={ticketType.price} />
                  )}
                </div>
              </div>
              <div className="event-checkout-ticket-type-quantity">
                <span>Quanity: </span>
                <select
                  className="event-ticket-type-quantity-input"
                  name="event-ticket-type-quantity"
                  id=""
                >
                  {Array.from(Array(5)).map((_, index) => (
                    <option value={index} id="">
                      {index}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EventCheckoutContactInformationForm = () => {
  return (
    <div className="event-checkout-form">
      <div className="event-checkout-form-head">
        <div>Contact Information</div>
      </div>
      <div className="event-checkout-form-body">
        <div className="event-checkout-contact-inputs">
          <Input autoFocus name={"firstName"} label={"First Name"} />
          <Input name={"lastName"} label={"Last Name"} />
          <Input name={"email"} label={"Email"} />
          <Input name={"phoneNumber"} label={"Phone Number"} />
        </div>
      </div>
    </div>
  );
};

const EventCheckoutReviewForm = () => {
  return (
    <div className="event-checkout-form">
      <div className="event-checkout-form-head">
        <div>Review and Submit</div>
      </div>
      <div className="event-checkout-form-body"></div>
    </div>
  );
};

export const EventCheckout = ({ event }) => {
  const { activeStep, steps, handleNextStep, handlePreviousStep } =
    useEventCheckout();
  const activeFormMap = {
    1: <EventCheckoutTicketTypeForm event={event} />,
    2: <EventCheckoutContactInformationForm />,
    3: <EventCheckoutReviewForm />,
  };
  const activeForm = activeFormMap[activeStep];

  return (
    <div className="event-checkout">
      <div className="event-checkout-header">
        <span>{event.name}</span>
      </div>
      <div className="event-checkout-content-container">
        <div className="event-checkout-stepper">
          <Stepper activeStep={activeStep} steps={steps} />
        </div>
        <div className="event-checkout-content">
          {activeStep !== steps.length - 1 && <div>{activeForm}</div>}
          <div className="event-checkout-summary">
            <div className="event-checkout-form-head">Summary</div>
            <div className="event-checkout-form-body"></div>
          </div>
        </div>
      </div>
      <div className="event-checkout-footer">
        {activeStep > 1 && (
          <Button
            sx={{ width: 150 }}
            onClick={handlePreviousStep}
            label={"Back"}
          />
        )}
        {activeStep < steps.length - 1 ? (
          <Button sx={{ width: 150 }} onClick={handleNextStep} label={"Next"} />
        ) : (
          <Button sx={{ width: 150 }} label={"Checkout"} />
        )}
      </div>
    </div>
  );
};
