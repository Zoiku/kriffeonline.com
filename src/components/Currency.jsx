import { format } from "../utils/currency";

const Currency = ({ value }) => {
  return <>GHS {format(Number(value))}</>;
};

export default Currency;
