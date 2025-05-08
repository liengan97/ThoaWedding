import { LRUCache } from 'lru-cache'

const limitter = new LRUCache({
  max: 500,
  ttl: 60 * 1000,
});

export default limitter;