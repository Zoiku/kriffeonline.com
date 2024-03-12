import { Skeleton, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import CenteredSection from "../Centered";
import { getDay, getMonth } from "../../utils/date";
import Currency from "../Currency";
import Stepper from "../Stepper";
import useEventCheckout from "../../hooks/useEventCheckout";
import Button from "../Button";
import Input from "../Input";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Dialog from "../Dialog";
import useDialog from "../../hooks/useDialog";

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
  const { handleChangeTickets, tickets } = useEventCheckout();
  return (
    <div className="event-checkout-form">
      <div className="event-checkout-form-head">
        <div>Select Tickets</div>
      </div>
      <div className="event-checkout-form-body no-padding">
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
                  id="event-ticket-type-quantity"
                  value={
                    tickets.find((ticket) => ticket.id === ticketType.id)
                      ? tickets.find((ticket) => ticket.id === ticketType.id)
                          .quantity
                      : 0
                  }
                  onChange={(e) =>
                    handleChangeTickets(
                      ticketType.id,
                      ticketType.price,
                      Number(e.target.value)
                    )
                  }
                >
                  {Array.from(Array(11)).map((_, index) => (
                    <option
                      key={index}
                      value={index}
                      id="event-ticket-type-quantity"
                      className="event-ticket-type-quantity-input-option"
                    >
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
  const { handleChangeContactInformation, contactInformation } =
    useEventCheckout();
  return (
    <div className="event-checkout-form">
      <div className="event-checkout-form-head">
        <div>Contact Information</div>
      </div>
      <div className="event-checkout-form-body">
        <div className="event-checkout-contact-inputs">
          <Input
            value={contactInformation.firstName}
            onChange={handleChangeContactInformation}
            autoFocus
            name={"firstName"}
            label={"First Name"}
          />
          <Input
            value={contactInformation.lastName}
            onChange={handleChangeContactInformation}
            name={"lastName"}
            label={"Last Name"}
          />
          <Input
            value={contactInformation.email}
            onChange={handleChangeContactInformation}
            name={"email"}
            label={"Email"}
          />
          <Input
            value={contactInformation.phoneNumber}
            onChange={handleChangeContactInformation}
            name={"phoneNumber"}
            label={"Phone Number"}
          />
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

const EventCheckoutSummary = ({ event }) => {
  const { tickets, checkoutSummary } = useEventCheckout();

  return (
    <div className="event-checkout-summary">
      <div className="event-checkout-form-head">Summary</div>
      <div className="event-checkout-form-body no-padding">
        {tickets.length > 0 ? (
          <div>
            <div className="event-checkout-summary-ticket-rows">
              {tickets.map((ticket, index) => (
                <div key={index} className="event-checkout-summary-ticket-row">
                  <div className="event-checkout-summary-ticket-row-ticket-info">
                    <div>
                      {
                        event.ticket_type.find(
                          (ticketType) => ticketType.id === ticket.id
                        )?.name
                      }
                    </div>
                    <div>x{ticket.quantity}</div>
                  </div>
                  <div>
                    <Currency value={ticket.total} />
                  </div>
                </div>
              ))}
            </div>
            <div className="event-checkout-cost-summary">
              <div>Total</div>
              <div className="">
                <Currency value={checkoutSummary.total} />
              </div>
            </div>
          </div>
        ) : (
          <div className="event-checkout-form-body">Please select a ticket</div>
        )}
      </div>
    </div>
  );
};

export const EventCheckout = ({ event, handleCloseDrawer }) => {
  const {
    activeStep,
    steps,
    handleNextStep,
    handlePreviousStep,
    handleResetEventCheckout,
  } = useEventCheckout();

  const activeFormMap = {
    1: <EventCheckoutTicketTypeForm event={event} />,
    2: <EventCheckoutContactInformationForm />,
    3: <EventCheckoutReviewForm />,
  };

  const activeForm = activeFormMap[activeStep];

  const dialog = useDialog();

  const handleIsExitEventCheckout = () => {
    dialog.handleOpen();
  };

  const handleExitEventCheckout = () => {
    handleResetEventCheckout();
    handleCloseDrawer();
    dialog.handleClose();
  };

  return (
    <div className="event-checkout">
      <Dialog
        open={dialog.open}
        handleClose={dialog.handleClose}
        handleAgree={handleExitEventCheckout}
        title={"Close checkout?"}
        content={"You will lose this form if you proceed"}
      />

      <div className="event-checkout-header">
        <span>{event.name}</span>
        <span>
          <IconButton onClick={handleIsExitEventCheckout}>
            <CloseRoundedIcon />
          </IconButton>
        </span>
      </div>
      <div className="event-checkout-content-container">
        <div className="event-checkout-stepper">
          <Stepper activeStep={activeStep} steps={steps} />
        </div>
        <div className="event-checkout-content">
          {activeStep !== steps.length - 1 && <div>{activeForm}</div>}
          <EventCheckoutSummary event={event} />
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
