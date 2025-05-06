import moment from 'moment';

export function utcTime() {
  return new Date().toISOString();
}

export const formatWishDate = (date) => {
  return moment(date).format("MMMM D, YYYY [at] h:mm A");
}
