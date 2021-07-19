import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
function TimeAgo({ timeStamp }) {
  let timeAgo = "";
  if (timeStamp) {
    let date = parseISO(timeStamp);
    let timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span>
      &nbsp;<i>{timeAgo}</i>
    </span>
  );
}
export default TimeAgo;
