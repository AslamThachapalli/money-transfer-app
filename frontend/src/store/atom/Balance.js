import { atom } from "recoil";

export const shouldRefetchBalanceState = atom({
    key: 'shouldRefetchBalanceState',
    default: false
})