import { todayIsAfter } from "./date.util";

export const getRandom = (items = []) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export const isEventPassed = () => {
  return todayIsAfter(process.env.NEXT_PUBLIC_WED_HIDE_WISH_FORM_AFTER_DATE);
}