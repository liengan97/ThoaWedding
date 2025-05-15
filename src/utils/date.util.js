import moment from 'moment';

export function utcTime() {
  return new Date().toISOString();
}

export const formatWishDate = (date) => {
  return moment(date).format("MMMM D, YYYY [at] h:mm A");
}

export const today = () => {
  return moment();
}

export const todayIsAfter = (date) => {
  const target = moment(date);
  return today().isAfter(target, "day");
}
