enum DatePeroids {
  DAYS = 'days',
  HOURS = 'hours',
  MINUTES = 'minutes',
  SECONDS = 'seconds',
}

const UPDATED = 'Updated';
const UPDATED_ON = 'Updated on';
const AGO = 'ago';

const MONTHS: { [key: number]: string } = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

/**
 * Format date to "time ago" specific string
 */
export function timeAgo(date: string | Date): string {
  if (!date) {
    return '';
  }
  date = new Date(date);

  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 2592000;
  if (interval > 1) {
    return formatDate(date);
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return formatAgo(interval, DatePeroids.DAYS);
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return formatAgo(interval, DatePeroids.HOURS);
  }

  interval = seconds / 60;
  if (interval > 1) {
    return formatAgo(interval, DatePeroids.MINUTES);
  }

  return formatAgo(seconds, DatePeroids.SECONDS);
}

/**
 * Converts Date object to DD MM or DD MM YYYY format
 */
function formatDate(date: Date): string {
  const day = date.getDate();
  const month = MONTHS[date.getMonth()] || '';
  const year =
    date.getFullYear() !== new Date().getFullYear() ? date.getFullYear() : '';

  return `${UPDATED_ON} ${day} ${month} ${year}`;
}

/**
 * Format peroid of time to "Updated [value] [peroid] ago"
 */
function formatAgo(value: number, peroid: DatePeroids): string {
  if (!value || !peroid) {
    return '';
  }

  return `${UPDATED} ${Math.floor(value)} ${peroid} ${AGO}`;
}
