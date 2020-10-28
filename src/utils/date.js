import * as moment from "moment";

var REFERENCE = moment(); // Date today
var TODAY = REFERENCE.clone().startOf("day"); // Start of day today
var YESTERDAY = REFERENCE.clone().subtract(1, "days").startOf("day"); // Start of day yesterday

const isToday = (dateTime) => moment(dateTime).isSame(TODAY, "d"); // Check if date is today
const isYesterday = (dateTime) => moment(dateTime).isSame(YESTERDAY, "d"); // Check if date is yesterday

const getTimeFromNow = (dateTime) => {
  // Default time format
  let time = moment(dateTime).format("MMM Do, YYYY");

  // If today, show time from now
  if (isToday(dateTime)) {
    time = moment(dateTime).fromNow();
  }

  // If yesterday, show time as "yesterday"
  if (isYesterday(dateTime)) {
    time = "yesterday";
  }

  return time;
};

export { isToday, isYesterday, getTimeFromNow };
