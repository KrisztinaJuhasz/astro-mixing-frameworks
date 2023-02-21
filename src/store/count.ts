import { atom } from 'nanostores'

export const countStoreInitialValue: number = 0

export const countStore = atom<number>(countStoreInitialValue)
