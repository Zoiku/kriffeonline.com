import { useMemo, useState } from "react";
import { eventCheckoutSteps } from "../utils/event";
import { useAtom, atom } from "jotai";

const checkoutAtom = atom({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  tickets: [],
});

const useEventCheckout = () => {
  const [checkout, setCheckout] = useAtom(checkoutAtom);

  const checkoutSummary = useMemo(() => {
    if (checkout.tickets.length > 0) {
      return {
        total: checkout.tickets.reduce(
          (accumulator, ticket) => accumulator + ticket.total,
          0
        ),
      };
    } else {
      return {};
    }
  }, [checkout.tickets]);

  const handleChangeTickets = (id, price, quantity) => {
    setCheckout((previousCart) => {
      const total = price * quantity;
      if (quantity === 0) {
        const updatedTickets = previousCart.tickets.filter(
          (ticket) => ticket.id !== id
        );
        return { ...previousCart, tickets: updatedTickets };
      }
      const updatedTickets = previousCart.tickets.map((ticket) => {
        if (ticket.id === id) {
          return { ...ticket, quantity, total };
        }
        return ticket;
      });
      const existingTicketIndex = updatedTickets.findIndex(
        (ticket) => ticket.id === id
      );
      return {
        ...previousCart,
        tickets:
          existingTicketIndex !== -1
            ? updatedTickets
            : [...updatedTickets, { id, price, quantity, total }],
      };
    });
  };
  const handleChangeContactInformation = (e) => {
    setCheckout({
      ...checkout,
      [e.target.name]: e.target.value,
    });
  };
  const [activeStep, setActiveStep] = useState(1);
  const handleNextStep = () => {
    if (activeStep < eventCheckoutSteps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleResetEventCheckout = () => {
    setCheckout({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      tickets: [],
    });
  };

  return {
    activeStep,
    handleNextStep,
    handlePreviousStep,
    steps: eventCheckoutSteps,
    checkoutSummary,
    handleChangeContactInformation,
    handleChangeTickets,
    handleResetEventCheckout,
    tickets: checkout.tickets,
    contactInformation: {
      firstName: checkout.firstName,
      lastName: checkout.lastName,
      email: checkout.email,
      phoneNumber: checkout.phoneNumber,
    },
  };
};

export default useEventCheckout;
