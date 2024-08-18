/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export type OnlyRequired<T, R extends keyof T> = Required<Pick<T, R>> &
  Partial<Omit<T, R>>;
