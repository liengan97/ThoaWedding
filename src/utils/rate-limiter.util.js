import rateLimit from "next-rate-limit";

export const limiter = rateLimit({
  interval: 60 * 1000, // Limit per minute
  uniqueTokenPerInterval: 5, // 50 requests per minute per user
});