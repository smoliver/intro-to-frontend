import React from 'react';

const NS = 'message--';

const timeToDisplay = (time) => {
  const date = new Date (time);
  const hours = date.getHours ();
  const minutes = date.getMinutes ();
  const displayHour = hours % 12 || 12;
  const displayMinutes = minutes > 10 ? `${minutes}` : `0${minutes}`;
  const period = hours / 12 < 1 ? 'am' : 'pm';

  const year = date.getFullYear ();
  const month = date.getMonth () + 1;
  const day = date.getDate ();

  return `${month}/${day}/${year} ${displayHour}:${displayMinutes}${period}`
}

export default ({message, time}, key) => (
  <div className={`${NS}container`} key={key}>
    <p className={`${NS}time`}>{timeToDisplay (time)}</p>
    <p className={`${NS}content`}>{message}</p>
  </div>
);

