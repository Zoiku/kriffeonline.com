import { format } from "../utils/currency";

const Currency = ({ value }) => {
  return <>GHS {format(value)}</>;
};

export default Currency;
