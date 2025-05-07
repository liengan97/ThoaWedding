import WedEnv from "@/config/wedenv.config";
import rateLimit from "express-rate-limit";

import { LRUCache } from 'lru-cache'

const limitter = new LRUCache({
  max: 100, // Max requests per cache entry
  ttl: 60 * 1000, // 1 minute
});

// const limitter = rateLimit({
//   windowMs: WedEnv.RATE_LIMIT_WINDOW,
//   max: WedEnv.RATE_LIMIT_MAX_REQUEST_PER_WINDOW,
//   message: "Too many requests, try again later.",
// });

export default limitter;