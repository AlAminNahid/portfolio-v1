type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      retryAfterSeconds: Math.ceil(WINDOW_MS / 1000),
    };
  }

  bucket.count += 1;
  const retryAfterSeconds = Math.ceil((bucket.resetAt - now) / 1000);

  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (now >= v.resetAt) buckets.delete(k);
    }
  }

  return {
    allowed: bucket.count <= MAX_REQUESTS,
    remaining: Math.max(0, MAX_REQUESTS - bucket.count),
    retryAfterSeconds,
  };
}

/** Best-effort client IP from the proxy headers Vercel sets. */
export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}
