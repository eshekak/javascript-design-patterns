/**
 * Use sharing to support large numbers of fine-grained objects efficiently.
 *
 * In JS world: It is cache but if your function has side-effects, memoization is
 * bad idea.
 */

const cache = createCache();

function createCache() {
  const newCache = {};

  // eslint-disable-next-line id-length
  for (let x = 0; x < 100; x += 1) {
    // eslint-disable-next-line id-length
    for (let y = 0; y < 100; y += 1) {
      const cachedId = createCacheId(x, y);

      newCache[cachedId] = makePoint(x, y);
    }
  }

  return newCache;
}

// eslint-disable-next-line id-length
function createCacheId(x, y) {
  return String(x) + String(y);
}

// eslint-disable-next-line id-length
function makePoint(x, y) {
  // eslint-disable-next-line id-length
  return { x, y };
}

// eslint-disable-next-line id-length
function makePointCached(x, y) {
  const cachedId = createCacheId(x, y);
  const cachedPoint = cache[cachedId];

  return cachedPoint || makePoint(x, y);
}

console.dir(makePointCached(5, 5));
console.dir(makePointCached(101, 101));
