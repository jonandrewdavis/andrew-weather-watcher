import { format, addSeconds } from 'date-fns';

const formattedTime = (seconds, formatString) => {
  return format(addSeconds(new Date(0), seconds), formatString);
};

export default formattedTime;
