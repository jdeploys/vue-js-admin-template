export type Diff<T, U> = T extends U ? never : T;

export type Overwrite<T, U> = {
  [P in Diff<keyof T, keyof U>]: T[P];
} &
  U;
