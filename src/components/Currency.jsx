import { format } from "../utils/currency";

const Currency = ({ value }) => {
  return <>$ {format(value)}</>;
};

export default Currency;
