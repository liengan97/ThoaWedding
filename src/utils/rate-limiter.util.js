import WedEnv from "@/config/wedenv.config";
import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: WedEnv.RATE_LIMIT_WINDOW,
  max: WedEnv.RATE_LIMIT_MAX_REQUEST_PER_WINDOW,
  message: "Too many requests, try again later.",
});
