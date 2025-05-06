import { initRateLimit } from "next-rate-limit";

const basicRateLimiter = initRateLimit({ limit: 5, window: 60 * 1000 });

export default basicRateLimiter;
