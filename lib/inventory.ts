import { Redis } from "@upstash/redis";

const SOLD_KEY_PREFIX = "shop:sold:";

let _redis: Redis | null = null;

function getRedis(): Redis {
  if (!_redis) {
    _redis = Redis.fromEnv();
  }
  return _redis;
}

/**
 * Checks Redis for sold status. Falls back to `false` (i.e. defer to the
 * static catalog's `inStock` field) if Redis isn't configured yet, so the
 * shop still renders before the Upstash integration is provisioned.
 */
export async function getSoldSlugs(slugs: string[]): Promise<Set<string>> {
  if (slugs.length === 0) return new Set();
  try {
    const redis = getRedis();
    const keys = slugs.map((slug) => `${SOLD_KEY_PREFIX}${slug}`);
    const results = await redis.mget<(boolean | null)[]>(...keys);
    const sold = new Set<string>();
    slugs.forEach((slug, i) => {
      if (results[i] === true) sold.add(slug);
    });
    return sold;
  } catch {
    return new Set();
  }
}

export async function isSold(slug: string): Promise<boolean> {
  try {
    const redis = getRedis();
    const sold = await redis.get<boolean>(`${SOLD_KEY_PREFIX}${slug}`);
    return sold === true;
  } catch {
    return false;
  }
}

export async function markSold(slug: string): Promise<void> {
  const redis = getRedis();
  await redis.set(`${SOLD_KEY_PREFIX}${slug}`, true);
}
