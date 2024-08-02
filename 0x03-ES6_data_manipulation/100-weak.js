export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
