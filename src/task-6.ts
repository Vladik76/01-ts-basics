function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<number>(["a", "b", "c"]); // "a"
getFirstElement<number>([true, false, true]); // true
