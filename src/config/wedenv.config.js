class WedEnv {

  // Storage
  static WISHES_COLLECTION_NAME = process.env.WISHES_COLLECTION_NAME || "wishes";

  // Firebase
  static FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
  static FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
  static FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
  static FIREBASE_STORAGE_BICKET = process.env.FIREBASE_STORAGE_BICKET;
  static FIREBASE_MESSAGING_SENDR_ID = process.env.FIREBASE_MESSAGING_SENDR_ID;
  static FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
  static FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;

  // App
  static WED_COUNT_DOWN_T0_DATE = process.env.WED_COUNT_DOWN_T0_DATE || "2025-05-24"

  // Vercel
  static VERCEL_URL = process.env.VERCEL_URL;

  // API
  static API_CREATE_WISH = process.env.API_CREATE_WISH || "/api/wishes"
  static API_WISH_SSE_EVENTS = process.env.API_WISH_SSE_EVENTS || "/api/wishes"

  // Rate limit
  static RATE_LIMIT_WINDOW = 1 * 60 * 1000
  static RATE_LIMIT_MAX_REQUEST_PER_WINDOW = 5
}

export default WedEnv;
